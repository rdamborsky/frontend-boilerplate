/*jslint nomen: true, plusplus: true, sloppy: true, white: true */
/*global module, require */

var path = require('path'),
	lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet,
	folderMount = function folderMount(connect, point) {
		return connect.static(path.resolve(point));
	};

module.exports = function(grunt) {

	var Files = {
			main: 'app/scripts/app.js',
			models: 'app/scripts/models/**/*.js',
			views: 'app/scripts/views/**/*.js',
			specs: 'spec/**/*.js',
			templates: 'app/templates/**/*.html'
		},
		jslintFiles = [Files.main, Files.models, Files.views, Files.specs];

	grunt.initConfig({

		handlebars: {
			compile: {
				options: {
					namespace: false,
					amd: true
				},
				files: [
					{
						expand: true,
						cwd: 'app/templates',
						src: '**/*.html',
						dest: 'app/scripts/templates',
						ext: '.js'
					}
				]
			}
		},

		// until there is either multitask plugin or
		// it is possible to lint changed files only,
		// whole code base has to be linted at once
		jslint: {
			files: jslintFiles
		},

		jasmine: {
			// generates spec runner
			all: {
				options: {
					specs: Files.specs,
					helpers: [
						'app/scripts/require-config.js',
						'require-config-spec.js',
						'app/vendor/require.js',
						'app/vendor/zepto.js',
						'app/vendor/jasmine-zepto.js'
					],
					outfile: 'spec-runner.html',
					template: require('grunt-template-jasmine-requirejs')
				}
			}
		},

		// spawning up local server for livereload
		connect: {
			livereload: {
				options: {
					port: 9000,
					middleware: function(connect, options) {
						return [lrSnippet, folderMount(connect, '.')];
					}
				}
			}
		},

		// monitoring files changes
		// to keep in autoload loop, watch cannot be used
		// NOTE: check the possibility of merge watch and regarde
		regarde: {
			runner: {
				files: [Files.main, Files.models, Files.views, Files.templates, Files.specs],
				tasks: ['livereload']
			}
		},

		// watch stays in the loop if jslint fails, regarde does not...
		// NOTE: check "force" param of either jslint or regarde, whether it could help
		watch: {
			javascripts: {
				files: jslintFiles,
				tasks: ['jslint']
			},
			// Until there is a way how to get changed only files list,
			// it's necessary to run a task on a whole
			// https://github.com/gruntjs/grunt-contrib-watch/issues/14
			templates: {
				files: Files.templates,
				tasks: ['handlebars:compile']
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-handlebars');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-jslint');
	grunt.loadNpmTasks('grunt-contrib-jasmine');
	grunt.loadNpmTasks('grunt-contrib-livereload');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-regarde');

	grunt.registerTask('jasmine-generate', ['jasmine:all:build']);
	grunt.registerTask('jasmine-run', ['livereload-start', 'connect', 'regarde']);

	grunt.registerTask('default', ['watch']);

};

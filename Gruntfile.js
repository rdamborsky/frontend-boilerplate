/*jslint nomen: true, plusplus: true, sloppy: true, white: true */
/*global module */

module.exports = function(grunt) {

	var Files = {
			main: 'app/scripts/app.js',
			models: 'app/scripts/models/**/*.js',
			views: 'app/scripts/views/**/*.js',
			templates: 'app/templates/**/*.html'
		},
		jslintFiles = [Files.main, Files.models, Files.views];

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

	grunt.registerTask('default', ['watch']);

};

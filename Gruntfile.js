/*jslint nomen: true, plusplus: true, sloppy: true, white: true */
/*global module */

module.exports = function(grunt) {

	var Files = {
			templates: 'app/templates/**/*.html'
		};

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

		watch: {
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

	grunt.registerTask('default', ['watch']);

};

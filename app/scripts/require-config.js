/*jslint nomen: true, plusplus: true, sloppy: true, white: true */

var require = {

	urlArgs: 'bust=' +  (new Date()).getTime(),

	paths: {
		lodash: '../vendor/lodash',
		zepto: '../vendor/zepto',
		backbone: '../vendor/backbone',
		handlebars: '../vendor/handlebars.runtime'
	},

	shim: {
		zepto: {
			exports: '$'
		},
		backbone: {
			exports: 'Backbone',
			deps: ['lodash', 'zepto']
		},
		handlebars: {
			exports: 'Handlebars'
		}
	}

};

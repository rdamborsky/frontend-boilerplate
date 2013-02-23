/*jslint nomen: true, plusplus: true, sloppy: true, white: true */
/*global require */

require([
	'models/home/welcome-message',
	'views/home/welcome-message',
	'zepto'
], function(Model, View, $) {

	var model, view;

	model = new Model({
		message: 'HiJACK!'
	});
	view = new View({
		model: model,
		el: $('#container')
	});

	view.render();

});

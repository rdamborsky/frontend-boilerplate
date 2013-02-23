/*jslint nomen: true, plusplus: true, sloppy: true, white: true */
/*global define, describe, it, expect */

define([
	'models/home/welcome-message',
	'views/home/welcome-message',
	'zepto'
], function(Model, View, $) {

	describe("Welcome message", function() {

		it("renders properly", function() {
			var model, view, $rendered;

			model = new Model({ message: 'woot' });
			view = new View({ model: model });
			$rendered = $(view.render().el);

			expect($rendered).toBe('div');
			expect($rendered).toHaveText('woot');
		});

	});

});

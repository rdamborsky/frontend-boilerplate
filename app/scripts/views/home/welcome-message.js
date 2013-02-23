/*jslint nomen: true, plusplus: true, sloppy: true, white: true */
/*global define */

define([
	'backbone'
], function(Backbone) {

	return Backbone.View.extend({

		initialize: function() {
			console.log('Welcome message view instantiated.');
		},

		render: function() {
			this.$el.html("HiJACK!");
			return this;
		}

	});

});

/*jslint nomen: true, plusplus: true, sloppy: true, white: true */
/*global define */

define([
	'backbone',
	'templates/home/welcome-message'
], function(Backbone, template) {

	return Backbone.View.extend({

		template: template,

		initialize: function() {
			console.log('Welcome message view instantiated.');
		},

		render: function() {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}

	});

});

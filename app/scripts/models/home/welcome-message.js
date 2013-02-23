/*jslint nomen: true, plusplus: true, sloppy: true, white: true */
/*global define, window */

define([
	'backbone'
], function(Backbone) {

	return Backbone.Model.extend({

		initialize: function() {
			console.log('Welcome message model instantiated.');
		}

	});

});

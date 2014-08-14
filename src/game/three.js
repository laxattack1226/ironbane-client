'use strict';

// wrapper for THREE to angular
(function (THREE, angular) {

	angular.module('Ironbane.game.THREE', [])
		.service('THREE', [

			function () {
				return THREE;
			}
		]);

})(window.THREE, window.angular);
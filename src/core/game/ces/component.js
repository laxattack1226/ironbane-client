'use strict';

angular.module('Ironbane.game.ces.Component', [])
    .factory('Component', [

        function () {
            var Component = function () {

            };

            /**
             * Name of this component. It is expected to be overriden and
             * should be unique.
             * @public
             * @readonly
             * @property {String} name
             */
            Component.prototype.name = '';

            return Component;
        }
    ]);
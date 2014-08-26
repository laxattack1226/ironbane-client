angular.module('Ironbane.game.ces.component', [])
    .factory('Component', [

        function () {
            'use strict';

            var Component = function () {};

            /**
             * Name of this component. It is expected to be overriden and
             * should be unique.
             * @public
             * @readonly
             * @property {String} name
             */
            Component.prototype.name = '';

            Component.prototype.serialize = function () {
                var component = this;

                return JSON.stringify(component);
            };

            Component.prototype.deserialize = function (json) {
                angular.copy(json, this);
            };

            return Component;
        }
    ]);

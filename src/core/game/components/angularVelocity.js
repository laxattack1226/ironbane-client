'use strict';

angular.module('Ironbane.game.components.angularVelocity', [
    'Ironbane.game.ces.Component'
])
    .factory('AngularVelocity', [
        'Component',
        function (Component) {
            var AngularVelocity = function (x, y, z) {
                var component = new Component();
                component.name = 'angularVelocity';

                component.x = x || 0;
                component.y = y || 0;
                component.z = z || 0;

                return component;
            };

            return AngularVelocity;
        }
    ]);
'use strict';

angular.module('Ironbane.game.components.rotation', [
    'Ironbane.game.ces.Component'
])
    .factory('Rotation', [
        'Component',
        function (Component) {
            var Rotation = function (x, y, z) {
                var component = new Component();

                component.name = 'rotation';

                component.x = x || 0;
                component.y = y || 0;
                component.z = z || 0;

                return component;
            };

            return Rotation;
        }
    ]);
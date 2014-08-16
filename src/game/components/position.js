'use strict';

angular.module('Ironbane.game.components.position', [
    'Ironbane.game.ces.Component'
])
    .factory('Position', [
        'Component',
        function (Component) {
            var Position = function (x, y, z) {
                var component = new Component();

                component.name = 'position';

                component.x = x || 0;
                component.y = y || 0;
                component.z = z || 0;

                return component;
            };

            return Position;
        }
    ]);
'use strict';

angular.module('Ironbane.game.components.linkedPosition', [
    'Ironbane.game.ces.Component'
])
    .factory('LinkedPosition', [
        'Component',
        function (Component) {
            var LinkedPosition = function (target, x, y, z) {
                var component = new Component();
                component.name = 'linkedPosition';

                component.target = target;
                component.x = !!x;
                component.y = !!y;
                component.z = !!z;

                return component;
            };

            return LinkedPosition;
        }
    ]);
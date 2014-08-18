'use strict';

angular.module('Ironbane.game.components.speed', [
    'Ironbane.game.ces.Component'
])
    .factory('Speed', [
        'Component',
        function (Component) {
            var Speed = function (amount) {
                var component = new Component();
                component.name = 'speed';

                component.value = amount || 0;

                return component;
            };

            return Speed;
        }
    ]);
'use strict';

angular.module('Ironbane.game.components.health', [
    'Ironbane.game.ces.Component'
])
    .factory('Health', [
        'Component',
        function (Component) {
            var Health = function (amount) {
                var component = new Component();
                component.name = 'health';

                component.maxHealth = component.health = amount || 1;

                return component;
            };

            return Health;
        }
    ]);
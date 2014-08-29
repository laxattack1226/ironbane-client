angular.module('Ironbane.game.components.health', [
    'Ironbane.game.ces.component'
])
    .factory('healthComponent', [
        'Component',
        function (Component) {
            'use strict';

            var Health = function (amount) {
                Component.call(this);

                this.value = amount;
                this.max = amount;
            };

            Health.prototype = Object.create(Component.prototype);
            Health.prototype.constructor = Health;

            Object.defineProperty(Health.prototype, 'name', {
                __proto__: null,
                enumerable: true,
                value: 'health'
            });

            return Health;
        }
    ]);
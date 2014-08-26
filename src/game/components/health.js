angular.module('Irobane.game.components.health', [
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

            Health.prototype.name = 'health';

            // freeze the name because that's important to the ECS
            Object.freeze(Health.prototype);

            return Health;
        }
    ]);
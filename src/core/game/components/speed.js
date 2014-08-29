angular.module('Irobane.game.components.speed', [
    'Ironbane.game.ces.component'
])
    .factory('speedComponent', [
        'Component',
        function (Component) {
            'use strict';

            var Speed = function (amount) {
                Component.call(this);

                this.value = amount;
            };

            Speed.prototype = Object.create(Component.prototype);
            Speed.prototype.constructor = Speed;

            Speed.prototype.name = 'speed';

            // freeze the name because that's important to the ECS
            Object.freeze(Speed.prototype);

            return Speed;
        }
    ]);
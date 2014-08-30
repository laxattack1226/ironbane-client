angular.module('Ironbane.game.components.speed', [
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

            Object.defineProperty(Speed.prototype, 'name', {
                enumerable: true,
                value: 'speed'
            });

            return Speed;
        }
    ]);
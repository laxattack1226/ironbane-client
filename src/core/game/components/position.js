angular.module('Ironbane.game.components.position', [
    'Ironbane.game.ces.component'
])
    .factory('positionComponent', [
        'Component',
        function (Component) {
            'use strict';

            var Position = function (x, y, z) {
                Component.call(this);

                this.x = x || 0;
                this.y = y || 0;
                this.z = z || 0;
            };

            Position.prototype = Object.create(Component.prototype);
            Position.prototype.constructor = Position;

            Object.defineProperty(Position.prototype, 'name', {
                enumerable: true,
                value: 'position'
            });

            return Position;
        }
    ]);
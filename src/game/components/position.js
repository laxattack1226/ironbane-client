'use strict';

angular.module('Ironbane.game.components.position', [
    'Ironbane.game.ces.Component'
])
    .factory('Position', [
        'Component',
        function (Component) {
            var Position = function (x, y, z) {
                this.name = 'position';

                this.x = x || 0;
                this.y = y || 0;
                this.z = z || 0;
            };

            Position.prototype = Object.create(Component.prototype);

            Position.prototype.constructor = Position;

            return Position;
        }
    ]);
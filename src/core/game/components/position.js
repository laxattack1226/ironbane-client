'use strict';

angular.module('Irobane.game.components.position', [
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

            Position.prototype.name = 'position';

            // freeze the name because that's important to the ECS
            Object.freeze(Position.prototype);

            return Position;
        }
    ]);
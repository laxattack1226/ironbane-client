angular.module('Ironbane.game.components.linkedPosition', [
    'Ironbane.game.ces.component'
])
    .factory('linkedPositionComponent', [
        'Component',
        function (Component) {
            'use strict';

            var LinkedPosition = function (target, x, y, z) {
                Component.call(this);

                this.target = target;
                this.x = !!x;
                this.y = !!y;
                this.z = !!z;
            };

            LinkedPosition.prototype = Object.create(Component.prototype);
            LinkedPosition.prototype.constructor = LinkedPosition;

            LinkedPosition.prototype.name = 'linkedPosition';

            // freeze the name because that's important to the ECS
            Object.freeze(LinkedPosition.prototype);

            return LinkedPosition;
        }
    ]);
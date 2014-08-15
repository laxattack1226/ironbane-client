'use strict';

angular.module('Ironbane.game.components.rotation', [
    'Ironbane.game.ces.Component'
])
    .factory('Rotation', [
        'Component',
        function (Component) {
            var Rotation = function (x, y, z) {
                this.name = 'rotation';

                this.x = x || 0;
                this.y = y || 0;
                this.z = z || 0;
            };

            Rotation.prototype = Object.create(Component.prototype);

            Rotation.prototype.constructor = Rotation;

            return Rotation;
        }
    ]);
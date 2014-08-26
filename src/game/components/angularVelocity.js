angular.module('Irobane.game.components.angularVelocity', [
    'Ironbane.game.ces.Component'
])
    .factory('angularVelocityComponent', [
        'Component',
        function (Component) {
            'use strict';

            var AngularVelocity = function (x, y, z) {
                Component.call(this);

                this.x = x || 0;
                this.y = y || 0;
                this.z = z || 0;
            };

            AngularVelocity.prototype = Object.create(Component.prototype);
            AngularVelocity.prototype.constructor = AngularVelocity;

            AngularVelocity.prototype.name = 'angularVelocity';

            // freeze the name because that's important to the ECS
            Object.freeze(AngularVelocity.prototype);

            return AngularVelocity;
        }
    ]);
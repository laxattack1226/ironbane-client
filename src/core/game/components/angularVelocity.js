angular.module('Ironbane.game.components.angularVelocity', [
    'Ironbane.game.ces.component'
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

            Object.defineProperty(AngularVelocity.prototype, 'name', {
                enumerable: true,
                value: 'angularVelocity'
            });

            return AngularVelocity;
        }
    ]);
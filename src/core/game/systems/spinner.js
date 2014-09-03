// just a silly test system
angular.module('Ironbane.game.systems.spinner', [
    'Ironbane.game.ces.System'
])
    .service('SpinnerSystem', [
        'System',
        function (System) {
            'use strict';

            var Spinner = function () {
                System.call(this);
            };

            Spinner.prototype = Object.create(System.prototype);
            Spinner.prototype.constructor = Spinner;

            // override the system default update
            Spinner.prototype.update = function (dt) {
                var entities = this.world.getEntities('angularVelocity');

                entities.forEach(function (entity) {
                    var av = entity.getComponent('angularVelocity');

                    entity.rotation.x += (av.x * dt);
                    entity.rotation.y += (av.y * dt);
                    entity.rotation.z += (av.z * dt);
                });
            };

            return Spinner;
        }
    ]);
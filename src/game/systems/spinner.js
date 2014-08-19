'use strict';

// just a silly test system
angular.module('Ironbane.game.systems.Spinner', [
    'Ironbane.game.ces.System'
])
    .service('Spinner', [
        'System',
        function (System) {
            var spinner = new System();

            // override the system default update
            spinner.update = function (dt) {
                var entities = this.world.getEntities('angularVelocity');

                entities.forEach(function (entity) {
                    var av = entity.getComponent('angularVelocity');

                    entity.rotation.x += (av.x * dt);
                    entity.rotation.y += (av.y * dt);
                    entity.rotation.z += (av.z * dt);
                });
            };

            return spinner;
        }
    ]);
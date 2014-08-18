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
                var entities = this.world.getEntities('mesh');

                entities.forEach(function (entity) {
                    entity.rotation.x += 0.005;
                    entity.rotation.y += 0.01;
                });
            };

            return spinner;
        }
    ]);
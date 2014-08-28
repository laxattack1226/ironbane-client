'use strict';

angular.module('Ironbane.game.systems.PositionLinker', [
    'Ironbane.game.ces.System'
])
    .service('PositionLinker', [
        'System',
        function (System) {
            var linker = new System();

            // override the system default update
            linker.update = function (dt) {
                var entities = this.world.getEntities('linkedPosition');

                entities.forEach(function (entity) {
                    var link = entity.getComponent('linkedPosition');

                    if(link.x) {
                        entity.position.x = link.target.position.x;
                    }
                    if(link.y) {
                        entity.position.y = link.target.position.y;
                    }
                    if(link.z) {
                        entity.position.z = link.target.position.z;
                    }
                });
            };

            return linker;
        }
    ]);
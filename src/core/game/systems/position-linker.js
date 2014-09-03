angular.module('Ironbane.game.systems.position-linker', [
    'Ironbane.game.ces.System'
])
    .service('PositionLinkerSystem', [
        'System',
        function (System) {
            'use strict';

            var PositionLinker = function () {
                System.call(this);
            };

            PositionLinker.prototype = Object.create(System.prototype);
            PositionLinker.prototype.constructor = PositionLinker;

            // override the system default update
            PositionLinker.prototype.update = function (dt) {
                var entities = this.world.getEntities('linkedPosition');

                entities.forEach(function (entity) {
                    var link = entity.getComponent('linkedPosition');

                    if (link.x) {
                        entity.position.x = link.target.position.x;
                    }
                    if (link.y) {
                        entity.position.y = link.target.position.y;
                    }
                    if (link.z) {
                        entity.position.z = link.target.position.z;
                    }
                });
            };

            return PositionLinker;
        }
    ]);
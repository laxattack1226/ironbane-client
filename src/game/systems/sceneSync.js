'use strict';

// sync up everything with a scene object
angular.module('Ironbane.game.systems.SceneSync', [
    'Ironbane.game.ces.System'
])
    .service('SceneSync', [
        'System',
        function (System) {
            var sync = new System();

            // override the system default update
            sync.update = function (dt) {
                var entities = this.world.getEntities('sceneObject');

                entities.forEach(function (entity) {
                    var sceneObj = entity.getComponent('sceneObject').sceneObject;

                    if(entity.hasComponent('position')) {
                        var pos = entity.getComponent('position');
                        sceneObj.position.x = pos.x;
                        sceneObj.position.y = pos.y;
                        sceneObj.position.z = pos.z;
                    }

                    if(entity.hasComponent('rotation')) {
                        var rot = entity.getComponent('rotation');
                        sceneObj.rotation.x = rot.x;
                        sceneObj.rotation.y = rot.y;
                        sceneObj.rotation.z = rot.z;
                    }
                });
            };

            return sync;
        }
    ]);
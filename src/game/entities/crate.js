'use strict';

// quick template for a crate entity
angular.module('Ironbane.game.entities.Crate', [
    'Ironbane.game.ces.Entity',
    'Ironbane.game.components.position',
    'Ironbane.game.components.rotation',
    'Ironbane.game.components.sceneObject'
])
    .factory('Crate', [
        'Entity',
        'Position',
        'Rotation',
        'SceneObject',
        function (Entity, Position, Rotation, SceneObject) {
            var Crate = function (sceneObj, pos, rot) {
                var crate = new Entity(),
                    p, r;

                if (pos) {
                    p = new Position(pos.x, pos.y, pos.z);
                } else {
                    p = new Position();
                }

                if (rot) {
                    r = new Rotation(rot.x, rot.y, rot.z);
                } else {
                    r = new Rotation();
                }

                crate.addComponent(p);
                crate.addComponent(r);
                crate.addComponent(new SceneObject(sceneObj));

                return crate;
            };

            return Crate;
        }
    ]);
'use strict';

// quick template for a crate entity
angular.module('Ironbane.game.entities.Crate', [
    'Ironbane.game.ces.Entity',
    'Ironbane.game.components.position',
    'Ironbane.game.components.rotation',
    'Ironbane.game.components.sceneObject',
    'Ironbane.game.components.health'
])
    .factory('Crate', [
        'Entity',
        'Position',
        'Rotation',
        'SceneObject',
        'Health',
        function (Entity, Position, Rotation, SceneObject, Health) {
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
                crate.addComponent(new Health(100));

                return crate;
            };

            return Crate;
        }
    ]);
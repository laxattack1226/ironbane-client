'use strict';

// quick template for a crate entity
angular.module('Ironbane.game.entities.Crate', [
    'Ironbane.game.THREE',
    'Ironbane.game.ces.Entity',
    'Ironbane.game.components.health',
    'Ironbane.game.components.mesh'
])
    .factory('Crate', [
        'THREE',
        'Entity',
        'Health',
        'Mesh',
        function (THREE, Entity, Health, Mesh) {
            var Crate = function (x, y, z) {
                var crate, geometry, texture, material, mesh;

                crate = new Entity('Crate');
                crate.position.x = x;
                crate.position.y = y;
                crate.position.z = z;

                geometry = new THREE.BoxGeometry(200, 200, 200);

                texture = THREE.ImageUtils.loadTexture('assets/textures/crate.gif');

                material = new THREE.MeshBasicMaterial({
                    map: texture
                });

                mesh = new THREE.Mesh(geometry, material);

                crate.addComponent(new Mesh(mesh));
                crate.addComponent(new Health(100));

                return crate;
            };

            return Crate;
        }
    ]);
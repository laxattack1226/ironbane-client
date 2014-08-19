'use strict';

angular.module('Ironbane.game.entities.sun', [
    'Ironbane.game.ces.Entity',
    'Ironbane.game.THREE',
    'Ironbane.game.components.material',
    'Ironbane.game.components.mesh'
])
    .factory('Sun', [
        'Entity',
        'Material',
        'Mesh',
        'THREE',
        function (Entity, Material, Mesh, THREE) {
            var Sun = function () {
                var entity = new Entity('Sun'),
                    texture, geometry, material, mesh;

                texture = THREE.ImageUtils.loadTexture('assets/textures/sun.png');

                geometry = new THREE.PlaneGeometry(600, 600, 1, 1);

                material = new THREE.MeshBasicMaterial({
                    map: texture,
                    transparent: true,
                    alphaTest: 0.01
                });
                material.side = THREE.DoubleSide;

                mesh = new THREE.Mesh(geometry, material);

                entity.addComponent(new Material(material));
                entity.addComponent(new Mesh(mesh));

                return entity;
            };

            return Sun;
        }
    ]);
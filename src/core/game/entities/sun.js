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

                texture = THREE.ImageUtils.loadTexture('assets/textures/sky/sun.png');

                geometry = new THREE.PlaneGeometry(600, 600, 1, 1);

                var sunColor = new THREE.Color();
                sunColor.setStyle('yellow');
                material = new THREE.MeshBasicMaterial({
                    map: texture,
                    transparent: true,
                    alphaTest: 0.01,
                    side: THREE.DoubleSide,
                    color: sunColor
                });

                mesh = new THREE.Mesh(geometry, material);

                entity.addComponent(new Material(material));
                entity.addComponent(new Mesh(mesh));

                return entity;
            };

            return Sun;
        }
    ]);
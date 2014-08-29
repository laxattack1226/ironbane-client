angular.module('Ironbane.game.entities.sun', [
    'Ironbane.game.ces.entity',
    'Ironbane.game.THREE',
    'Ironbane.game.engine.component-factory'
])
    .factory('Sun', [
        'Entity',
        'ComponentFactory',
        'THREE',
        function (Entity, ComponentFactory, THREE) {
            'use strict';

            var Sun = function (tint) {
                var entity = new Entity('Sun'),
                    texture, geometry, material, mesh;

                texture = THREE.ImageUtils.loadTexture('assets/textures/sky/sun.png');

                geometry = new THREE.PlaneGeometry(600, 600, 1, 1);

                var sunColor = new THREE.Color();
                sunColor.setStyle(tint || 'yellow');
                material = new THREE.MeshBasicMaterial({
                    map: texture,
                    transparent: true,
                    alphaTest: 0.01,
                    side: THREE.DoubleSide,
                    color: sunColor
                });

                mesh = new THREE.Mesh(geometry, material);

                entity.addComponent(ComponentFactory.create('material', [material]));
                entity.addComponent(ComponentFactory.create('mesh', [mesh]));

                return entity;
            };

            return Sun;
        }
    ]);

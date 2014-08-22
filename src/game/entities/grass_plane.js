'use strict';

// another test entity
angular.module('Ironbane.game.entities.GrassPlane', [
    'Ironbane.game.THREE',
    'Ironbane.game.ces.Entity',
    'Ironbane.game.components.mesh'
])
    .factory('GrassPlane', [
        'THREE',
        'Entity',
        'Mesh',
        function (THREE, Entity, Mesh) {
            var defaultSettings = {
                repeatX: 128,
                repeatY: 128,
                segmentsW: 1,
                segmentsH: 1,
                width: 10000,
                height: 10000,
                anisotropy: 16
            };

            var GrassPlane = function (x, y, z, settings) {
                var plane, geometry, texture, material, mesh;

                settings = angular.extend({}, defaultSettings, settings);

                plane = new Entity('GrassPlane');
                plane.position.x = x || 0;
                plane.position.y = y || 0;
                plane.position.z = z || 0;

                geometry = new THREE.PlaneGeometry(settings.width, settings.height, settings.segmentsW, settings.segmentsH);

                texture = THREE.ImageUtils.loadTexture('assets/textures/lorez_grass.png');
                texture.wrapS = THREE.RepeatWrapping;
                texture.wrapT = THREE.RepeatWrapping;
                texture.repeat.x = settings.repeatX
                texture.repeat.y = settings.repeatY
                texture.anisotropy = settings.anisotropy;
                texture.magFilter = THREE.NearestFilter;
                texture.minFilter = THREE.NearestMipMapLinearFilter;

                material = new THREE.MeshBasicMaterial({
                    map: texture
                });

                mesh = new THREE.Mesh(geometry, material);
                mesh.rotateX(-Math.PI/2);

                plane.addComponent(new Mesh(mesh));

                return plane;
            };

            return GrassPlane;
        }
    ]);
'use strict';

// another test entity
angular.module('Ironbane.game.entities.Skybox', [
    'Ironbane.game.THREE',
    'Ironbane.game.ces.Entity',
    'Ironbane.game.components.mesh',
    'Ironbane.game.shaders.skybox'
])
    .factory('Skybox', [
        'THREE',
        'Entity',
        'Mesh',
        'SkyboxShader',
        function (THREE, Entity, Mesh, SkyboxShader) {
            var Skybox = function (x, y, z) {
                var sky, geometry, mesh;

                sky = new Entity('Skybox');
                sky.position.x = x || 0;
                sky.position.y = y || 0;
                sky.position.z = z || 0;

                geometry = new THREE.SphereGeometry(3000);

                mesh = new THREE.Mesh(geometry, SkyboxShader);

                sky.addComponent(new Mesh(mesh));

                return sky;
            };

            return Skybox;
        }
    ]);
// quick template for a crate entity
angular.module('Ironbane.game.entities.Crate', [
    'Ironbane.game.THREE',
    'Ironbane.game.ces.entity',
    'Ironbane.game.engine.component-factory',
    'Ironbane.game.engine.rng'
])
    .factory('Crate', [
            'THREE',
            'Entity',
            'RNG',
            'ComponentFactory',
            function (THREE, Entity, RNG, ComponentFactory) {
                'use strict';

                var rng = new RNG('dull sword');

                var Crate_Graffiti = function (x, y, z) {
                    var crate, geometry, texture, material, mesh;

                    crate_graffiti = new Entity('Crate_Graffiti');
                    crate.position.x = x;
                    crate.position.y = y;
                    crate.position.z = z;

                    geometry = new THREE.BoxGeometry(5, 5, 5);
                    texture = THREE.ImageUtils.loadTexture('assets/textures/crate_graffiti.gif');

                    material = new THREE.MeshBasicMaterial({
                        map: texture
                    });

                    mesh = new THREE.Mesh(geometry, material);

                    crate.addComponent(ComponentFactory.create('mesh', [mesh]));
                    crate.addComponent(ComponentFactory.create('health', [100]));
                    crate.addComponent(ComponentFactory.create('angularVelocity', [rng.uniform(), rng.uniform(), rng.uniform()]));

                        return crate_graffiti;
                    };

                    return Crate_Graffiti;
                }
            ]);

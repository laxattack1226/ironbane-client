'use strict';

angular.module('Ironbane.game.entities.character', [
    'Ironbane.game.ces.Entity',
    'Ironbane.game.THREE',
    'Ironbane.game.components.material',
    'Ironbane.game.components.sprite'
])
    .factory('Character', [
        'Entity',
        'Material',
        'Sprite',
        'THREE',
        function (Entity, Material, Sprite, THREE) {
            var Character = function (x, y, z) {
                var entity = new Entity('Guy'),
                    texture, material, sprite;

                texture = THREE.ImageUtils.loadTexture('assets/textures/base_human.png');
                // character sprites are 3 across, 8 down
                texture.repeat.set(1 / 3, 1 / 8);
                texture.magFilter = THREE.NearestFilter;
                texture.minFilter = THREE.NearestMipMapLinearFilter;

                material = new THREE.SpriteMaterial({
                    map: texture,
                    transparent: true,
                    alphaTest: 0.01,
                    side: THREE.DoubleSide
                });

                sprite = new THREE.Sprite(material);
                // sprites by default are tiny (0.5)
                sprite.scale.set(30,30,30); // TODO: figure out correct scale
                sprite.position.set(x, y, z);

                entity.addComponent(new Material(material));
                entity.addComponent(new Sprite(sprite));

                return entity;
            };

            return Character;
        }
    ]);
// just a silly test system
angular.module('Ironbane.game.systems.SpriteView', [
    'Ironbane.game.ces.System'
])
    .service('SpriteView', [
        'System',
        function (System) {
            'use strict';

            var getDirectionSpriteIndex = function (camera, sprite) {
                // We need a vector from the unit to the camera
                var uc = camera.position.clone();
                uc.sub(sprite.position);
                var rotrad = sprite.rotation.y;
                // Rotate vector with our own rotation
                var tx = ((uc.x * Math.cos(rotrad)) - (uc.z * Math.sin(rotrad)));
                var tz = ((uc.x * Math.sin(rotrad)) + (uc.z * Math.cos(rotrad)));
                uc.x = tx;
                uc.z = tz;

                var result = Math.atan2(uc.z, uc.x);

                result += Math.PI;
                while (result < 0) {
                    result += (Math.PI * 2);
                }
                while (result > (Math.PI * 2)) {
                    result -= (Math.PI * 2);
                }

                var index = 1;

                if (result >= 0.39 && result <= 1.17) {
                    index = 8;
                } else if (result > 1.17 && result <= 1.96) {
                    index = 7;
                } else if (result > 1.96 && result <= 2.74) {
                    index = 6;
                } else if (result > 2.74 && result <= 3.53) {
                    index = 5;
                } else if (result > 3.53 && result <= 4.31) {
                    index = 4;
                } else if (result > 4.31 && result <= 5.10) {
                    index = 3;
                } else if (result > 5.10 && result <= 5.89) {
                    index = 2;
                } else {
                    index = 1;
                }

                return index;
            };

            var SpriteView = function (camera) {
                System.call(this);

                this.camera = camera;
            };

            SpriteView.prototype = Object.create(System.prototype);

            SpriteView.prototype.constructor = SpriteView;

            SpriteView.prototype.update = function () {
                // TODO: limit to 8-way sprites
                var sprites = this.world.getEntities('sprite'),
                    camera = this.camera.getComponent('camera').camera;

                sprites.forEach(function(entity) {
                    var sprite = entity.getComponent('sprite').sprite,
                        direction = getDirectionSpriteIndex(camera, sprite);
                    // for now just do middle (until animation)
                    sprite.material.map.offset.set(2/3, direction / 8)
                });
            };

            return SpriteView;
        }
    ]);
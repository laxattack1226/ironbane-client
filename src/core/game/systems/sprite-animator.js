angular.module('Ironbane.game.systems.sprite-animator', [
    'Ironbane.game.ces.System'
])
    .service('SpriteAnimatorSystem', [
        'System',
        function (System) {
            'use strict';

            var SpriteAnimator = function () {
                System.call(this);
            };

            SpriteAnimator.prototype = Object.create(System.prototype);
            SpriteAnimator.prototype.constructor = SpriteAnimator;

            SpriteAnimator.prototype.update = function (dt) {
                var entities = this.world.getEntities('sprite', 'spriteAnimation');

                entities.forEach(function (entity) {
                    var sprite = entity.getComponent('sprite').sprite,
                        anim = entity.getComponent('spriteAnimation');

                    anim.runningTime += dt;
                    anim.currentFrame = parseInt((anim.runningTime / anim.speed) % anim.frames.length, 10);

                    // y is handled by sprite view currently (TODO: support arbitrary frames)
                    sprite.material.map.offset.x = anim.frames[anim.currentFrame] / anim.frames.length;

                    if (anim.cyclic && anim.currentFrame === anim.frames.length - 1) {
                        anim.frames = anim.frames.reverse();
                    }
                });
            };

            return SpriteAnimator;
        }
    ]);
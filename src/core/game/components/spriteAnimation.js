angular.module('Ironbane.game.components.spriteAnimation', [
    'Ironbane.game.ces.component'
])
    .factory('spriteAnimationComponent', [
        'Component',
        function (Component) {
            'use strict';

            var SpriteAnimation = function (animName, frames, speed, loop, cyclic) {
                Component.call(this);

                this.animationName = animName || 'idle';
                this.frames = frames || [0];
                this.speed = speed || 0.25;
                this.loop = loop !== false ? true : false;
                this.cyclic = false;
                this.currentFrame = 0;
                this.runningTime = 0;
            };

            SpriteAnimation.prototype = Object.create(Component.prototype);
            SpriteAnimation.prototype.constructor = SpriteAnimation;

            Object.defineProperty(SpriteAnimation.prototype, 'name', {
                __proto__: null,
                enumerable: true,
                value: 'spriteAnimation'
            });

            return SpriteAnimation;
        }
    ]);
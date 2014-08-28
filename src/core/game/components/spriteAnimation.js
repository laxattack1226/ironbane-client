'use strict';

angular.module('Ironbane.game.components.spriteAnimation', [
    'Ironbane.game.ces.Component'
])
    .factory('SpriteAnimation', [
        'Component',
        function (Component) {
            var SpriteAnimation = function (animName, frames, speed, loop, cyclic) {
                var component = new Component();
                component.name = 'spriteAnimation';

                component.animationName = animName || 'idle';
                component.frames = frames || [0];
                component.speed = speed || 0.25;
                component.loop = loop !== false ? true : false;
                component.cyclic = false;
                component.currentFrame = 0;
                component.runningTime = 0;

                return component;
            };

            return SpriteAnimation;
        }
    ]);
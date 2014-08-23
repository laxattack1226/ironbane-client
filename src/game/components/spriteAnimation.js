'use strict';

angular.module('Ironbane.game.components.spriteAnimation', [
    'Ironbane.game.ces.Component'
])
    .factory('SpriteAnimation', [
        'Component',
        function (Component) {
            var SpriteAnimation = function (animName, frames) {
                var component = new Component();
                component.name = 'spriteAnimation';

                component.animationName = animName || 'idle';
                component.frames = frames || [0];

                return component;
            };

            return SpriteAnimation;
        }
    ]);
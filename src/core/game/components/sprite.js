angular.module('Ironbane.game.components.sprite', [
    'Ironbane.game.ces.childEntityComponent'
])
    .factory('spriteComponent', [
        'ChildEntityComponent',
        function (ChildEntityComponent) {
            'use strict';

            var Sprite = function (sprite) {
                ChildEntityComponent.call(this);

                this.sprite = sprite;
                this.__childEntityProperty = 'sprite';
            };

            Sprite.prototype = Object.create(ChildEntityComponent.prototype);
            Sprite.prototype.constructor = Sprite;

            Object.defineProperty(Sprite.prototype, 'name', {
                enumerable: true,
                value: 'sprite'
            });

            return Sprite;
        }
    ]);
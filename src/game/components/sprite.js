'use strict';

angular.module('Ironbane.game.components.sprite', [
    'Ironbane.game.ces.ChildEntityComponent'
])
    .factory('Sprite', [
        'ChildEntityComponent',
        function (ChildEntityComponent) {
            var Sprite = function (sprite) {
                var component = new ChildEntityComponent();

                component.name = 'sprite';

                component.sprite = sprite;
                component.__childEntityProperty = 'sprite';

                return component;
            };

            return Sprite;
        }
    ]);
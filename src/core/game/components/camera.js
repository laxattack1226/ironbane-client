'use strict';

angular.module('Ironbane.game.components.camera', [
    'Ironbane.game.ces.ChildEntityComponent'
])
    .factory('Camera', [
        'ChildEntityComponent',
        function (ChildEntityComponent) {
            var Camera = function (camera) {
                var component = new ChildEntityComponent();

                component.name = 'camera';

                component.camera = camera;
                component.__childEntityProperty = 'camera';

                return component;
            };

            return Camera;
        }
    ]);
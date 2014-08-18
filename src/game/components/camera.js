'use strict';

angular.module('Ironbane.game.components.camera', [
    'Ironbane.game.ces.ThreeComponent'
])
    .factory('Camera', [
        'ThreeComponent',
        function (ThreeComponent) {
            var Camera = function (camera) {
                var component = new ThreeComponent();

                component.name = 'camera';

                component.camera = camera;
                component.__three = 'camera';

                return component;
            };

            return Camera;
        }
    ]);
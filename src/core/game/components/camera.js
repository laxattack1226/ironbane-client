angular.module('Ironbane.game.components.camera', [
    'Ironbane.game.ces.childEntityComponent'
])
    .factory('cameraComponent', [
        'ChildEntityComponent',
        function (ChildEntityComponent) {
            'use strict';

            var Camera = function (camera) {
                ChildEntityComponent.call(this);

                this.camera = camera;
                this.__childEntityProperty = 'camera';
            };

            Camera.prototype = Object.create(ChildEntityComponent.prototype);
            Camera.prototype.constructor = Camera;

            Object.defineProperty(Camera.prototype, 'name', {
                enumerable: true,
                value: 'camera'
            });

            return Camera;
        }
    ]);
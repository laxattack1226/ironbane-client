'use strict';

angular.module('Ironbane.game.components.sceneObject', [
    'Ironbane.game.ces.Component'
])
    .factory('SceneObject', [
        'Component',
        function (Component) {
            var SceneObject = function (sceneObject) {
                this.name = 'sceneObject';

                this.sceneObject = sceneObject;
            };

            SceneObject.prototype = Object.create(Component.prototype);

            SceneObject.prototype.constructor = SceneObject;

            return SceneObject;
        }
    ]);
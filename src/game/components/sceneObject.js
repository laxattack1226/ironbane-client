'use strict';

angular.module('Ironbane.game.components.sceneObject', [
    'Ironbane.game.ces.Component'
])
    .factory('SceneObject', [
        'Component',
        function (Component) {
            var SceneObject = function (sceneObject) {
                var component = new Component();

                component.name = 'sceneObject';

                component.sceneObject = sceneObject;

                return component;
            };

            return SceneObject;
        }
    ]);
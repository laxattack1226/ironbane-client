'use strict';

angular.module('Ironbane.game.components.mesh', [
    'Ironbane.game.ces.ThreeComponent'
])
    .factory('Mesh', [
        'ThreeComponent',
        function (ThreeComponent) {
            var Mesh = function (mesh) {
                var component = new ThreeComponent();

                component.name = 'mesh';

                component.mesh = mesh;
                component.__three = 'mesh';

                return component;
            };

            return Mesh;
        }
    ]);
'use strict';

angular.module('Ironbane.game.components.mesh', [
    'Ironbane.game.ces.ChildEntityComponent'
])
    .factory('Mesh', [
        'ChildEntityComponent',
        function (ChildEntityComponent) {
            var Mesh = function (mesh) {
                var component = new ChildEntityComponent();

                component.name = 'mesh';

                component.mesh = mesh;
                component.__childEntityProperty = 'mesh';

                return component;
            };

            return Mesh;
        }
    ]);
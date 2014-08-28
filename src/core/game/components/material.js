'use strict';

angular.module('Ironbane.game.components.material', [
    'Ironbane.game.ces.Component'
])
    .factory('Material', [
        'Component',
        function (Component) {
            var Material = function (material) {
                var component = new Component();

                component.name = 'material';

                component.material = material;

                return component;
            };

            return Material;
        }
    ]);
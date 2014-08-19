'use strict';

angular.module('Ironbane.game.components.light', [
    'Ironbane.game.ces.ChildEntityComponent'
])
    .factory('Light', [
        'ChildEntityComponent',
        function (ChildEntityComponent) {
            var Light = function (light) {
                var component = new ChildEntityComponent();

                component.name = 'light';

                component.light = light;
                component.__childEntityProperty = 'light';

                return component;
            };

            return Light;
        }
    ]);
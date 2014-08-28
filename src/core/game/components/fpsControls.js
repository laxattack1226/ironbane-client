'use strict';

angular.module('Ironbane.game.components.fpsControls', [
    'Ironbane.game.ces.Component'
])
    .factory('FPSControls', [
        'Component',
        function (Component) {
            var FPSControls = function () {
                var component = new Component();
                component.name = 'fpsControls';

                // currently this is just a marker component, should have like invertY ??

                return component;
            };

            return FPSControls;
        }
    ]);
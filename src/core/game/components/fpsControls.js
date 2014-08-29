// this is a marker component, data is not used
angular.module('Ironbane.game.components.fpsControls', [
    'Ironbane.game.ces.component'
])
    .factory('fpsControlsComponent', [
        'Component',
        function (Component) {
            'use strict';

            var FPSControls = function () {
                Component.call(this);
            };

            FPSControls.prototype = Object.create(Component.prototype);
            FPSControls.prototype.constructor = FPSControls;

            Object.defineProperty(FPSControls.prototype, 'name', {
                __proto__: null,
                enumerable: true,
                value: 'fpsControls'
            });

            return FPSControls;
        }
    ]);
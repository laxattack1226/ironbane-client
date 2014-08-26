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

            FPSControls.prototype.name = 'fpsControls';

            // freeze the name because that's important to the ECS
            Object.freeze(FPSControls.prototype);

            return FPSControls;
        }
    ]);
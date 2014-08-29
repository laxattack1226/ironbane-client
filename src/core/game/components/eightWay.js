// this is a marker component, data is not used
angular.module('Ironbane.game.components.eightWay', [
    'Ironbane.game.ces.component'
])
    .factory('eightWayComponent', [
        'Component',
        function (Component) {
            'use strict';

            var EightWay = function () {
                Component.call(this);
            };

            EightWay.prototype = Object.create(Component.prototype);
            EightWay.prototype.constructor = EightWay;

            EightWay.prototype.name = 'eightWay';

            // freeze the name because that's important to the ECS
            Object.freeze(EightWay.prototype);

            return EightWay;
        }
    ]);
'use strict';

// this is a marker component, data is not used
angular.module('Ironbane.game.components.eightWay', [
    'Ironbane.game.ces.Component'
])
    .factory('EightWay', [
        'Component',
        function (Component) {
            var EightWay = function () {
                var component = new Component();
                component.name = 'eightWay';

                return component;
            };

            return EightWay;
        }
    ]);
'use strict';

// subclass of Component used for the special case that Three Objects are already what we count as entities
angular.module('Ironbane.game.ces.ThreeComponent', [
    'Ironbane.game.ces.Component'
])
    .factory('ThreeComponent', [
        'Component',
        function (Component) {
            var ThreeComponent = function () {
                Component.call(this);
            };

            ThreeComponent.prototype = Object.create(Component.prototype);

            ThreeComponent.prototype.constructor = ThreeComponent;

            // name of the component property that must be used to add to hierarchy
            ThreeComponent.prototype.__three = '';

            return ThreeComponent;
        }
    ]);
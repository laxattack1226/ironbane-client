'use strict';

// subclass of Component used for the special case that Three Objects are already what we count as entities
angular.module('Ironbane.game.ces.ChildEntityComponent', [
    'Ironbane.game.ces.Component'
])
    .factory('ChildEntityComponent', [
        'Component',
        function (Component) {
            var ChildEntityComponent = function () {
                Component.call(this);
            };

            ChildEntityComponent.prototype = Object.create(Component.prototype);

            ChildEntityComponent.prototype.constructor = ChildEntityComponent;

            // name of the component property that must be used to add to hierarchy
            ChildEntityComponent.prototype.__childEntityProperty = '';

            return ChildEntityComponent;
        }
    ]);
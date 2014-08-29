angular.module('Ironbane.game.components.material', [
    'Ironbane.game.ces.component'
])
    .factory('materialComponent', [
        'Component',
        function (Component) {
            'use strict';

            var Material = function (matRef) {
                Component.call(this);

                // TODO: store state data for this instead, reference should be secondary
                this.material = matRef;
            };

            Material.prototype = Object.create(Component.prototype);
            Material.prototype.constructor = Material;

            Material.prototype.name = 'material';

            // freeze the name because that's important to the ECS
            Object.freeze(Material.prototype);

            return Material;
        }
    ]);
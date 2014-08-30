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

            Object.defineProperty(Material.prototype, 'name', {
                enumerable: true,
                value: 'material'
            });

            return Material;
        }
    ]);
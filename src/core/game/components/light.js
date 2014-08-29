angular.module('Ironbane.game.components.light', [
    'Ironbane.game.ces.childEntityComponent'
])
    .factory('Light', [
        'ChildEntityComponent',
        function (ChildEntityComponent) {
            'use strict';

            var Light = function (light) {
                ChildEntityComponent.call(this);

                this.light = light;
                this.__childEntityProperty = 'light';
            };

            Light.prototype = Object.create(ChildEntityComponent.prototype);
            Light.prototype.constructor = Light;

            Object.defineProperty(Light.prototype, 'name', {
                __proto__: null,
                enumerable: true,
                value: 'light'
            });

            return Light;
        }
    ]);
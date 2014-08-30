angular.module('Ironbane.game.components.mesh', [
    'Ironbane.game.ces.childEntityComponent'
])
    .factory('meshComponent', [
        'ChildEntityComponent',
        function (ChildEntityComponent) {
            'use strict';

            var Mesh = function (mesh) {
                ChildEntityComponent.call(this);

                this.mesh = mesh;
                this.__childEntityProperty = 'mesh';
            };

            Mesh.prototype = Object.create(ChildEntityComponent.prototype);
            Mesh.prototype.constructor = Mesh;

            Object.defineProperty(Mesh.prototype, 'name', {
                enumerable: true,
                value: 'mesh'
            });

            return Mesh;
        }
    ]);

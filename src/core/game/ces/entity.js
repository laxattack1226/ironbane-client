'use strict';

angular.module('Ironbane.game.ces.Entity', [
    'Ironbane.game.THREE',
    'Ironbane.game.ces.Signal',
    'Ironbane.game.ces.ChildEntityComponent'
])
    .factory('Entity', [
        'THREE',
        'Signal',
        'ChildEntityComponent',
        function (THREE, Signal, ChildEntityComponent) {

            var Entity = function (name) {
                THREE.Object3D.call(this);

                this.name = name || '';

                this._components = {};

                /**
                 * @public
                 * @readonly
                 */
                this.onComponentAdded = new Signal();

                /**
                 * @public
                 * @readonly
                 */
                this.onComponentRemoved = new Signal();
            };

            Entity.prototype = Object.create(THREE.Object3D.prototype);

            Entity.prototype.constructor = Entity;

            /**
             * Check if this entity has a component by name.
             * @public
             * @param {String} componentName
             * @return {Boolean}
             */
            Entity.prototype.hasComponent = function (componentName) {
                return this._components['$' + componentName] !== undefined;
            };

            /**
             * Get a component of this entity by name.
             * @public
             * @param {String} componentName
             * @return {Component}
             */
            Entity.prototype.getComponent = function (componentName) {
                return this._components['$' + componentName];
            };

            /**
             * Add a component to this entity.
             * @public
             * @param {Component} component
             */
            Entity.prototype.addComponent = function (component) {
                this._components['$' + component.name] = component;
                if (component instanceof ChildEntityComponent) {
                    //console.log('three component: ', component);
                    this.add(component[component.__childEntityProperty]);
                }
                this.onComponentAdded.emit(this, component.name);
            };

            /**
             * Remove a component from this entity by name.
             * @public
             * @param {String} componentName
             */
            Entity.prototype.removeComponent = function (componentName) {
                var component = this._components['$' + componentName];
                if (component instanceof ChildEntityComponent) {
                    //console.log('three component: ', component);
                    this.remove(component[component.__childEntityProperty]);
                }
                this._components['$' + componentName] = undefined;
                this.onComponentRemoved.emit(this, componentName);
            };

            return Entity;
        }
    ]);
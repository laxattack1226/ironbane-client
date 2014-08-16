'use strict';

angular.module('Ironbane.game.ces.Entity', [
    'Ironbane.game.ces.Signal'
])
    .factory('Entity', [
        'Signal',
        function (Signal) {
            var _id = 0;

            var Entity = function () {
                this.id = ++_id;

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
                this.onComponentAdded.emit(this, component.name);
            };

            /**
             * Remove a component from this entity by name.
             * @public
             * @param {String} componentName
             */
            Entity.prototype.removeComponent = function (componentName) {
                this._components['$' + componentName] = undefined;
                this.onComponentRemoved.emit(this, componentName);
            };

            Entity.prototype.get = function (component) {
                return this.getComponent(component);
            };

            Entity.prototype.has = function (component) {
                return this.hasComponent(component);
            };

            Entity.prototype.remove = function (component) {
                this.removeComponent(component);

                return this;
            };

            return Entity;
        }
    ]);
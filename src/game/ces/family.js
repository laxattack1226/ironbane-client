'use strict';

angular.module('Ironbane.game.ces.Family', [
    'Ironbane.game.ces.EntityList',
    'Ironbane.game.ces.Signal'
])
    .factory('Family', [
        'EntityList',
        'Signal',
        function (EntityList, Signal) {
            /**
             * The family is a collection of entities having all the specified components.
             * @class
             */
            var Family = function Family(componentNames) {
                /**
                 * @private
                 */
                this._componentNames = componentNames;

                /**
                 * A linked list holding the entities;
                 * @private
                 */
                this._entities = new EntityList();

                /**
                 * @public
                 * @readonly
                 */
                this.entityAdded = new Signal();

                /**
                 * @public
                 * @readonly
                 */
                this.entityRemoved = new Signal();
            };

            /**
             * Get the entities of this family.
             * @public
             * @return {Array}
             */
            Family.prototype.getEntities = function () {
                return this._entities.toArray();
            };

            /**
             * Add the entity into the family if match.
             * @public
             * @param {Entity} entity
             */
            Family.prototype.addEntityIfMatch = function (entity) {
                if (!this._entities.has(entity) && this._matchEntity(entity)) {
                    this._entities.add(entity);
                    this.entityAdded.emit(entity);
                }
            };

            /**
             * Remove the entity into the family if match.
             * @public
             * @function
             * @param {Entity} entity
             */
            Family.prototype.removeEntity = function (entity) {
                this._entities.remove(entity);
                this.entityRemoved.emit(entity);
            };

            /**
             * Handler to be called when a component is added to an entity.
             * @public
             * @param {Entity} entity
             */
            Family.prototype.onComponentAdded = function (entity) {
                this.addEntityIfMatch(entity);
            };

            /**
             * Handler to be called when a component is removed from an entity.
             * @public
             * @param {Entity} entity
             * @param {String} componentName
             */
            Family.prototype.onComponentRemoved = function (entity, componentName) {
                var names, i, len;

                // return if the entity is not in this family
                if (!this._entities.has(entity)) {
                    return;
                }

                // remove the node if the removed component is required by this family
                names = this._componentNames;
                for (i = 0, len = names.length; i < len; ++i) {
                    if (names[i] === componentName) {
                        this._entities.remove(entity);
                        this.entityRemoved.emit(entity);
                    }
                }
            };

            /**
             * Check if an entity belongs to this family.
             * @private
             * @param {Entity} entity
             * @return {Boolean}
             */
            Family.prototype._matchEntity = function (entity) {
                var componentNames, i, len;

                componentNames = this._componentNames;

                for (i = 0, len = componentNames.length; i < len; ++i) {
                    if (!entity.hasComponent(componentNames[i])) {
                        return false;
                    }
                }

                return true;
            };

            return Family;
        }
    ]);
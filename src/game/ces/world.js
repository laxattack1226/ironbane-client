'use strict';

angular.module('Ironbane.game.ces.World', [
    'Ironbane.game.THREE',
    'Ironbane.game.ces.Entity',
    'Ironbane.game.ces.EntityList',
    'Ironbane.game.ces.Family'
])
    .factory('World', [
        'THREE',
        'Entity',
        'EntityList',
        'Family',
        function (THREE, Entity, EntityList, Family) {
            /**
             * The world is the container of all the entities and systems.
             * @class
             */
            var World = function World() {
                THREE.Scene.call(this);

                /**
                 * A map from familyId to family
                 * @private
                 */
                this._families = {};

                /**
                 * @private
                 */
                this._systems = [];

                /**
                 * @private
                 */
                this._entities = new EntityList();
            };

            World.prototype = Object.create(THREE.Scene.prototype);

            World.prototype.constructor = World;

            /**
             * Add a system to this world.
             * @public
             * @param {System} system
             */
            World.prototype.addSystem = function (system) {
                system.world = this;
                this._systems.push(system);
                system.addedToWorld(this);
                return this;
            };

            /**
             * Remove a system from this world.
             * @public
             * @param {System} system
             */
            World.prototype.removeSystem = function (system) {
                var systems, i, len;

                systems = this._systems;
                for (i = 0, len = systems.length; i < len; ++i) {
                    if (systems[i] === system) {
                        systems.splice(i, 1);
                        system.removedFromWorld();
                    }
                }
            };

            /**
             * Add an entity to this world.
             * @public
             * @param {Entity} entity
             */
            World.prototype.addEntity = function (entity) {
                var families = this._families,
                    familyId,
                    self = this;

                // update the THREE object hierarchy since these entities are Object3D
                self.add(entity);

                // next we must traverse to add the CES entities
                entity.traverse(function (ent) {
                    // only add the true entities, not Object3D or other THREE objects
                    if (ent instanceof Entity) {
                        // try to add the entity into each family
                        for (familyId in families) {
                            families[familyId].addEntityIfMatch(ent);
                        }

                        // update the entity-family relationship whenever components are
                        // added to or removed from the entities
                        ent.onComponentAdded.add(function (ent, component) {
                            self._onComponentAdded(ent, component);
                        });
                        ent.onComponentRemoved.add(function (ent, component) {
                            self._onComponentRemoved(ent, component);
                        });

                        self._entities.add(ent);
                    }
                });
            };

            /**
             * Remove and entity from this world.
             * @public
             * @param {Entity} entity
             */
            World.prototype.removeEntity = function (entity) {
                var families = this._families,
                    familyId,
                    self = this;

                // update the THREE object hierarchy since these entities are Object3D
                self.remove(entity);

                entity.traverse(function (ent) {
                    // try to remove the entity from each family
                    for (familyId in families) {
                        families[familyId].removeEntity(ent);
                    }

                    self._entities.remove(ent);
                });
            };

            /**
             * Get the entities having all the specified componets.
             * @public
             * @param {...String} componentNames
             * @return {Array} an array of entities.
             */
            World.prototype.getEntities = function ( /* componentNames */ ) {
                var familyId, families, node;

                familyId = '$' + Array.prototype.join.call(arguments, ',');
                families = this._families;

                if (!families[familyId]) {
                    families[familyId] = new Family(
                        Array.prototype.slice.call(arguments)
                    );
                    for (node = this._entities.head; node; node = node.next) {
                        families[familyId].addEntityIfMatch(node.entity);
                    }
                }

                return families[familyId].getEntities();
            };

            /**
             * For each system in the world, call its `update` method.
             * @public
             * @param {Number} dt time interval between updates.
             */
            World.prototype.update = function (dt) {
                var systems, i, len;

                systems = this._systems;
                for (i = 0, len = systems.length; i < len; ++i) {
                    systems[i].update(dt);
                }
            };

            /**
             * Handler to be called when a component is added to an entity.
             * @private
             * @param {Entity} entity
             * @param {String} componentName
             */
            World.prototype._onComponentAdded = function (entity, componentName) {
                var families, familyId;

                families = this._families;
                for (familyId in families) {
                    families[familyId].onComponentAdded(entity, componentName);
                }
            };

            /**
             * Handler to be called when component is removed from an entity.
             * @private
             * @param {Entity} entity
             * @param {String} componentName
             */
            World.prototype._onComponentRemoved = function (entity, componentName) {
                var families, familyId;

                families = this._families;
                for (familyId in families) {
                    families[familyId].onComponentRemoved(entity, componentName);
                }
            };

            return World;
        }
    ]);
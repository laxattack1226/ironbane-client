'use strict';

angular.module('Ironbane.game.systems.SkySystem', [
    'Ironbane.game.ces.System',
    'Ironbane.game.entities.Skybox',
    'Ironbane.game.ces.Entity',
    'Ironbane.game.THREE',
    'Ironbane.game.components.light',
    'Ironbane.game.entities.sun'
])
    .service('SkySystem', [
        'System',
        'Entity',
        'Skybox',
        '$log',
        'THREE',
        'Light',
        'Sun',
        function (System, Entity, Skybox, $log, THREE, Light, Sun) {
            var SkySystem = function () {
                this.root = new Entity('SkySystem');
                this.skybox = new Skybox();

                this.ambientLight = new Light(new THREE.AmbientLight(0x333333));
                this.root.addComponent(this.ambientLight);

                this.sun = new Sun();
                this.sunLight = new Light(new THREE.DirectionalLight(0xaaaaaa));
                this.root.addComponent(this.sunLight);

                this.moonLight = new Light(new THREE.DirectionalLight(0xcccccc));
                this.root.addComponent(this.moonLight);

                // having to manually add this to scene hierarchy
                // todo: something better
                // maybe these are components instead
                this.root.add(this.skybox);
                this.root.add(this.sun);
            };

            SkySystem.prototype = Object.create(System.prototype);

            SkySystem.prototype.constructor = SkySystem;

            SkySystem.prototype.addedToWorld = function (world) {
                System.prototype.addedToWorld.call(this, world);

                // add the entities to teh world
                this.world.addEntity(this.root);
            };

            SkySystem.prototype.update = function () {

            };

            return SkySystem;
        }
    ]);
'use strict';

angular.module('Ironbane.game.systems.SkySystem', [
    'Ironbane.game.ces.System',
    'Ironbane.game.entities.Skybox',
    'Ironbane.game.ces.entity',
    'Ironbane.game.THREE',
    'Ironbane.game.components.light',
    'Ironbane.game.entities.sun'
])
    .constant('GAME_DAY_LENGTH', 60 * 15)
    .service('SkySystem', [
        'System',
        'Entity',
        'Skybox',
        '$log',
        'THREE',
        'Light',
        'Sun',
        'GAME_DAY_LENGTH',
        function (System, Entity, Skybox, $log, THREE, Light, Sun, GAME_DAY_LENGTH) {
            var sunDistance = 1950;

            var SkySystem = function () {
                this.root = new Entity('SkySystem');
                this.skybox = new Skybox();

                this.sunVector = new THREE.Vector3(0, 1, 0);

                this.ambientLight = new Light(new THREE.AmbientLight(0x333333));
                this.root.addComponent(this.ambientLight);

                this.sun = new Sun();
                this.sunLight = new Light(new THREE.DirectionalLight(0xaaaaaa));
                this.root.addComponent(this.sunLight);

                var moonLight = new THREE.DirectionalLight(0xcccccc);
                moonLight.position.y = 450;
                moonLight.target.position.y = -450;
                this.moonLight = new Light(moonLight);
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

            SkySystem.prototype.adjustLighting = function (lightFactor) {
                var lightness = {
                        r: lightFactor,
                        g: lightFactor,
                        b: lightFactor
                    },
                    mod = 0,
                    moonFactor = lightFactor,
                    moonFactorReverse;

                if (lightness.r > -0.3 && lightness.r < 0.3) {
                    mod = lightness.r / 0.3;
                    if (mod > 0) {
                        lightness.r += 1.0 - mod;
                    } else {
                        lightness.r += 1.0 + mod;
                    }
                }

                lightness.r = THREE.Math.clamp(lightness.r, 0, 1);
                lightness.g = THREE.Math.clamp(lightness.g, 0, 1);
                lightness.b = THREE.Math.clamp(lightness.b, 0, 1);

                this.sunLight.light.color.setRGB(lightness.r * 0.6, lightness.g * 0.6, lightness.b * 0.6);

                if (moonFactor > 0) {
                    moonFactor = 0;
                }
                moonFactor *= -1;
                moonFactorReverse = 1 - moonFactor;

                this.ambientLight.light.color.setRGB(0.4 * moonFactorReverse + 0.2 * moonFactor, 0.4 * moonFactorReverse + 0.2 * moonFactor, 0.4 * moonFactorReverse + 0.2 * moonFactor);

                // Night
                this.moonLight.light.color.setRGB(0.2 * moonFactor, 0.2 * moonFactor, 0.9 * moonFactor);
            };

            SkySystem.prototype.update = function () {
                // TODO: make this a service? convert to human readable game time?
                // like I wanna know when it's 1:32pm in-game
                var timeOfDayOffset = (((Date.now() / 1000) * 3.6 * 100) / GAME_DAY_LENGTH) % 360;

                var skyboxMesh = this.skybox.getComponent('mesh').mesh,
                    sunMesh = this.sun.getComponent('mesh').mesh;

                var rotationMatrix = new THREE.Matrix4();
                rotationMatrix.makeRotationFromEuler(new THREE.Euler(THREE.Math.degToRad(timeOfDayOffset), THREE.Math.degToRad(-30), 0));

                this.sunVector.set(0, 0, 1);
                this.sunVector = this.sunVector.applyMatrix4(rotationMatrix);

                skyboxMesh.material.uniforms.vSun.value.copy(this.sunVector);

                sunMesh.position.copy(this.sunVector.clone().multiplyScalar(sunDistance));
                sunMesh.lookAt(this.root.position);

                this.adjustLighting(sunMesh.position.y / sunDistance);
            };

            return SkySystem;
        }
    ]);
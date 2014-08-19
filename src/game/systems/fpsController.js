'use strict';

// just a silly test system
angular.module('Ironbane.game.systems.FPSController', [
    'Ironbane.game.ces.System',
    'Ironbane.game.input.InputMgr'
])
    .service('FPSController', [
        'System',
        'InputMgr',
        function (System, inputMgr) {
            var defaultConfig = {
                moveForward: 'w',
                moveBackward: 's',
                moveLeft: 'a',
                moveRight: 'd',
                moveUp: 'r',
                moveDown: 'f'
            };

            var Controller = function (config) {
                var controller = this;

                System.call(controller);

                // store the key bindings here TODO: more robust
                controller.config = config || defaultConfig;

                // bind keys
                inputMgr.keyboard.register_many([{
                    'keys': controller.config.moveForward,
                    'on_keydown': controller.onMoveForwardDown,
                    'on_keyup': controller.onMoveForwardUp,
                    'this': controller
                }, {
                    'keys': controller.config.moveBackward,
                    'on_keydown': controller.onMoveBackwardDown,
                    'on_keyup': controller.onMoveBackwardUp,
                    'this': controller
                }, {
                    'keys': controller.config.moveLeft,
                    'on_keydown': controller.onMoveLeftDown,
                    'on_keyup': controller.onMoveLeftUp,
                    'this': controller
                }, {
                    'keys': controller.config.moveRight,
                    'on_keydown': controller.onMoveRightDown,
                    'on_keyup': controller.onMoveRightUp,
                    'this': controller
                }, {
                    'keys': controller.config.moveUp,
                    'on_keydown': controller.onMoveUpDown,
                    'on_keyup': controller.onMoveUpUp,
                    'this': controller
                }, {
                    'keys': controller.config.moveDown,
                    'on_keydown': controller.onMoveDownDown,
                    'on_keyup': controller.onMoveDownUp,
                    'this': controller
                }]);
            };

            Controller.prototype = Object.create(System.prototype);

            Controller.prototype.constructor = Controller;

            Controller.prototype.update = function (dt) {
                var controller = this,
                    entities = controller.world.getEntities('fpsControls', 'speed');

                entities.forEach(function (entity) {
                    var actualMoveSpeed = dt * entity.getComponent('speed').value;

                    if (controller.moveForward) {
                        entity.translateZ(-actualMoveSpeed);
                    }
                    if (controller.moveBackward) {
                        entity.translateZ(actualMoveSpeed);
                    }

                    if (controller.moveLeft) {
                        entity.translateX(-actualMoveSpeed);
                    }
                    if (controller.moveRight) {
                        entity.translateX(actualMoveSpeed);
                    }

                    if (controller.moveDown) {
                        entity.translateY(-actualMoveSpeed);
                    }
                    if (controller.moveUp) {
                        entity.translateY(actualMoveSpeed);
                    }
                });
            };

            Controller.prototype.onMoveForwardDown = function () {
                this.moveForward = true;
            };

            Controller.prototype.onMoveForwardUp = function () {
                this.moveForward = false;
            };

            Controller.prototype.onMoveBackwardDown = function () {
                this.moveBackward = true;
            };

            Controller.prototype.onMoveBackwardUp = function () {
                this.moveBackward = false;
            };

            Controller.prototype.onMoveLeftDown = function () {
                this.moveLeft = true;
            };

            Controller.prototype.onMoveLeftUp = function () {
                this.moveLeft = false;
            };

            Controller.prototype.onMoveRightDown = function () {
                this.moveRight = true;
            };

            Controller.prototype.onMoveRightUp = function () {
                this.moveRight = false;
            };

            Controller.prototype.onMoveDownDown = function () {
                this.moveDown = true;
            };

            Controller.prototype.onMoveDownUp = function () {
                this.moveDown = false;
            };

            Controller.prototype.onMoveUpDown = function () {
                this.moveUp = true;
            };

            Controller.prototype.onMoveUpUp = function () {
                this.moveUp = false;
            };

            return Controller;
        }
    ]);
// controls for first person
angular.module('Ironbane.game.systems.fps-controller', [
    'Ironbane.game.ces.System',
    'Ironbane.game.input.InputMgr'
])
    .service('FPSControllerSystem', [
        'System',
        'InputMgr',
        function (System, inputMgr) {
            'use strict';

            var defaultConfig = {
                moveForward: 'w',
                moveBackward: 's',
                moveLeft: 'q',
                moveRight: 'e',
                moveUp: 'r',
                moveDown: 'f',
                turnLeft: 'a',
                turnRight: 'd'
            };

            var Controller = function (config) {
                var controller = this;

                System.call(controller);

                // store the key bindings here TODO: more robust
                controller.config = config || defaultConfig;

                // bind keys
                inputMgr.keyboard.register_many([{ // jshint ignore:line
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
                }, {
                    'keys': controller.config.turnLeft,
                    'on_keydown': controller.onTurnLeftDown,
                    'on_keyup': controller.onTurnLeftUp,
                    'this': controller
                }, {
                    'keys': controller.config.turnRight,
                    'on_keydown': controller.onTurnRightDown,
                    'on_keyup': controller.onTurnRightUp,
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

                    if (controller.turnLeft) {
                        entity.rotateY(actualMoveSpeed * 0.01);
                    }
                    if (controller.turnRight) {
                        entity.rotateY(-actualMoveSpeed * 0.01);
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

            Controller.prototype.onTurnLeftDown = function () {
                this.turnLeft = true;
            };

            Controller.prototype.onTurnLeftUp = function () {
                this.turnLeft = false;
            };

            Controller.prototype.onTurnRightDown = function () {
                this.turnRight = true;
            };

            Controller.prototype.onTurnRightUp = function () {
                this.turnRight = false;
            };

            return Controller;
        }
    ]);
'use strict';
/* global keypress, Hammer */
/* jshint camelcase:false */

angular.module('Ironbane.game.input.InputMgr', [

])
    .run(['$window', function ($window) {
        // shims
        var mouseEventPrototype = $window.MouseEvent.prototype;

        if (!('movementX' in mouseEventPrototype)) {
            Object.defineProperty(mouseEventPrototype, 'movementX', {
                enumerable: true,
                configurable: false,
                writeable: false,
                get: function () {
                    return this.webkitMovementX || this.mozMovementX || 0;
                }
            });
        }

        if (!('movementY' in mouseEventPrototype)) {
            Object.defineProperty(mouseEventPrototype, 'movementY', {
                enumerable: true,
                configurable: false,
                writeable: false,
                get: function () {
                    return this.webkitMovementY || this.mozMovementY || 0;
                }
            });
        }
    }])
    .factory('InputMgr', [
        '$log',
        '$window',
        function ($log, $window) {
            var InputMgr = function () {
                var self = this;

                self.keyboard = new keypress.Listener();

                self.keyboard.simple_combo('shift s', function () {
                    $log.log('combo!');
                });

                self.touch = new Hammer.Manager($window.document.body);
                self.touch.add(new Hammer.Tap({
                    event: 'doubletap',
                    taps: 2
                }));
                self.touch.add(new Hammer.Tap());

                self.touch.on('tap', function (ev) {
                    $log.log('hammer please: ', ev.target, self.mouse);
                });

                // TODO: unbind this event at some point
                $window.document.addEventListener('mousemove', function (ev) {
                    //$log.log('mousemove', ev);
                    self.mouse = {
                        x: ev.pageX,
                        y: ev.pageY,
                        deltaX: ev.movementX,
                        deltaY: ev.movementY
                    };
                });
            };

            return InputMgr;
        }
    ]);
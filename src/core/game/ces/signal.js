'use strict';

angular.module('Ironbane.game.ces.Signal', [])
    .factory('Signal', [

        function () {
            var Signal = function () {
                this._listeners = [];
            };

            Signal.prototype.add = function (listener) {
                this._listeners.push(listener);
            };

            Signal.prototype.remove = function (listener) {
                var listeners = this._listeners,
                    i, len;

                for (i = 0, len = listeners.length; i < len; ++i) {
                    if (listeners[i] === listener) {
                        listeners.splice(i, 1);
                        return true;
                    }
                }
                return false;
            };

            Signal.prototype.emit = function ( /* messages */ ) {
                var messages = arguments,
                    listeners = this._listeners,
                    i, len;

                for (i = 0, len = listeners.length; i < len; ++i) {
                    listeners[i].apply(null, messages);
                }
            };

            return Signal;
        }
    ]);
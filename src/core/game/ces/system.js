'use strict';

angular.module('Ironbane.game.ces.System', [])
    .factory('System', [

        function () {
            var System = function (world) {
                this.world = world || null;
            };

            System.prototype.update = function () {
                throw new Error('instance should override this method');
            };

            System.prototype.addedToWorld = function (world) {
                this.world = world;
            };

            System.prototype.removedFromWorld = function () {
                this.world = null;
            };

            return System;
        }
    ]);
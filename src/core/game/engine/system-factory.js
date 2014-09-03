// load systems through the factory instead of needing to use Angular's DI (too many systems)
angular.module('Ironbane.game.engine.system-factory', [
    // *all* available systems must be registered here!
    'Ironbane.game.systems.chat-bubbler',
    'Ironbane.game.systems.spinner',
    'Ironbane.game.systems.fps-controller',
    'Ironbane.game.systems.position-linker',
    'Ironbane.game.systems.sky-system',
    'Ironbane.game.systems.sprite-animator',
    'Ironbane.game.systems.sprite-view'
])
    .service('SystemFactory', [
        '$injector',
        '$log',
        function ($injector, $log) {
            'use strict';
            // injection based on naming convention "blahSystem"

            function invoke(constructor, args) {
                var f;

                function F() {
                    // constructor returns **this**
                    return constructor.apply(this, args);
                }
                F.prototype = constructor.prototype;
                f = new F();
                f.constructor = constructor;
                return f;
            }

            this.getSystem = function (system) {
                var diName = system + 'System',
                    System;

                if ($injector.has(diName)) {
                    System = $injector.get(diName);
                    //$log.log('found ut: ', System);
                    return System;
                } else {
                    //$log.log('no can haz: ', system);
                    return null;
                }
            };

            this.create = function (system, args) {
                var Sys = this.getSystem(system);

                if (Sys) {
                    //$log.debug('try to add: ', system, ' ', Sys);
                    return invoke(Sys, args);
                }

                return null; // TODO: throw exception instead
            };
        }
    ]);

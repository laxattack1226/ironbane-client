// load components through configuration instead of code
angular.module('Ironbane.game.engine.component-factory', [
    // *all* available components must be registered here!
    'Ironbane.game.components.position',
    'Ironbane.game.components.angularVelocity',
    'Ironbane.game.components.eightWay',
    'Ironbane.game.components.fpsControls',
    'Ironbane.game.components.health',
    'Ironbane.game.components.linkedPosition',
    'Ironbane.game.components.speed',
    'Ironbane.game.components.spriteAnimation',
    'Ironbane.game.components.mesh',
    'Ironbane.game.components.sprite',
    'Ironbane.game.components.camera',
    'Ironbane.game.components.material',
    'Ironbane.game.components.light'
])
    .service('ComponentFactory', [
        '$injector',
        '$log',
        function ($injector, $log) {
            'use strict';
            // injection based on naming convention "blahComponent"

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

            this.getComponent = function (component) {
                var diName = component + 'Component',
                    Component;

                if ($injector.has(diName)) {
                    Component = $injector.get(diName);
                    //$log.log('found ut: ', Component);
                    return Component;
                } else {
                    //$log.log('no can haz: ', component);
                    return null;
                }
            };

            this.create = function (component, args) {
                var C = this.getComponent(component);

                if (C) {
                    //$log.debug('try to add: ', component, ' ', C);
                    return invoke(C, args);
                }

                return null; // TODO: throw exception instead
            };
        }
    ]);

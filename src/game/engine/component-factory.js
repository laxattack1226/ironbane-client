// load components through configuration instead of code
angular.module('Ironbane.game.engine.component-factory', [
    // *all* available components must be registered here!
    // TODO: dynamically add during build process
    'Ironbane.game.components.position',
    'Ironbane.game.components.angularVelocity',
    'Ironbane.game.components.eightWay',
    'Ironbane.game.components.fpsControls',
    'Ironbane.game.components.health',
    'Ironbane.game.components.linkedPosition',
    'Ironbane.game.components.speed',
    'Ironbane.game.components.spriteAnimation'
])
    .service('ComponentFactory', [
        '$injector',
        '$log',
        function ($injector, $log) {
            'use strict';

            this.getComponent = function (component) {
                var diName = component + 'Component',
                    Component;

                if ($injector.has(diName)) {
                    Component = $injector.get(diName);
                    // instantiate?
                    return Component;
                } else {
                    $log.log('no can haz!');
                    // TODO: throw exception instead?
                    return null;
                }
            };

            this.create = function (component, args) {
                var C = this.getComponent(component);

                return $injector.instantiate(C, args);
            };
        }
    ]);
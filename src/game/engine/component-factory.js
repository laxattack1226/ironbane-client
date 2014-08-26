// load components through configuration instead of code
angular.module('Ironbane.game.engine.component-factory', [
    // *all* available components must be registered here!
    'Irobane.game.components.position'
])
    .service('ComponentFactory', [
        '$injector',
        '$log',
        function($injector, $log) {
            // component registry?
            // injection based on naming convention? i.e. positionComponent
            // separate "cache" or dynamically add to module

            this.getComponent = function(component) {
                var diName = component + 'Component',
                    Component;

                if($injector.has(diName)) {
                    $log.log('has it!');
                    Component = $injector.get(diName);
                    // instantiate?
                    return Component;
                } else {
                    $log.log('no can haz!');
                    return null;
                }
            };
        }
    ]);
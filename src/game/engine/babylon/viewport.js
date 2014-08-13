angular.module('Ironbane.game.engine.Babylon.viewport', [
    'Ironbane.game.engine.Babylon.Game'
])
    .directive('viewport', [
        '$window',
        'Game',
        function($window, Game) {
            return {
                restrict: 'EA',
                template: '<canvas></canvas>',
                link: function(scope, el, attrs) {
                    var ironbane = new Game(el.find('canvas')[0]);

                    // Watch for browser/canvas resize events
                    $window.addEventListener("resize", function() {
                        ironbane.engine.resize();
                    });

                    ironbane.start();

                    scope.$on('$destroy', function() {
                        $window.removeListener('resize');
                    });
                }
            };
        }
    ]);
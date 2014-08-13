angular.module('Ironbane.game.engine.THREE.viewport', [
    'Ironbane.game.engine.THREE.Game'
])
    .directive('viewport', [
        '$window',
        'Game',
        function($window, Game) {
            return {
                restrict: 'EA',
                link: function(scope, el, attrs) {
                    var ironbane = new Game();

                    $window.addEventListener('resize', ironbane.onWindowResize, false);

                    el.append(ironbane.renderer.domElement);

                    ironbane.start();

                    scope.$on('$destroy', function() {
                        $window.removeListener('resize');
                    });
                }
            };
        }
    ]);
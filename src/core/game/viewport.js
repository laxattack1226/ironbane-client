'use strict';

angular.module('Ironbane.game.viewport', [
    'Ironbane.game.engine'
])
    .directive('viewport', [
        '$window',
        'Game',
        function ($window, Game) {
            return {
                restrict: 'EA',
                link: function (scope, el) {
                    var ironbane = new Game();

                    $window.addEventListener('resize', ironbane.onWindowResize, false);

                    el.append(ironbane.renderer.domElement);

                    ironbane.start();

                    scope.$on('$destroy', function () {
                        $window.removeListener('resize');
                    });
                }
            };
        }
    ]);
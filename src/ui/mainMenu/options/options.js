'use strict';

angular.module('Ironbane.ui.mainMenu.options', [
    'ui.router',
    'templates'
])
    .config([
        '$stateProvider',
        function ($stateProvider) {
            $stateProvider.state('mainMenu.options', {
                templateUrl: '/templates/ui/mainMenu/options/options.tpl.html',
                controller: ['$scope', '$state', '$log',
                    function ($scope, $state, $log) {
                        $scope.fullscreen = function() {
                            // fullscreen api call
                        };

                        $scope.back = function() {
                            $state.go('^.top');
                        };
                    }
                ]
            });
        }
    ]);
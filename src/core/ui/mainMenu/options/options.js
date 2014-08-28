'use strict';

angular.module('Ironbane.ui.mainMenu.options', [
    'ui.router',
    'angus.templates.app'
])
    .config([
        '$stateProvider',
        function ($stateProvider) {
            $stateProvider.state('mainMenu.options', {
                templateUrl: 'ui/mainMenu/options/options.tpl.html',
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
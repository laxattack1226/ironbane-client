'use strict';

angular.module('Ironbane.ui.mainMenu.top', [
    'ui.router',
    'templates'
])
    .config([
        '$stateProvider',
        function ($stateProvider) {
            $stateProvider.state('mainMenu.top', {
                templateUrl: 'ui/mainMenu/top/top.tpl.html',
                controller: ['$scope', '$state',
                    function ($scope, $state) {
                        $scope.guest = function() {
                            // TODO: send some guest user account
                            $state.go('play');
                        };

                        $scope.login = function() {
                            $state.go('^.login');
                        };

                        $scope.register = function() {
                            $state.go('^.register');
                        };

                        $scope.options = function() {
                            $state.go('^.options');
                        };
                    }
                ]
            });
        }
    ]);
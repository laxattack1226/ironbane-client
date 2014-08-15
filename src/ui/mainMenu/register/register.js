'use strict';

angular.module('Ironbane.ui.mainMenu.register', [
    'ui.router',
    'templates'
])
    .config([
        '$stateProvider',
        function ($stateProvider) {
            $stateProvider.state('mainMenu.register', {
                templateUrl: '/templates/ui/mainMenu/register/register.tpl.html',
                controller: ['$scope', '$state', '$log',
                    function ($scope, $state, $log) {
                        $scope.submit = function() {
                            $log.log('user: ', $scope.user);
                            // TODO: login somewhere
                        };

                        $scope.cancel = function() {
                            $state.go('^.top');
                        };
                    }
                ]
            });
        }
    ]);
'use strict';

angular.module('Ironbane.ui.mainMenu.login', [
    'ui.router',
    'angus.templates.app'
])
    .config([
        '$stateProvider',
        function ($stateProvider) {
            $stateProvider.state('mainMenu.login', {
                templateUrl: 'ui/mainMenu/login/login.tpl.html',
                controller: ['$scope', '$state', '$log',
                    function ($scope, $state, $log) {
                        $scope.submit = function() {
                            $log.log('creds: ', $scope.creds);
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
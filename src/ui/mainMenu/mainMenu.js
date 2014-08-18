'use strict';

angular.module('Ironbane.ui.mainMenu', [
    'ui.router',
    'templates',
    // sub states
    'Ironbane.ui.mainMenu.top',
    'Ironbane.ui.mainMenu.login',
    'Ironbane.ui.mainMenu.options',
    'Ironbane.ui.mainMenu.register'
])
    .config([
        '$stateProvider',
        function ($stateProvider) {
            $stateProvider.state('mainMenu', {
                url: '',
                templateUrl: 'ui/mainMenu/mainMenu.tpl.html',
                controller: ['$scope',
                    function ($scope) {
                        $scope.title = 'Ironbane 2 - The Revival';
                    }
                ]
            });
        }
    ]);
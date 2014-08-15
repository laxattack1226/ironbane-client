'use strict';

angular.module('Ironbane.ui.mainMenu', [
    'ui.router',
    'templates',
    // sub states
    'Ironbane.ui.mainMenu.top'
])
    .config([
        '$stateProvider',
        function ($stateProvider) {
            $stateProvider.state('mainMenu', {
                url: '',
                templateUrl: '/templates/ui/mainMenu/mainMenu.tpl.html',
                controller: ['$scope',
                    function ($scope) {
                        $scope.title = 'Ironbane 2 - The Revival';
                    }
                ]
            });
        }
    ]);
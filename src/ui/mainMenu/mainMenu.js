angular.module('Ironbane.ui.mainMenu', [
    'ui.router',
    'templates'
])
    .config([
        '$stateProvider',
        function($stateProvider) {
            $stateProvider.state('mainMenu', {
                url: '',
                templateUrl: '/templates/ui/mainMenu/mainMenu.html',
                controller: ['$scope',
                    function($scope) {
                        $scope.title = 'Ironbane 2 - The Revival';
                    }
                ]
            });
        }
    ]);
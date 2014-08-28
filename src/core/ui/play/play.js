'use strict';

angular.module('Ironbane.ui.play', [
    'ui.router',
    'angus.templates.app'
])
    .config([
        '$stateProvider',
        function ($stateProvider) {
            $stateProvider.state('play', {
                url: '/play',
                templateUrl: 'ui/play/play.tpl.html',
                controller: ['$scope',
                    function ($scope) {
                        // TODO: show hearts and stuff
                    }
                ]
            });
        }
    ]);
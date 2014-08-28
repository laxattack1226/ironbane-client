'use strict';

angular.module('Ironbane', [
    'ui.router',
    'Ironbane.ui.mainMenu',
    'Ironbane.ui.play',
    'Ironbane.game.viewport'
])
    .run(['$state',
        function ($state) {
            // starting state
            // TODO: check login cookie etc.
            $state.go('mainMenu.top');
        }
    ]);
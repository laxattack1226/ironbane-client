angular.module('Ironbane.game.input.InputMgr', [

])
    .factory('InputMgr', [
        '$log',
        function($log) {
            var InputMgr = function() {
                this.keyboard = new keypress.Listener();

                this.keyboard.simple_combo('shift s', function() {
                    $log.log('combo!');
                });
            };

            return InputMgr;
        }
    ]);
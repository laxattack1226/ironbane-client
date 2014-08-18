'use strict';

angular.module('Ironbane.game.engine', [
    'Ironbane.game.THREE',
    'Ironbane.game.input.InputMgr',
    'Ironbane.game.ces.World',
    'Ironbane.game.ces.Entity',
    'Ironbane.game.systems.Spinner',
    'Ironbane.game.entities.Crate',
    'Ironbane.game.components.camera'
])
    .factory('Game', [
        'THREE',
        '$window',
        'InputMgr',
        'World',
        'Spinner',
        'Crate',
        'Camera',
        'Entity',
        function (THREE, $window, InputMgr, World, Spinner, Crate, Camera, Entity) {
            var Game = function () {
                var game = this;
                // temp hack for quick debug
                $window.game = game;

                // entity system world
                game.world = new World();
                game.world.addSystem(Spinner);

                game.input = new InputMgr();

                var viewWidth = $window.innerWidth;
                var viewHeight = $window.innerHeight - 5;
                game.renderer = new THREE.WebGLRenderer();
                game.renderer.setSize(viewWidth, viewHeight);

                game.camera = new Entity();
                game.camera.name = 'MainCamera';
                game.camera.addComponent(new Camera(new THREE.PerspectiveCamera(70, viewWidth / viewHeight, 1, 1000)));
                game.camera.position.z = 400;

                game.world.addEntity(game.camera);

                // add 2 crates for now (test data)
                game.world.addEntity(new Crate(-250, 0, 0));
                game.world.addEntity(new Crate(250, 0, 0));

                game.start = function () {
                    $window.requestAnimationFrame(game.start);

                    // TODO: get time delta
                    game.world.update();

                    // should this be moved into a system??
                    game.renderer.render(game.world, game.camera.getComponent('camera').camera);
                };

                game.onWindowResize = function () {
                    var viewWidth = $window.innerWidth;
                    var viewHeight = $window.innerHeight - 5;
                    var cam = game.camera.getComponent('camera').camera;
                    // should this be moved into a system??
                    cam.aspect = viewWidth / viewHeight;
                    cam.updateProjectionMatrix();

                    game.renderer.setSize(viewWidth, viewHeight);
                };
            };

            return Game;
        }
    ]);
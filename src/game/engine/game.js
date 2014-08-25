'use strict';

angular.module('Ironbane.game.engine', [
    'Ironbane.game.THREE',
    'Ironbane.game.input.InputMgr',
    'Ironbane.game.ces.World',
    'Ironbane.game.ces.Entity',
    'Ironbane.game.systems.Spinner',
    'Ironbane.game.entities.Crate',
    'Ironbane.game.components.camera',
    'Ironbane.game.components.fpsControls',
    'Ironbane.game.components.speed',
    'Ironbane.game.systems.FPSController',
    'Ironbane.game.entities.GrassPlane',
    'Ironbane.game.systems.SkySystem',
    'Ironbane.game.components.linkedPosition',
    'Ironbane.game.systems.PositionLinker',
    'Ironbane.game.entities.character',
    'Ironbane.game.systems.SpriteView',
    'Ironbane.game.systems.ChatBubbler',
    'Ironbane.game.systems.SpriteAnimator'
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
        'FPSControls',
        'Speed',
        'FPSController',
        'GrassPlane',
        'SkySystem',
        'LinkedPosition',
        'PositionLinker',
        'Character',
        'SpriteView',
        'ChatBubbler',
        'SpriteAnimator',
        function (THREE, $window, inputMgr, World, Spinner, Crate, Camera, Entity, FPSControls, Speed, FPSController, GrassPlane, SkySystem, LinkedPosition, PositionLinker, Character, SpriteView, ChatBubbler, SpriteAnimator) {
            var Game = function () {
                var game = this;
                // temp hack for quick debug
                $window.game = game;

                // entity system world
                game.world = new World();
                game.world.addSystem(Spinner);
                game.world.addSystem(new FPSController());
                game.world.addSystem(PositionLinker);
                game.world.addSystem(new SpriteAnimator());

                game.sky = new SkySystem();
                game.world.addSystem(game.sky);

                // debug reference, prolly remove this
                game.input = inputMgr;

                game.clock = new THREE.Clock();

                var viewWidth = $window.innerWidth;
                var viewHeight = $window.innerHeight - 5;
                game.renderer = new THREE.WebGLRenderer();
                game.renderer.setSize(viewWidth, viewHeight);

                // TODO: move this camera stuff to a separate entity generator
                game.camera = new Entity('MainCamera');
                game.camera.addComponent(new Camera(new THREE.PerspectiveCamera(70, viewWidth / viewHeight, 0.1, 4000)));
                game.camera.position.z = 40;
                game.camera.position.y = 18;
                game.camera.addComponent(new FPSControls());
                game.camera.addComponent(new Speed(220));

                game.world.addEntity(game.camera);

                game.world.addSystem(new SpriteView(game.camera));

                // add 2 crates for now (test data)
                game.world.addEntity(new Crate(-25, 20, 0));
                game.world.addEntity(new Crate(25, 20, 0));

                game.world.addEntity(new GrassPlane());

                // link the entire sky system to the camera
                game.sky.root.addComponent(new LinkedPosition(game.camera, true, false, true));

                var guy = new Character(0, 16, 0);
                game.world.addEntity(guy);

                // hack! for now just a test, later actually base these on some event
                var bubbler = new ChatBubbler();
                bubbler.create(guy, 'Welcome to Ironbane 2: The Revival :)');


                game.start = function () {
                    $window.requestAnimationFrame(game.start);

                    var delta = game.clock.getDelta();

                    game.world.update(delta);

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
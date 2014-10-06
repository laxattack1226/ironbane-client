'use strict';

angular.module('Ironbane.game.engine', [
    'Ironbane.game.THREE',
    'Ironbane.game.input.InputMgr',
    'Ironbane.game.ces.World',
    'Ironbane.game.ces.entity',
    'Ironbane.game.entities.Crate',
    'Ironbane.game.entities.GrassPlane',
    'Ironbane.game.entities.character',
    'Ironbane.game.engine.component-factory',
    'Ironbane.game.engine.system-factory'
])
    .factory('Game', [
        'THREE',
        '$window',
        'InputMgr',
        'World',
        'Crate',
        'Entity',
        'GrassPlane',
        'Character',
        'ComponentFactory',
        'SystemFactory',
        function (THREE, $window, inputMgr, World, Crate, Entity, GrassPlane, Character, ComponentFactory, SystemFactory) {
            var Game = function () {
                var game = this;
                // temp hack for quick debug
                $window.game = game;

                // entity system world
                game.world = new World();
                game.world.addSystem(SystemFactory.create('Spinner'));
                game.world.addSystem(SystemFactory.create('FPSController'));
                game.world.addSystem(SystemFactory.create('PositionLinker'));
                game.world.addSystem(SystemFactory.create('SpriteAnimator'));

                game.sky = SystemFactory.create('Sky');
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
                game.camera.addComponent(ComponentFactory.create('camera', [new THREE.PerspectiveCamera(70, viewWidth / viewHeight, 0.1, 4000)]));
                game.camera.position.z = 40;
                game.camera.position.y = 18;
                game.camera.addComponent(ComponentFactory.create('fpsControls'));
                game.camera.addComponent(ComponentFactory.create('speed', [100]));

                game.world.addEntity(game.camera);
                game.world.addSystem(SystemFactory.create('SpriteView', [game.camera]));

                // add crates for now (test data)
                game.world.addEntity(new Crate(0, 2.5, -10));
                game.world.addEntity(new Crate(5, 2.5, -10));
                game.world.addEntity(new Crate(-5, 2.5, -10));
                game.world.addEntity(new Crate(-10, 2.5, -10));
                game.world.addEntity(new Crate(10, 2.5, -10));
                game.world.addEntity(new Crate(10, 2.5, -5));
                game.world.addEntity(new Crate(-10, 2.5, -5));
                game.world.addEntity(new Crate(10, 2.5, 0));
                game.world.addEntity(new Crate(-10, 2.5, 0));
                game.world.addEntity(new Crate(0, 7.5, -10));
                game.world.addEntity(new Crate(5, 7.5, -10));
                game.world.addEntity(new Crate(-5, 7.5, -10));
                game.world.addEntity(new Crate(-10, 7.5, -10));
                game.world.addEntity(new Crate(10, 7.5, -10));
                game.world.addEntity(new Crate(10, 7.5, -5));
                game.world.addEntity(new Crate(-10, 7.5, -5));
                game.world.addEntity(new Crate(10, 7.5, 0));
                game.world.addEntity(new Crate(-10, 7.5, 0));
                game.world.addEntity(new Crate(0, -2.4, 0));
                game.world.addEntity(new Crate(0, -2.4, -5));
                game.world.addEntity(new Crate(5, -2.4, 0));
                game.world.addEntity(new Crate(-5, -2.4, 0));
                game.world.addEntity(new Crate(5, -2.4, -5));
                game.world.addEntity(new Crate(-5, -2.4, -5));

                game.world.addEntity(new GrassPlane());

                // link the entire sky system to the camera
                game.sky.root.addComponent(ComponentFactory.create('linkedPosition', [game.camera, true, false, true]));

                var guy = new Character(0, 1, 0);
                game.world.addEntity(guy);

                // hack! for now just a test, later actually base these on some event
                var bubbler = SystemFactory.create('ChatBubbler');
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
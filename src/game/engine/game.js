'use strict';

angular.module('Ironbane.game.engine', [
    'Ironbane.game.THREE',
    'Ironbane.game.input.InputMgr',
    'Ironbane.game.ces.World',
    'Ironbane.game.systems.Spinner',
    'Ironbane.game.systems.SceneSync',
    'Ironbane.game.entities.Crate'
])
    .factory('Game', [
        'THREE',
        '$window',
        'InputMgr',
        'World',
        'Spinner',
        'SceneSync',
        'Crate',
        function (THREE, $window, InputMgr, World, Spinner, SceneSync, Crate) {
            var Game = function () {
                var game = this;
                // temp hack for quick debug
                $window.game = game;

                // entity system world
                game.world = new World();
                game.world.addSystem(Spinner);
                game.world.addSystem(SceneSync);

                game.input = new InputMgr();

                var viewWidth = $window.innerWidth;
                var viewHeight = $window.innerHeight - 5;
                game.renderer = new THREE.WebGLRenderer();
                game.renderer.setSize(viewWidth, viewHeight);

                game.camera = new THREE.PerspectiveCamera(70, viewWidth / viewHeight, 1, 1000);
                game.camera.position.z = 400;

                game.scene = new THREE.Scene();

                var geometry = new THREE.BoxGeometry(200, 200, 200);

                var texture = THREE.ImageUtils.loadTexture('assets/textures/crate.gif');
                texture.anisotropy = game.renderer.getMaxAnisotropy();

                var material = new THREE.MeshBasicMaterial({
                    map: texture
                });

                var mesh = new THREE.Mesh(geometry, material);
                game.scene.add(mesh);
                game.world.addEntity(new Crate(mesh, {
                    x: -250,
                    y: 0,
                    z: 0
                }));
                var mesh2 = new THREE.Mesh(geometry, material);
                game.scene.add(mesh2);
                game.world.addEntity(new Crate(mesh2, {
                    x: 250,
                    y: 0,
                    z: 0
                }));

                game.start = function () {
                    $window.requestAnimationFrame(game.start);

                    // TODO: get time delta
                    game.world.update();

                    game.renderer.render(game.scene, game.camera);
                };

                game.onWindowResize = function () {
                    var viewWidth = $window.innerWidth;
                    var viewHeight = $window.innerHeight - 5;

                    game.camera.aspect = viewWidth / viewHeight;
                    game.camera.updateProjectionMatrix();

                    game.renderer.setSize(viewWidth, viewHeight);
                };
            };

            return Game;
        }
    ]);
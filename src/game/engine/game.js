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

                game.renderer = new THREE.WebGLRenderer();
                game.renderer.setSize($window.innerWidth, $window.innerHeight);

                game.camera = new THREE.PerspectiveCamera(70, $window.innerWidth / $window.innerHeight, 1, 1000);
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
                game.world.addEntity(Crate(mesh, {
                    x: 10,
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
                    game.camera.aspect = $window.innerWidth / $window.innerHeight;
                    game.camera.updateProjectionMatrix();

                    game.renderer.setSize($window.innerWidth, $window.innerHeight);
                };
            };

            return Game;
        }
    ]);
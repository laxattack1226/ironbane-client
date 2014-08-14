'use strict';

angular.module('Ironbane.game.engine', [
    'Ironbane.game.THREE',
    'Ironbane.game.input.InputMgr'
])
    .factory('Game', [
        'THREE',
        '$window',
        'InputMgr',
        function (THREE, $window, InputMgr) {
            var Game = function () {
                var game = this;

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

                game.start = function () {
                    $window.requestAnimationFrame(game.start);

                    mesh.rotation.x += 0.005;
                    mesh.rotation.y += 0.01;

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
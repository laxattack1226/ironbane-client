angular.module('Ironbane.game.engine.Babylon.Game', [
    'Ironbane.game.engine.Babylon'
])
    .factory('Game', [
        'Babylon',
        '$window',
        function(Babylon, $window) {
            var Game = function(canvasEl) {
                // babylon engine reference passed from directive
                this.engine = new Babylon.Engine(canvasEl, true);

                this.canvas = canvasEl;
            };

            Game.prototype.createScene = function() {
                // Now create a basic Babylon Scene object
                this.scene = new Babylon.Scene(this.engine);

                // This creates and positions a free camera
                this.camera = new Babylon.FreeCamera("camera1", new Babylon.Vector3(0, 5, -10), this.scene);

                // This targets the camera to scene origin
                this.camera.setTarget(new Babylon.Vector3.Zero());

                // This attaches the camera to the canvas
                this.camera.attachControl(this.canvas, false);

                // This creates a light, aiming 0,1,0 - to the sky.
                this.light = new Babylon.HemisphericLight("light1", new Babylon.Vector3(0, 1, 0), this.scene);

                // Dim the light a small amount
                this.light.intensity = 0.5;

                // Let's try our built-in 'sphere' shape. Params: name, subdivisions, size, scene
                this.sphere = Babylon.Mesh.CreateSphere("sphere1", 16, 2, this.scene);

                // Move the sphere upward 1/2 its height
                this.sphere.position.y = 1;

                // Let's try our built-in 'ground' shape.  Params: name, width, depth, subdivisions, scene
                this.ground = Babylon.Mesh.CreateGround("ground1", 6, 6, 2, this.scene);

            }; // End of createScene function

            Game.prototype.start = function() {
                var game = this;

                game.createScene();

                game.engine.runRenderLoop(function() {
                    game.scene.render();
                });
            };

            return Game;
        }
    ]);
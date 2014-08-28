'use strict';

angular.module('Ironbane.game.systems.ChatBubbler', [
    'Ironbane.game.ces.System',
    'Ironbane.game.ces.Entity',
    'Ironbane.game.components.material',
    'Ironbane.game.components.sprite',
    'Ironbane.game.THREE'
])
    .service('ChatBubbler', [
        'System',
        '$window',
        'Entity',
        'Material',
        'Sprite',
        'THREE',
        function (System, $window, Entity, Material, Sprite, THREE) {

            function createBubble(ctx, x, y, w, h, r) {
                ctx.beginPath();
                ctx.moveTo(x + r, y);
                ctx.lineTo(x + w - r, y);
                ctx.quadraticCurveTo(x + w, y, x + w, y + r);
                ctx.lineTo(x + w, y + h - r);
                ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
                ctx.lineTo(x + r, y + h);
                ctx.quadraticCurveTo(x, y + h, x, y + h - r);
                ctx.lineTo(x, y + r);
                ctx.quadraticCurveTo(x, y, x + r, y);
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
            }

            var ChatBubbler = function () {
                System.call(this);
            };

            ChatBubbler.prototype = Object.create(System.prototype);

            ChatBubbler.prototype.constructor = ChatBubbler;

            ChatBubbler.prototype.update = function () {

            };

            ChatBubbler.prototype.create = function (target, message) {
                var entity = new Entity('ChatBubble');

                var canvas = $window.document.createElement('canvas');
                var ctx = canvas.getContext('2d');

                var borderWidth = 4;
                var borderRadius = 6;
                var lineHeight = 1.4;
                var fontsize = 18;
                var fontunit = 'px';
                var fontfamily = 'Arial Black';

                ctx.font = fontsize + fontunit + ' ' + fontfamily;
                var metrics = ctx.measureText(message);
                var textWidth = metrics.width;

                ctx.fillStyle = 'rgba(255, 255, 255, 1.0)';
                ctx.strokeStyle = 'rgba(0, 0, 0, 1.0)';
                ctx.lineWidth = borderWidth;

                createBubble(ctx, borderWidth * 0.5, borderWidth * 0.5, textWidth + borderWidth, fontsize * lineHeight + borderWidth, borderRadius);

                // text color
                ctx.fillStyle = 'rgba(0, 0, 0, 1.0)';

                ctx.fillText(message, borderWidth, fontsize + borderWidth);

                // canvas contents will be used for a texture
                var texture = new THREE.Texture(canvas);
                texture.needsUpdate = true;

                var spriteMaterial = new THREE.SpriteMaterial({
                    map: texture
                });
                entity.addComponent(new Material(spriteMaterial));

                var sprite = new THREE.Sprite(spriteMaterial);
                sprite.scale.set(100, 50, 1.0);
                // y should be based on the target's top, for now a hack...
                sprite.position.y = 20;
                entity.addComponent(new Sprite(sprite));

                // TODO: add lifespan component

                target.add(entity);
            };

            return ChatBubbler;
        }
    ]);
angular.module('Ironbane.game.systems.chat-bubbler', [
    'Ironbane.game.ces.System',
    'Ironbane.game.ces.entity',
    'Ironbane.game.engine.component-factory',
    'Ironbane.game.THREE'
])
    .service('ChatBubblerSystem', [
        'System',
        '$window',
        'Entity',
        'ComponentFactory',
        'THREE',
        function (System, $window, Entity, ComponentFactory, THREE) {
            'use strict';

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
                var fontfamily = 'Helvetica';

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
                entity.addComponent(ComponentFactory.create('material', [spriteMaterial]));

                var sprite = new THREE.Sprite(spriteMaterial);
                //sprite.scale.set(100, 50, 1.0);
                sprite.scale.set(2,2,2);
                // y should be based on the target's top, for now a hack...
                entity.position.y = 2.8;
                entity.addComponent(ComponentFactory.create('sprite', [sprite]));

                // TODO: add lifespan component

                target.add(entity);
            };

            return ChatBubbler;
        }
    ]);
"use strict";
var end;
(function (end) {
    class Ball {
        constructor(_pos) {
            this.speed = 0.1;
            this.position = _pos.copy();
            console.log("create ball");
            this.newPos = _pos.copy();
        }
        draw() {
            end.crc2.translate(this.position.x, this.position.y);
            end.crc2.moveTo(7, 0);
            end.crc2.arc(0, 0, 7, 0, 2 * Math.PI);
            end.crc2.lineWidth = 1;
            end.crc2.fillStyle = "violet";
            end.crc2.strokeStyle = "black";
            end.crc2.fill();
            end.crc2.stroke();
            end.crc2.resetTransform();
            console.log("testball");
        }
        shot(_pos) {
            if (end.stop == true) {
                this.newPos = _pos.copy();
            }
        }
        move() {
            let directionX = this.newPos.x - this.position.x;
            let directionY = this.newPos.y - this.position.y;
            let direction = new end.Vector(directionX, directionY);
            direction.scale(this.speed);
            this.position.add(direction);
        }
    }
    end.Ball = Ball;
})(end || (end = {}));
//# sourceMappingURL=Ball.js.map
"use strict";
var Endabgabe;
(function (Endabgabe) {
    class Snowball extends Endabgabe.DrawObject {
        constructor(_x, _y) {
            super();
            this.typ = "snowball";
            this.target = [_x, _y];
            this.xP = 700;
            this.yP = 200;
            this.scale = 70;
            this.xD = this.target[0] - this.xP;
            this.yD = this.target[1] - this.yP;
        }
        draw() {
            if (this.scale <= 5) {
                this.scale = 5;
            }
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.arc(this.xP, this.yP, this.scale, 0, 3 * Math.PI);
            Endabgabe.crc2.fillStyle = "#FFFFFF";
            Endabgabe.crc2.fill();
            Endabgabe.crc2.lineWidth = 3.0;
            Endabgabe.crc2.strokeStyle = "#9d9c9d";
            Endabgabe.crc2.stroke();
        }
        move() {
            this.scale -= 7;
            this.xP += this.xD / 10;
            this.yP += this.yD / 10;
        }
    }
    Endabgabe.Snowball = Snowball;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=snowball.js.map
"use strict";
var Endabgabe;
(function (Endabgabe) {
    class Snow extends Endabgabe.DrawObject {
        constructor() {
            super();
            this.xP = Math.random() * 1400;
            this.yP = Math.random() * 700;
        }
        move() {
            this.yD = 4;
            this.xD = Math.random() * 2 - 1;
            this.xP += this.xD;
            this.yP += this.yD;
            if (this.yP > 800) {
                this.yP = 1;
            }
            this.draw();
        }
        draw() {
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.arc(this.xP, this.yP, 7, 0, 3 * Math.PI);
            Endabgabe.crc2.fillStyle = "#F5FEFF";
            Endabgabe.crc2.fill();
            Endabgabe.crc2.lineWidth = 1.2;
            Endabgabe.crc2.strokeStyle = "#D2EEF2";
            Endabgabe.crc2.stroke();
        }
    }
    Endabgabe.Snow = Snow;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Snow.js.map
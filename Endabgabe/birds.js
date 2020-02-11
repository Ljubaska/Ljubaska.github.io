"use strict";
var Endabgabe;
(function (Endabgabe) {
    class Birds extends Endabgabe.DrawObject {
        constructor() {
            super();
            this.typ = "birds";
            this.xP = Math.random() * Endabgabe.canvas.width;
            this.yP = Math.random() * Endabgabe.canvas.height;
            this.colorBody = "hsl(" + Math.random() * 360 + ", 90%, 80%)";
            this.colorKopfFluegel = "hsl(" + Math.random() * 100 + ", 90%, 80%)";
        }
        move() {
            if (this.xP <= 0)
                this.xP = Endabgabe.canvas.width;
            this.pick();
        }
        pick() {
            this.xD = Math.random() * (-20);
            this.yD = Math.random() * (0);
            this.xP += this.xD;
            this.yP += this.yD;
            if (this.xP < 50) {
                this.md = true;
            }
            this.draw();
        }
        draw() {
            //Prototyp Vogel
            //Schnabel
            Endabgabe.crc2.fillStyle = "#F49A32";
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.moveTo(this.xP, this.yP + 135);
            Endabgabe.crc2.lineTo(this.xP + 50, this.yP + 120);
            Endabgabe.crc2.lineTo(this.xP + 50, this.yP + 160);
            Endabgabe.crc2.closePath();
            Endabgabe.crc2.fill();
            //Körper
            Endabgabe.crc2.fillStyle = this.colorBody;
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.ellipse(this.xP + 100, this.yP + 150, 30, 50, -7.7, 0, 2 * Math.PI);
            Endabgabe.crc2.stroke();
            Endabgabe.crc2.closePath();
            Endabgabe.crc2.fill();
            //Flügel
            Endabgabe.crc2.fillStyle = this.colorKopfFluegel;
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.moveTo(this.xP + 83, this.yP + 135);
            Endabgabe.crc2.lineTo(this.xP + 120, this.yP + 135);
            Endabgabe.crc2.lineTo(this.xP + 100, this.yP + 165);
            Endabgabe.crc2.closePath();
            Endabgabe.crc2.fill();
            //Kopf
            Endabgabe.crc2.fillStyle = this.colorKopfFluegel;
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.arc(this.xP + 50, this.yP + 139, 22, 0, 2 * Math.PI);
            Endabgabe.crc2.closePath();
            Endabgabe.crc2.fill();
            //Auge
            Endabgabe.crc2.fillStyle = "black";
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.arc(this.xP + 40, this.yP + 130, 4, 0, 2 * Math.PI);
            Endabgabe.crc2.closePath();
            Endabgabe.crc2.fill();
        }
    }
    Endabgabe.Birds = Birds;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=birds.js.map
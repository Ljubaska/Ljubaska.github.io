"use strict";
var feuerwerkEndabgabe;
(function (feuerwerkEndabgabe) {
    class Particle extends feuerwerkEndabgabe.ObjectMove {
        constructor(_position, _velocity, _color, _lifetime, _type) {
            super(_position);
            this.color = _color;
            this.velocity = _velocity.copy();
            this.lifetime = _lifetime;
            this.type = _type;
        }
        move(_timeslice) {
            super.move(_timeslice);
            this.velocity.y += Particle.gravity;
            this.lifetime -= _timeslice;
            if (this.lifetime < 0)
                this.expendable = true;
            // this.position.x += this.velocity.x;
            // this.position.y += this.velocity.y;
        }
        draw() {
            switch (this.type) {
                case "circle":
                    feuerwerkEndabgabe.crc2.save();
                    feuerwerkEndabgabe.crc2.beginPath();
                    feuerwerkEndabgabe.crc2.translate(this.position.x, this.position.y);
                    feuerwerkEndabgabe.crc2.arc(0, 0, 4, 0, 2 * Math.PI);
                    feuerwerkEndabgabe.crc2.closePath();
                    feuerwerkEndabgabe.crc2.fillStyle = this.color;
                    feuerwerkEndabgabe.crc2.fill();
                    feuerwerkEndabgabe.crc2.restore();
                    break;
                case "smiley":
                    feuerwerkEndabgabe.crc2.save();
                    feuerwerkEndabgabe.crc2.beginPath();
                    feuerwerkEndabgabe.crc2.translate(this.position.x, this.position.y);
                    feuerwerkEndabgabe.crc2.scale(0.25, 0.25);
                    feuerwerkEndabgabe.crc2.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
                    feuerwerkEndabgabe.crc2.moveTo(110, 75);
                    feuerwerkEndabgabe.crc2.arc(75, 75, 35, 0, Math.PI, false); // Mund
                    feuerwerkEndabgabe.crc2.moveTo(65, 65);
                    feuerwerkEndabgabe.crc2.arc(60, 65, 5, 0, Math.PI * 2, false); // Linkes Auge
                    feuerwerkEndabgabe.crc2.moveTo(95, 65);
                    feuerwerkEndabgabe.crc2.arc(90, 65, 5, 0, Math.PI * 2, false); // Rechtes Auge
                    feuerwerkEndabgabe.crc2.closePath();
                    feuerwerkEndabgabe.crc2.fillStyle = this.color;
                    feuerwerkEndabgabe.crc2.fill();
                    feuerwerkEndabgabe.crc2.restore();
                    break;
                case "heart":
                    feuerwerkEndabgabe.crc2.save();
                    feuerwerkEndabgabe.crc2.beginPath();
                    feuerwerkEndabgabe.crc2.translate(this.position.x, this.position.y);
                    feuerwerkEndabgabe.crc2.scale(0.1, 0.1);
                    feuerwerkEndabgabe.crc2.bezierCurveTo(75, 40, 70, 25, 50, 25);
                    feuerwerkEndabgabe.crc2.bezierCurveTo(10, 25, 20, 62.5, 20, 62.5);
                    feuerwerkEndabgabe.crc2.bezierCurveTo(22, 80, 40, 102, 75, 120);
                    feuerwerkEndabgabe.crc2.bezierCurveTo(105, 110, 130, 80, 130, 62.5);
                    feuerwerkEndabgabe.crc2.bezierCurveTo(130, 62.5, 135, 28, 105, 25);
                    feuerwerkEndabgabe.crc2.bezierCurveTo(80, 25, 75, 37, 75, 40);
                    feuerwerkEndabgabe.crc2.closePath();
                    feuerwerkEndabgabe.crc2.fillStyle = this.color;
                    feuerwerkEndabgabe.crc2.fill();
                    feuerwerkEndabgabe.crc2.restore();
                    break;
                case "hexagon":
                    feuerwerkEndabgabe.crc2.save();
                    feuerwerkEndabgabe.crc2.beginPath();
                    feuerwerkEndabgabe.crc2.translate(this.position.x, this.position.y);
                    feuerwerkEndabgabe.crc2.scale(0.25, 0.25);
                    feuerwerkEndabgabe.crc2.moveTo(10, 40);
                    feuerwerkEndabgabe.crc2.lineTo(30, 0);
                    feuerwerkEndabgabe.crc2.lineTo(80, 0);
                    feuerwerkEndabgabe.crc2.lineTo(100, 40);
                    feuerwerkEndabgabe.crc2.lineTo(80, 80);
                    feuerwerkEndabgabe.crc2.lineTo(30, 80);
                    feuerwerkEndabgabe.crc2.lineTo(10, 40);
                    feuerwerkEndabgabe.crc2.closePath();
                    feuerwerkEndabgabe.crc2.fillStyle = this.color;
                    feuerwerkEndabgabe.crc2.fill();
                    feuerwerkEndabgabe.crc2.restore();
                    break;
            }
        }
    }
    Particle.gravity = 1;
    feuerwerkEndabgabe.Particle = Particle;
})(feuerwerkEndabgabe || (feuerwerkEndabgabe = {}));
//# sourceMappingURL=Forms.js.map
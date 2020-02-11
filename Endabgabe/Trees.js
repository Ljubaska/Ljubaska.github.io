"use strict";
var Endabgabe;
(function (Endabgabe) {
    function drawTrees() {
        Endabgabe.crc2.fillStyle = "HSLA(25,76%,31%)";
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.fillRect(300, 500, 25, 80); //310
        Endabgabe.crc2.fillRect(500, 500, 25, 80); //500
        Endabgabe.crc2.fillRect(400, 470, 23, 80); //410
        Endabgabe.crc2.fillRect(700, 650, 23, 80); //710
        Endabgabe.crc2.closePath();
        Endabgabe.crc2.fill();
        Endabgabe.crc2.fillStyle = "HSLA(120,100%,20%)";
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.moveTo(310, 300);
        Endabgabe.crc2.lineTo(260, 500);
        Endabgabe.crc2.lineTo(360, 500);
        Endabgabe.crc2.moveTo(410, 350);
        Endabgabe.crc2.lineTo(360, 520);
        Endabgabe.crc2.lineTo(460, 520);
        Endabgabe.crc2.moveTo(510, 300);
        Endabgabe.crc2.lineTo(460, 500);
        Endabgabe.crc2.lineTo(560, 500);
        Endabgabe.crc2.moveTo(710, 450);
        Endabgabe.crc2.lineTo(660, 650);
        Endabgabe.crc2.lineTo(760, 650);
        Endabgabe.crc2.closePath();
        Endabgabe.crc2.fill();
    }
    Endabgabe.drawTrees = drawTrees;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Trees.js.map
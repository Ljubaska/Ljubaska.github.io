"use strict";
var Endabgabe;
(function (Endabgabe) {
    function drawSnowman() {
        //Unterste Kugel
        Endabgabe.crc2.fillStyle = "#FdF5E6";
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.arc(900, 550, 50, 0, 2 * Math.PI);
        Endabgabe.crc2.closePath();
        Endabgabe.crc2.fill();
        //Mittlere Kugel
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.arc(900, 480, 40, 0, 2 * Math.PI);
        Endabgabe.crc2.closePath();
        Endabgabe.crc2.fill();
        //Kopf
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.arc(899, 420, 30, 0, 2 * Math.PI);
        Endabgabe.crc2.closePath();
        Endabgabe.crc2.fill();
        //Nase
        Endabgabe.crc2.fillStyle = "HSLA(16,100%,50%)";
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.moveTo(860, 430);
        Endabgabe.crc2.lineTo(893, 420);
        Endabgabe.crc2.lineTo(893, 430);
        Endabgabe.crc2.closePath();
        Endabgabe.crc2.fill();
        //Augen
        Endabgabe.crc2.fillStyle = "black";
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.arc(885, 413, 4, 0, 2 * Math.PI);
        Endabgabe.crc2.arc(900, 413, 4, 0, 2 * Math.PI);
        Endabgabe.crc2.closePath();
        Endabgabe.crc2.fill();
        //Hut
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.fillRect(862, 380, 70, 20);
        Endabgabe.crc2.fillRect(875, 347, 45, 50);
        Endabgabe.crc2.closePath();
        Endabgabe.crc2.fill();
    }
    Endabgabe.drawSnowman = drawSnowman;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Snowman.js.map
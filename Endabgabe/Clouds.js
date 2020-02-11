"use strict";
var Endabgabe;
(function (Endabgabe) {
    function drawClouds() {
        //Sun:
        Endabgabe.crc2.fillStyle = "#fff91d";
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.arc(150, 100, 70, 0, 2 * Math.PI);
        Endabgabe.crc2.fill();
        //Clouds
        Endabgabe.crc2.fillStyle = "white";
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.arc(70, 170, 45, 0, 2 * Math.PI);
        Endabgabe.crc2.arc(140, 170, 60, 0, 2 * Math.PI);
        Endabgabe.crc2.arc(200, 170, 45, 0, 2 * Math.PI);
        Endabgabe.crc2.arc(240, 170, 30, 0, 2 * Math.PI);
        Endabgabe.crc2.fill();
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.arc(650, 100, 30, 0, 2 * Math.PI);
        Endabgabe.crc2.arc(810, 100, 60, 0, 2 * Math.PI);
        Endabgabe.crc2.arc(870, 100, 40, 0, 2 * Math.PI);
        Endabgabe.crc2.arc(750, 100, 70, 0, 2 * Math.PI);
        Endabgabe.crc2.arc(700, 100, 50, 0, 2 * Math.PI);
        Endabgabe.crc2.fill();
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.arc(595, 220, 15, 0, 2 * Math.PI);
        Endabgabe.crc2.arc(620, 220, 25, 0, 2 * Math.PI);
        Endabgabe.crc2.arc(650, 220, 30, 0, 2 * Math.PI);
        Endabgabe.crc2.arc(680, 220, 25, 0, 2 * Math.PI);
        Endabgabe.crc2.arc(705, 220, 15, 0, 2 * Math.PI);
        Endabgabe.crc2.arc(720, 220, 10, 0, 2 * Math.PI);
        Endabgabe.crc2.arc(730, 220, 8, 0, 2 * Math.PI);
        Endabgabe.crc2.arc(740, 220, 6, 0, 2 * Math.PI);
        Endabgabe.crc2.fill();
    }
    Endabgabe.drawClouds = drawClouds;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Clouds.js.map
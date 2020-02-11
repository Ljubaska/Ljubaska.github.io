"use strict";
var Endabgabe;
(function (Endabgabe) {
    function drawBirdhouse() {
        //Pfahl
        Endabgabe.crc2.fillStyle = "HSLA(34,57%,70%)";
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.fillRect(100, 500, 15, 100);
        Endabgabe.crc2.closePath();
        Endabgabe.crc2.fill();
        //Häuschen
        Endabgabe.crc2.fillStyle = "HSLA(34,57%,70%)";
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.fillRect(78, 480, 60, 40);
        Endabgabe.crc2.closePath();
        Endabgabe.crc2.fill();
        //"Loch"
        Endabgabe.crc2.fillStyle = "black";
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.arc(108, 500, 10, 0, 2 * Math.PI);
        Endabgabe.crc2.closePath();
        Endabgabe.crc2.fill();
        //Dach
        Endabgabe.crc2.fillStyle = "HSLA(0,53%,58%)";
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.moveTo(110, 430);
        Endabgabe.crc2.lineTo(68, 480);
        Endabgabe.crc2.lineTo(150, 480);
        Endabgabe.crc2.closePath();
        Endabgabe.crc2.fill();
    }
    Endabgabe.drawBirdhouse = drawBirdhouse;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Birdhouse.js.map
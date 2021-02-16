namespace Endabgabe {

    export function drawBirdhouse(): void {

        //Pfahl
        crc2.fillStyle = "HSLA(34,57%,70%)";
        crc2.beginPath();
        crc2.fillRect(100, 500, 15, 100);
        crc2.closePath();
        crc2.fill();

        //Häuschen
        crc2.fillStyle = "HSLA(34,57%,70%)";
        crc2.beginPath();
        crc2.fillRect(78, 480, 60, 40);
        crc2.closePath();
        crc2.fill();

        //"Loch"
        crc2.fillStyle = "black";
        crc2.beginPath();
        crc2.arc(108, 500, 10, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();

        //Dach
        crc2.fillStyle = "HSLA(0,53%,58%)";
        crc2.beginPath();
        crc2.moveTo(110, 430);
        crc2.lineTo(68, 480);
        crc2.lineTo(150, 480);
       
        crc2.closePath();
        crc2.fill();
    }
}
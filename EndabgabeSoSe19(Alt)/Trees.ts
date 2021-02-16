namespace Endabgabe {

    export function drawTrees(): void {
        crc2.fillStyle = "HSLA(25,76%,31%)";
        crc2.beginPath();
        crc2.fillRect(300, 500, 25, 80); //310
        crc2.fillRect(500, 500, 25, 80); //500
        crc2.fillRect(400, 470, 23, 80); //410
        crc2.fillRect(700, 650, 23, 80); //710
        crc2.closePath();
        crc2.fill();
    
        crc2.fillStyle = "HSLA(120,100%,20%)"
        crc2.beginPath();
        crc2.moveTo(310, 300);
        crc2.lineTo(260, 500);
        crc2.lineTo(360, 500);
        crc2.moveTo(410, 350);
        crc2.lineTo(360, 520);
        crc2.lineTo(460, 520);
        crc2.moveTo(510, 300);
        crc2.lineTo(460, 500);
        crc2.lineTo(560, 500);
        crc2.moveTo(710, 450);
        crc2.lineTo(660, 650);
        crc2.lineTo(760, 650);
        crc2.closePath();
        crc2.fill();
        
    
    
    }
}
namespace Endabgabe {

    export class Snow extends DrawObject {
        xD: number;
        yD: number;

        constructor() {
            super();
            this.xP = Math.random() * 1400;
            this.yP = Math.random() * 700;
        }
        
        move(): void {
            this.yD = 4;
            this.xD = Math.random() * 2 - 1;

            this.xP += this.xD;
            this.yP += this.yD;

            if (this.yP > 800) {
                this.yP = 1;
            }
            this.draw();
        }

         draw(): void {
            crc2.beginPath();
            crc2.arc(this.xP, this.yP, 7, 0, 3 * Math.PI);

            crc2.fillStyle = "#F5FEFF";
            crc2.fill();
            crc2.lineWidth = 1.2;
            crc2.strokeStyle = "#D2EEF2";
            crc2.stroke();
        }
    }
    
}
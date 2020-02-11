namespace Endabgabe {

    export class Birds extends DrawObject {
        xD: number;
        yD: number;
        colorBody: string;
        colorKopfFluegel: string;
        md: boolean;
        typ= "birds";

        constructor() {
            super();
            this.xP = Math.random() * canvas.width;
            this.yP = Math.random() * canvas.height;
            this.colorBody = "hsl(" + Math.random() * 360 + ", 90%, 80%)";
            this.colorKopfFluegel = "hsl(" + Math.random() * 100 + ", 90%, 80%)";
        }

        move(): void {
            if (this.xP <= 0)
            this.xP = canvas.width;
            

                this.pick();
            
        }

        pick(): void {

            this.xD = Math.random() * (-20);
            this.yD = Math.random() * (0);

            this.xP += this.xD;
            this.yP += this.yD;

            if (this.xP < 50) {
                this.md = true;
            }
            this.draw();
        }

        draw(): void {
           
        //Prototyp Vogel
        //Schnabel

        crc2.fillStyle = "#F49A32";
        crc2.beginPath();
        crc2.moveTo(this.xP, this.yP + 135);
        crc2.lineTo(this.xP + 50, this.yP + 120);
        crc2.lineTo(this.xP + 50, this.yP + 160);
        crc2.closePath();
        crc2.fill();
        
        //Körper
        crc2.fillStyle = this.colorBody;
        crc2.beginPath();
        crc2.ellipse(this.xP + 100, this.yP + 150, 30, 50, -7.7, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.closePath();
        crc2.fill();

        //Flügel
        crc2.fillStyle = this.colorKopfFluegel;
        crc2.beginPath();
        crc2.moveTo(this.xP + 83, this.yP + 135);
        crc2.lineTo(this.xP + 120, this.yP + 135);
        crc2.lineTo(this.xP + 100, this.yP + 165);
        crc2.closePath();
        crc2.fill();

        //Kopf
        crc2.fillStyle = this.colorKopfFluegel;
        crc2.beginPath();
        crc2.arc(this.xP + 50, this.yP + 139, 22, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();

        //Auge
        crc2.fillStyle = "black";
        crc2.beginPath();
        crc2.arc(this.xP + 40, this.yP + 130, 4, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        
        
        
        }
    }

}
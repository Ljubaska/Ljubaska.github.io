namespace Endabgabe {

    export class Snowball extends DrawObject {
        scale: number;
        target: number[];
        typ= "snowball";

        constructor(_x: number, _y: number) {
            super();
            this.target = [_x, _y];
            this.xP = 700;
            this.yP = 200;
            this.scale = 70;
            this.xD = this.target[0] - this.xP;
            this.yD = this.target[1] - this.yP;
        }

        draw(): void {
            if (this.scale <= 5) {
                this.scale = 5;
            }
            crc2.beginPath();
            crc2.arc(this.xP, this.yP, this.scale, 0, 3 * Math.PI);
            crc2.fillStyle = "#FFFFFF";
            crc2.fill();
            crc2.lineWidth = 3.0;
            crc2.strokeStyle = "#9d9c9d";
            crc2.stroke();


        }

        move(): void {

            this.scale -= 7;


            this.xP += this.xD / 10;
            this.yP += this.yD / 10;

        }








    }
}
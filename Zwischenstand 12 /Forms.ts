namespace feuerwerkEndabgabe {
    export class Particle extends ObjectMove {
        private static gravity: number = 1;
        public position: Vector;
        public velocity: Vector;
        private type: string;
        private lifetime: number;
        private color: string;


        constructor(_position: Vector, _velocity: Vector, _color: string, _lifetime: number, _type: string) {
            super(_position);
            this.color = _color;
            this.velocity = _velocity.copy();
            this.lifetime = _lifetime;
            this.type = _type;
        }

        public move(_timeslice: number): void {
            super.move(_timeslice);
            this.velocity.y += Particle.gravity;
            this.lifetime -= _timeslice;
            if (this.lifetime < 0)
                this.expendable = true;

            // this.position.x += this.velocity.x;
            // this.position.y += this.velocity.y;

        }


        public draw(): void {
            switch (this.type) {
                case "circle":
                    crc2.save();
                    crc2.beginPath();
                    crc2.translate(this.position.x, this.position.y);
                    crc2.arc(0, 0, 4, 0, 2 * Math.PI);
                    crc2.closePath();
                    crc2.fillStyle = this.color;
                    crc2.fill();
                    crc2.restore();
                    break;
                case "smiley":
                    crc2.save();
                    crc2.beginPath();
                    crc2.translate(this.position.x, this.position.y);
                    crc2.scale(0.25, 0.25);
                    crc2.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
                    crc2.moveTo(110, 75);
                    crc2.arc(75, 75, 35, 0, Math.PI, false);    // Mund
                    crc2.moveTo(65, 65);
                    crc2.arc(60, 65, 5, 0, Math.PI * 2, false);  // Linkes Auge
                    crc2.moveTo(95, 65);
                    crc2.arc(90, 65, 5, 0, Math.PI * 2, false);  // Rechtes Auge
                    crc2.closePath();
                    crc2.fillStyle = this.color;
                    crc2.fill();
                    crc2.restore();
                    break;
                    
                case "heart":
                    crc2.save();
                    crc2.beginPath();
                    crc2.translate(this.position.x, this.position.y);
                    crc2.scale(0.1, 0.1);
                    crc2.bezierCurveTo(75, 40, 70, 25, 50, 25);
                    crc2.bezierCurveTo(10, 25, 20, 62.5, 20, 62.5);
                    crc2.bezierCurveTo(22, 80, 40, 102, 75, 120);
                    crc2.bezierCurveTo(105, 110, 130, 80, 130, 62.5);
                    crc2.bezierCurveTo(130, 62.5, 135, 28, 105, 25);
                    crc2.bezierCurveTo(80, 25, 75, 37, 75, 40);
                    crc2.closePath();
                    crc2.fillStyle = this.color;
                    crc2.fill();
                    crc2.restore();
                    break;
                case "hexagon":
                    crc2.save();
                    crc2.beginPath();
                    crc2.translate(this.position.x, this.position.y);
                    crc2.scale(0.25, 0.25);
                    crc2.moveTo(10,40);
                    crc2.lineTo(30,0);
                    crc2.lineTo(80,0);
                    crc2.lineTo(100,40);
                    crc2.lineTo(80,80);
                    crc2.lineTo(30,80);
                    crc2.lineTo(10,40);
                    crc2.closePath();
                    crc2.fillStyle = this.color;
                    crc2.fill();
                    crc2.restore();
                    break;
            }
        }
    }
}
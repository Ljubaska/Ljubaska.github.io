namespace Soccer {
    export class Ball extends Soccer.Participant {
        dir: number[] | null = null;
        speed: number = DEFAULT_BALL_SPEED;
        collisionImmune: boolean = false;

        constructor(initX: number, initY: number, maxFieldWidth: number, maxFieldHeight: number) {
            super(initX, initY, maxFieldWidth, maxFieldHeight);
        }

        setDir(vec1: number[]) {
            this.speed = DEFAULT_BALL_SPEED;
            this.dir = vec1;
            this.collisionImmune = true;
            setTimeout(() => {
                this.collisionImmune = false;
            }, BALL_IMMUNE_TIME_IN_MS);
        }

        move() {
            if (!this.dir) {
                return;
            }
            this.addPos(this.dir[0] * this.speed, this.dir[1] * this.speed);
            this.speed -= BALL_SPEED_REDUCE;
            if (this.speed < 0) {
                this.dir = null;
                this.speed = DEFAULT_BALL_SPEED;
            }
        }
    }
}

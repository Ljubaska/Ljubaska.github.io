namespace Soccer {
    export class Referee extends Participant {
        public readonly color: string = "#F6A000";
        public readonly speed: number = 0.5;

        constructor(initX: number, initY: number, maxFieldWidth: number, maxFieldHeight: number) {
            super(initX, initY, maxFieldWidth, maxFieldHeight);
        }
    }
}

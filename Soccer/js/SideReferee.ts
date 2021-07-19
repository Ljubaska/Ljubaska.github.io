namespace Soccer {
    export class SideReferee extends Participant {
        public readonly color: string = "#F6A000";
        public readonly speed: number = 2;

        constructor(initX: number, initY: number, maxFieldWidth: number, maxFieldHeight: number) {
            super(initX, initY, maxFieldWidth, maxFieldHeight);
        }
    }
}

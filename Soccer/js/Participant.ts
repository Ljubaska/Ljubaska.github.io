namespace Soccer {
    export class Participant {
        public readonly initX;
        public readonly initY;
        public readonly maxFieldWidth;
        public readonly maxFieldHeight;

        constructor(initX: number, initY: number, maxFieldWidth: number, maxFieldHeight: number) {
            this.maxFieldWidth = maxFieldWidth;
            this.maxFieldHeight = maxFieldHeight;
            this.initX = initX;
            this.initY = initY;
            this._x = initX;
            this._y = initY;
        }

        private _x: number;

        get x(): number {
            return this._x;
        }

        private _y: number;

        get y(): number {
            return this._y;
        }

        public setPos(x: number, y: number) {
            this._x = x;
            this._y = y;
        }

        public addPos(addX: number, addY: number) {
            //to keep entity in boundaries
            if (this._x + addX > MINIMUM_WALL_DISTANCE && this._x + addX < this.maxFieldWidth - MINIMUM_WALL_DISTANCE) {
                this._x += addX;
            }
            if (this._y + addY > MINIMUM_WALL_DISTANCE && this._y + addY < this.maxFieldHeight  - MINIMUM_WALL_DISTANCE) {
                this._y += addY;
            }
        }
    }
}

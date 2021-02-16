"use strict";
var feuerwerkEndabgabe;
(function (feuerwerkEndabgabe) {
    class Vector {
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
        copy() {
            return new Vector(this.x, this.y);
        }
    }
    feuerwerkEndabgabe.Vector = Vector;
})(feuerwerkEndabgabe || (feuerwerkEndabgabe = {}));
//# sourceMappingURL=Vector.js.map
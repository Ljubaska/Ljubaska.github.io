"use strict";
var feuerwerkEndabgabe;
(function (feuerwerkEndabgabe) {
    class ObjectMove {
        constructor(_position) {
            this.expendable = false;
            if (_position)
                this.position = _position.copy();
            else
                this.position = new feuerwerkEndabgabe.Vector(0, 0);
            this.velocity = new feuerwerkEndabgabe.Vector(0, 0);
        }
        move(_timeslice) {
            let offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
        }
    }
    feuerwerkEndabgabe.ObjectMove = ObjectMove;
})(feuerwerkEndabgabe || (feuerwerkEndabgabe = {}));
//# sourceMappingURL=ObjectMove.js.map
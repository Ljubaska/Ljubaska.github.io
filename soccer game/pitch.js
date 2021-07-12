"use strict";
var end;
(function (end) {
    function pitch() {
        // Outer lines
        end.crc2.beginPath();
        end.crc2.rect(0, 0, end.canvas.width, end.canvas.height);
        end.crc2.fillStyle = "#060";
        end.crc2.fill();
        end.crc2.rect(5, 5, end.canvas.width - 10, end.canvas.height - 10);
        end.crc2.lineWidth = 1;
        end.crc2.strokeStyle = "white";
        end.crc2.stroke();
        end.crc2.closePath();
        end.crc2.fillStyle = "white";
        // Mid line
        end.crc2.beginPath();
        end.crc2.moveTo(end.canvas.width / 2, 5);
        end.crc2.lineTo(end.canvas.width / 2, end.canvas.height - 5);
        end.crc2.stroke();
        end.crc2.closePath();
        //Mid circle
        end.crc2.beginPath();
        end.crc2.arc(end.canvas.width / 2, end.canvas.height / 2, 73, 0, 2 * Math.PI, false);
        end.crc2.stroke();
        end.crc2.closePath();
        //Mid point
        end.crc2.beginPath();
        end.crc2.arc(end.canvas.width / 2, end.canvas.height / 2, 3, 0, 2 * Math.PI, false);
        end.crc2.fill();
        end.crc2.closePath();
        //Home penalty box
        end.crc2.beginPath();
        end.crc2.rect(5, (end.canvas.height - 322) / 2, 132, 322);
        end.crc2.stroke();
        end.crc2.closePath();
        //Home goal box
        end.crc2.beginPath();
        end.crc2.rect(5, (end.canvas.height - 146) / 2, 44, 146);
        end.crc2.stroke();
        end.crc2.closePath();
        //Home goal 
        end.crc2.beginPath();
        end.crc2.moveTo(10, (end.canvas.height / 2) - 22);
        end.crc2.lineTo(10, (end.canvas.height / 2) + 22);
        end.crc2.lineTo(0, (end.canvas.height / 2) + 22);
        end.crc2.lineTo(0, (end.canvas.height / 2) - 22);
        end.crc2.lineTo(10, (end.canvas.height / 2) - 22);
        end.crc2.lineWidth = 2;
        end.crc2.fillStyle = "black";
        end.crc2.fill();
        end.crc2.stroke();
        end.crc2.closePath();
        end.crc2.lineWidth = 1;
        end.crc2.fillStyle = "#FFF";
        //Home penalty point
        end.crc2.beginPath();
        end.crc2.arc(88, end.canvas.height / 2, 1, 0, 2 * Math.PI, true);
        end.crc2.fill();
        end.crc2.closePath();
        //Home half circle
        end.crc2.beginPath();
        end.crc2.arc(93, end.canvas.height / 2, 73, 0.29 * Math.PI, 1.71 * Math.PI, true);
        end.crc2.stroke();
        end.crc2.closePath();
        //Away penalty box
        end.crc2.beginPath();
        end.crc2.rect(end.canvas.width - 132, (end.canvas.height - 322) / 2, 127, 322);
        end.crc2.stroke();
        end.crc2.closePath();
        //Away goal box
        end.crc2.beginPath();
        end.crc2.rect(end.canvas.width - 44, (end.canvas.height - 146) / 2, 39, 146);
        end.crc2.stroke();
        end.crc2.closePath();
        //Away goal 
        end.crc2.beginPath();
        end.crc2.moveTo(end.canvas.width - 10, (end.canvas.height / 2) - 22);
        end.crc2.lineTo(end.canvas.width - 10, (end.canvas.height / 2) + 22);
        end.crc2.lineTo(end.canvas.width, (end.canvas.height / 2) + 22);
        end.crc2.lineTo(end.canvas.width, (end.canvas.height / 2) - 22);
        end.crc2.lineTo(end.canvas.width - 10, (end.canvas.height / 2) - 22);
        end.crc2.lineWidth = 2;
        end.crc2.fillStyle = "black";
        end.crc2.fill();
        end.crc2.stroke();
        end.crc2.closePath();
        end.crc2.lineWidth = 1;
        end.crc2.fillStyle = "#FFF";
        //Away penalty point
        end.crc2.beginPath();
        end.crc2.arc(end.canvas.width - 88, end.canvas.height / 2, 1, 0, 2 * Math.PI, true);
        end.crc2.fill();
        end.crc2.closePath();
        //Away half circle
        end.crc2.beginPath();
        end.crc2.arc(end.canvas.width - 88, end.canvas.height / 2, 73, 0.71 * Math.PI, 1.29 * Math.PI, false);
        end.crc2.stroke();
        end.crc2.closePath();
        //Home L corner
        end.crc2.beginPath();
        end.crc2.arc(5, 5, 8, 0, 0.5 * Math.PI, false);
        end.crc2.stroke();
        end.crc2.closePath();
        //Home R corner
        end.crc2.beginPath();
        end.crc2.arc(5, end.canvas.height - 5, 8, 0, -0.5 * Math.PI, true);
        end.crc2.stroke();
        end.crc2.closePath();
        //Away R corner
        end.crc2.beginPath();
        end.crc2.arc(end.canvas.width - 5, 5, 8, 0.5 * Math.PI, 1 * Math.PI, false);
        end.crc2.stroke();
        end.crc2.closePath();
        //Away L corner
        end.crc2.beginPath();
        end.crc2.arc(end.canvas.width - 5, end.canvas.height - 5, 8, 1 * Math.PI, 1.5 * Math.PI, false);
        end.crc2.stroke();
        end.crc2.closePath();
    }
    end.pitch = pitch;
    //  export function ball(): void {
    //    crc2.translate(canvas.width / 2, canvas.height / 2);
    //    crc2.moveTo(7, 0);
    //    crc2.arc(0, 0, 7, 0, 2 * Math.PI);
    //    crc2.lineWidth = 1;
    //    crc2.fillStyle = "violet";
    //    crc2.fill();
    //    crc2.stroke();
    //    crc2.resetTransform();
    //}
})(end || (end = {}));
//# sourceMappingURL=pitch.js.map
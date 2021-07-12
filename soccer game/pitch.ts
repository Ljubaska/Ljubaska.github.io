namespace end {


    export function pitch(): void {
      // Outer lines
      crc2.beginPath();
      crc2.rect(0, 0, canvas.width, canvas.height);
      crc2.fillStyle = "#060";
      crc2.fill();
      crc2.rect(5, 5, canvas.width - 10, canvas.height - 10);
      crc2.lineWidth = 1;
      crc2.strokeStyle = "white";
      crc2.stroke();
      crc2.closePath();

      crc2.fillStyle = "white";
      
      // Mid line
      crc2.beginPath();
      crc2.moveTo(canvas.width / 2, 5);
      crc2.lineTo(canvas.width / 2, canvas.height - 5);
      crc2.stroke();
      crc2.closePath();
      
      //Mid circle
      crc2.beginPath();
      crc2.arc(canvas.width / 2, canvas.height / 2, 73, 0, 2 * Math.PI, false);
      crc2.stroke();
      crc2.closePath();

      //Mid point
      crc2.beginPath();
      crc2.arc(canvas.width / 2, canvas.height / 2, 3, 0, 2 * Math.PI, false);
      crc2.fill();
      crc2.closePath();
      
      //Home penalty box
      crc2.beginPath();
      crc2.rect(5, (canvas.height - 322) / 2, 132, 322);
      crc2.stroke();
      crc2.closePath();

      //Home goal box
      crc2.beginPath();
      crc2.rect(5, (canvas.height - 146) / 2, 44, 146);
      crc2.stroke();
      crc2.closePath();

      //Home goal 
      crc2.beginPath();
      crc2.moveTo(10, (canvas.height / 2) - 22);
      crc2.lineTo(10, (canvas.height / 2) + 22);
      crc2.lineTo(0, (canvas.height / 2) + 22);
      crc2.lineTo(0, (canvas.height / 2) - 22);
      crc2.lineTo(10, (canvas.height / 2) - 22);
      crc2.lineWidth = 2;
      crc2.fillStyle = "black";
      crc2.fill();
      crc2.stroke();
      crc2.closePath();

      crc2.lineWidth = 1;
      crc2.fillStyle = "#FFF";

      //Home penalty point
      crc2.beginPath();
      crc2.arc(88, canvas.height / 2, 1, 0, 2 * Math.PI, true);
      crc2.fill();
      crc2.closePath();

      //Home half circle
      crc2.beginPath();
      crc2.arc(93, canvas.height / 2, 73, 0.29 * Math.PI, 1.71 * Math.PI, true);
      crc2.stroke();
      crc2.closePath();
      
      //Away penalty box
      crc2.beginPath();
      crc2.rect(canvas.width - 132, (canvas.height - 322) / 2, 127, 322);
      crc2.stroke();
      crc2.closePath();

      //Away goal box
      crc2.beginPath();
      crc2.rect(canvas.width - 44, (canvas.height - 146) / 2, 39, 146);
      crc2.stroke();
      crc2.closePath();

      //Away goal 
      crc2.beginPath();
      crc2.moveTo(canvas.width - 10, (canvas.height / 2) - 22);
      crc2.lineTo(canvas.width - 10, (canvas.height / 2) + 22);
      crc2.lineTo(canvas.width, (canvas.height / 2) + 22);
      crc2.lineTo(canvas.width, (canvas.height / 2) - 22);
      crc2.lineTo(canvas.width - 10, (canvas.height / 2) - 22);
      crc2.lineWidth = 2;
      crc2.fillStyle = "black";
      crc2.fill();
      crc2.stroke();
      crc2.closePath();
      crc2.lineWidth = 1;
      crc2.fillStyle = "#FFF";

      //Away penalty point
      crc2.beginPath();
      crc2.arc(canvas.width - 88, canvas.height / 2, 1, 0, 2 * Math.PI, true);
      crc2.fill();
      crc2.closePath();

      //Away half circle
      crc2.beginPath();
      crc2.arc(canvas.width - 88, canvas.height / 2, 73, 0.71 * Math.PI, 1.29 * Math.PI, false);
      crc2.stroke();
      crc2.closePath();
            
      //Home L corner
      crc2.beginPath();
      crc2.arc(5, 5, 8, 0, 0.5 * Math.PI, false);
      crc2.stroke();
      crc2.closePath();

      //Home R corner
      crc2.beginPath();
      crc2.arc(5, canvas.height - 5, 8, 0, -0.5 * Math.PI, true);
      crc2.stroke();
      crc2.closePath();

      //Away R corner
      crc2.beginPath();
      crc2.arc(canvas.width - 5, 5, 8, 0.5 * Math.PI, 1 * Math.PI, false);
      crc2.stroke();
      crc2.closePath();

      //Away L corner
      crc2.beginPath();
      crc2.arc(canvas.width - 5, canvas.height - 5, 8, 1 * Math.PI, 1.5 * Math.PI, false);
      crc2.stroke();
      crc2.closePath();

    }

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


    


}
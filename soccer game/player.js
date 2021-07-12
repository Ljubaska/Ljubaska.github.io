"use strict";
var end;
(function (end) {
    class Player extends end.Person {
        constructor(_pos, _num) {
            super(_pos);
            this.speed = Math.random() * (end.pace - 0.02) + 0.02; //mindesten 0.02 schnell maximal eintrag von pace schnell
            this.balance = Math.floor(Math.random() * (end.shotMax - end.shotMin) + end.shotMin); //Nummer von 70 bis 100 über Form, verwenden in Ball.move() bei newPos.x und y
            this.colorNumber = "#FFFFFF";
            this.position = _pos;
            this.oldPosition = _pos.copy();
            this.number = _num;
            console.log(this.speed);
            if (end.players.length <= 10) {
                this.color = end.homeColor.toString();
            }
            else {
                this.color = end.awayColor.toString();
            }
        }
        draw() {
            end.crc2.translate(this.position.x - 20, this.position.y - 25); //Um Verschiebung beim zeichnen auszugleichen
            let player = new Path2D();
            player.moveTo(20, 25);
            player.lineTo(20, 55);
            player.lineTo(60, 55);
            player.lineTo(60, 25);
            player.lineTo(75, 25);
            player.lineTo(75, 15);
            player.lineTo(60, 5);
            player.moveTo(20, 25);
            player.lineTo(5, 25);
            player.lineTo(5, 15);
            player.lineTo(20, 5);
            player.lineTo(60, 5);
            end.crc2.lineWidth = 4;
            end.crc2.strokeStyle = "black";
            end.crc2.fillStyle = this.color;
            end.crc2.save();
            end.crc2.scale(0.5, 0.5);
            end.crc2.stroke(player);
            end.crc2.fill(player);
            end.crc2.restore();
            end.crc2.fillStyle = this.colorNumber;
            end.crc2.font = "10px Arial";
            if (this.number >= 10) {
                end.crc2.strokeText(this.number.toString(), 14, 21);
                end.crc2.fillText(this.number.toString(), 14, 21);
            }
            else {
                end.crc2.strokeText(" " + this.number.toString(), 14, 21);
                end.crc2.fillText(" " + this.number.toString(), 14, 21);
            }
            end.crc2.resetTransform();
        }
        move() {
            //console.log(ball.position.x, this.position.x);
            let vergX = end.ball.position.x - this.position.x;
            let vergY = end.ball.position.y - this.position.y;
            let direction = new end.Vector(vergX, vergY);
            if (vergX <= 0) {
                vergX = vergX * (-1);
            }
            if (vergY <= 0) {
                vergY = vergY * (-1);
            }
            if (vergX <= 80 && vergY <= 105) {
                if (vergX > 10 || vergY > 10) {
                    direction.scale(this.speed);
                    this.position.add(direction);
                }
                else {
                    console.log("Stop!");
                    end.stop = true;
                    //back = false;
                }
            }
        }
        moveBack() {
            let directionX = this.oldPosition.x - this.position.x;
            let directionY = this.oldPosition.y - this.position.y;
            let direction = new end.Vector(directionX, directionY);
            direction.scale(this.speed);
            this.position.add(direction);
        }
        playerCard(_vergleich) {
            if (_vergleich == 1) {
                let div = document.getElementById("card1");
                div.innerHTML = "";
                div.style.backgroundColor = end.homeColor.toString();
                let cardNumber = document.createElement("h3");
                cardNumber.innerHTML = this.number.toString();
                div.appendChild(cardNumber);
                let cardName = document.createElement("h3");
                cardName.innerHTML = end.name[end.spieler1][0].toString();
                div.appendChild(cardName);
                let cardPos = document.createElement("h5");
                cardPos.innerHTML = end.name[end.spieler1][1].toString();
                div.appendChild(cardPos);
                let cardImg = document.createElement("img");
                cardImg.setAttribute("src", "Flags/" + end.name[end.spieler1][2].toString() + ".png");
                cardImg.style.width = "30px";
                cardImg.style.height = "20px";
                div.appendChild(cardImg);
                let cardSpeed = document.createElement("p");
                cardSpeed.innerHTML = "Pace: " + Math.floor(this.speed * 1000);
                div.appendChild(cardSpeed);
                let cardBalance = document.createElement("p");
                cardBalance.innerHTML = "Shot: " + this.balance;
                div.appendChild(cardBalance);
                let cardImg2 = document.createElement("img");
                cardImg2.setAttribute("src", "Players/" + end.name[end.spieler1][0].toString() + ".png");
                cardImg2.style.width = "161px";
                cardImg2.style.height = "189px";
                div.appendChild(cardImg2);
                //Hier infos für 1. Team rein! (Name, Pace, Schuss, Position, Hintergrundfarbe der Karte usw..)
            }
            else {
                let div = document.getElementById("card2");
                div.innerHTML = "";
                div.style.backgroundColor = end.awayColor.toString();
                let cardNumber = document.createElement("h3");
                cardNumber.innerHTML = this.number.toString();
                div.appendChild(cardNumber);
                let cardName = document.createElement("h3");
                cardName.innerHTML = end.name[end.spieler2][0].toString();
                div.appendChild(cardName);
                let cardPos = document.createElement("h5");
                cardPos.innerHTML = end.name[end.spieler2][1].toString();
                div.appendChild(cardPos);
                let cardImg = document.createElement("img");
                cardImg.setAttribute("src", "Flags/" + end.name[end.spieler2][2].toString() + ".png");
                cardImg.style.width = "30px";
                cardImg.style.height = "20px";
                div.appendChild(cardImg);
                let cardSpeed = document.createElement("p");
                cardSpeed.innerHTML = "Pace: " + Math.floor(this.speed * 1000);
                div.appendChild(cardSpeed);
                let cardBalance = document.createElement("p");
                cardBalance.innerHTML = "Shot: " + this.balance;
                div.appendChild(cardBalance);
                let cardImg2 = document.createElement("img");
                cardImg2.setAttribute("src", "Players/" + end.name[end.spieler2][0].toString() + ".png");
                cardImg2.style.width = "161px";
                cardImg2.style.height = "189px";
                div.appendChild(cardImg2);
                //Hier infos für 2. Team rein! (Name, Pace, Schuss, Position, Hintergrundfarbe der Karte usw..)
            }
        }
    }
    end.Player = Player;
})(end || (end = {}));
//# sourceMappingURL=Player.js.map
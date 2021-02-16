"use strict";
//import { start } from "repl";
var Endabgabe;
(function (Endabgabe) {
    window.addEventListener("load", init);
    let server = "https://ljubaska2.herokuapp.com";
    let golden = 0.62;
    let objects = [];
    let birds = [];
    let imagedata;
    let fps = 25;
    let xMouse;
    let yMouse;
    let snowball;
    Endabgabe.score = 0;
    let start;
    let ende;
    let reloadGame;
    let yourScore;
    function listeners() {
        console.log("listeners");
        document.getElementsByTagName("canvas")[0].addEventListener("click", mouseEvent);
        //"Click"-Eventlistener vom Typ MouseEvent an canvas
    }
    function init() {
        start = document.getElementById("start");
        start.addEventListener("click", startGame);
        ende = document.getElementById("ende");
        ende.classList.add("invisible");
    }
    //Nach laden der Seite wird die Funktion init aufgerufen, die an das HtmlElement "Anleitung" einen click-Eventlistener anhängt, 
    //der die Funktion startGame aufruft
    //an das HTML Element "ende" die Klasse 
    function startGame() {
        let nameinput = document.getElementById("nameinput");
        Endabgabe.name = nameinput.value;
        anzeigeCanvas();
        listeners();
        console.log("maininit");
        Endabgabe.canvas = document.getElementsByTagName("canvas")[0];
        Endabgabe.crc2 = Endabgabe.canvas.getContext("2d");
        // document.getElementById("startscreen").classList.add("invisible");
        //Nachfragen
        drawBackground();
        Endabgabe.drawClouds();
        console.log("Clouds", Endabgabe.drawClouds);
        Endabgabe.drawMountains();
        console.log("Mountains", Endabgabe.drawMountains);
        Endabgabe.drawBirdhouse();
        console.log("Birdhouse", Endabgabe.drawBirdhouse);
        Endabgabe.drawSnowman();
        console.log("Snowman", Endabgabe.drawSnowman);
        Endabgabe.drawTrees();
        console.log("Trees", Endabgabe.drawTrees);
        generateBird();
        //generatePickingBird();
        generateSnow();
        imagedata = Endabgabe.crc2.getImageData(0, 0, Endabgabe.canvas.width, Endabgabe.canvas.height);
        setTimeout(gameEnds, 180000);
        update();
    }
    function drawBackground() {
        console.log("Background");
        let gradiant = Endabgabe.crc2.createLinearGradient(0, 0, 0, Endabgabe.crc2.canvas.height);
        gradiant.addColorStop(0, "HSL(197,71%,73%");
        gradiant.addColorStop(golden, "white");
        gradiant.addColorStop(1, "HSL(0, 100%, 99%)");
        Endabgabe.crc2.fillStyle = gradiant;
        Endabgabe.crc2.fillRect(0, 0, Endabgabe.crc2.canvas.width, Endabgabe.crc2.canvas.height);
    }
    function anzeigeCanvas() {
        document.getElementsByTagName("canvas")[0].classList.remove("invisible");
        document.getElementsByTagName("div")[0].classList.add("invisible");
    }
    function update() {
        Endabgabe.crc2.clearRect(0, 0, 1400, 900);
        Endabgabe.crc2.putImageData(imagedata, 0, 0);
        window.setTimeout(update, 1000 / fps);
        for (let i = 0; i < objects.length; i++) {
            let object = objects[i];
            object.draw();
            object.move();
        }
        if (snowball) {
            if (snowball.xP >= xMouse - 20 && snowball.xP <= xMouse + 20) {
                if (snowball.yP >= yMouse - 20 && snowball.yP <= yMouse + 20) {
                    console.log("ball angekommen");
                    checkIfHit();
                }
            }
        }
        drawScore();
    }
    //Schneeball
    function generateSnowball(_xMouse, _yMouse) {
        console.log(snowball);
        snowball = new Endabgabe.Snowball(_xMouse, _yMouse);
        //            console.log(snowball);
        console.log("neuer schneeball");
        objects.push(snowball);
    }
    function mouseEvent(_event) {
        if (!snowball) {
            xMouse = _event.clientX;
            yMouse = _event.clientY;
            generateSnowball(xMouse, yMouse);
        }
    }
    function checkIfHit() {
        for (let i = 0; i < birds.length; i++) {
            if (xMouse >= birds[i].xP - 60 && xMouse <= birds[i].xP + 20) {
                if (yMouse >= birds[i].yP - 25 && yMouse <= birds[i].yP + 60) {
                    console.log("vogel getroffen", birds[i]);
                    birds.splice(i, 1);
                    for (let a = 0; a < objects.length; a++) {
                        if (objects[a].typ == "birds") { //|| objects[a].typ == "pickingBirds") {
                            if (xMouse >= objects[a].xP - 60 && xMouse <= objects[a].xP + 20) {
                                if (yMouse >= objects[a].yP - 25 && yMouse <= objects[a].yP + 60) {
                                    console.log("object getroffen");
                                    objects.splice(a, 1);
                                    let bird = new Endabgabe.Birds();
                                    objects.push(bird);
                                    birds.push(bird);
                                    if (objects[a].typ == "birds") {
                                        Endabgabe.score += 20;
                                    }
                                    /*else if (objects[a].typ == "pickingBirds") {
                                        score += 10;
                                    }*/
                                }
                            }
                        }
                    }
                }
            }
        }
        for (let i = 0; i < objects.length; i++) {
            if (objects[i].typ == "snowball") {
                objects.splice(i, 1);
                console.log("ball löschen");
                console.log(objects[i]);
            }
        }
    }
    //Schnee
    function generateSnow() {
        for (let i = 0; i < 70; i++) {
            let snowflake = new Endabgabe.Snow();
            objects.push(snowflake);
        }
    }
    function generateBird() {
        for (let i = 0; i < 15; i++) {
            let bird = new Endabgabe.Birds();
            objects.push(bird);
            birds.push(bird);
        }
    }
    /*function pickingBirds(): void {
        for (let i: number = 0; i < 5; i++) {
    
            let bird: pickinBbird = new pickingBird();
            objects.push(birds);
            birds.push(bird);
        }
    }*/
    function gameEnds() {
        document.getElementsByTagName("canvas")[0].classList.add("invisible");
        ende = document.getElementById("ende");
        ende.classList.remove("invisible");
        reloadGame = document.getElementById("reload");
        reloadGame.classList.remove("invisible");
        reloadGame.addEventListener("click", reload);
        yourScore = document.getElementById("yourScore");
        yourScore.innerText = "Deine Punktzahl:" + " " + Endabgabe.score.toString();
        //  DatabaseClient.insert();
        //DatabaseClient.getHighscore();
    }
    function reload() {
        window.location.reload();
    }
    function drawScore() {
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.moveTo(50, 700);
        Endabgabe.crc2.lineTo(300, 700);
        Endabgabe.crc2.lineTo(300, 770);
        Endabgabe.crc2.lineTo(50, 770);
        Endabgabe.crc2.closePath();
        Endabgabe.crc2.fillStyle = "HSLA(182,25%,50%)";
        Endabgabe.crc2.fill();
        Endabgabe.crc2.lineWidth = 1.5;
        Endabgabe.crc2.strokeStyle = "black";
        Endabgabe.crc2.stroke();
        Endabgabe.crc2.font = "55px Amatic SC";
        Endabgabe.crc2.fillStyle = "#000000";
        Endabgabe.crc2.fillText("Score", 85, 750);
        Endabgabe.crc2.font = "55px Amatic SC";
        Endabgabe.crc2.fillStyle = "#000000";
        Endabgabe.crc2.fillText(Endabgabe.score.toString(), 200, 750);
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Main.js.map
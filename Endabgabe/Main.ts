//import { start } from "repl";

namespace Endabgabe {

    window.addEventListener("load", init);

    export let crc2: CanvasRenderingContext2D;
    
    let server: string = "https://ljubaska2.herokuapp.com/";
    let golden: number = 0.62;
    let objects: DrawObject[] = [];
    let birds: Birds[] = [];
    let imagedata: ImageData;
    let fps: number = 25;
    let i: number = 0;
    let xMouse: number;
    let yMouse: number;
    let snowball: Snowball;
    export let name: string;
    export let score: number = 0;
    let gameEndbool: boolean = false;
    export let canvas: HTMLCanvasElement;
    let start: HTMLButtonElement;


    function listeners(): void {
        console.log("listeners");


        document.getElementsByTagName("canvas")[0].addEventListener("click", mouseEvent);
        //"Click"-Eventlistener vom Typ MouseEvent an canvas

    }
    function init(): void {
        document.getElementById("start").addEventListener("click", startGame);
        document.getElementById("ende").classList.add("invisible");
    }
    //Nach laden der Seite wird die Funktion init aufgerufen, die an das HtmlElement "Anleitung" einen click-Eventlistener anhängt, 
    //der die Funktion startGame aufruft
    //an das HTML Element "ende" die Klasse 



    function startGame(): void {
        let nameinput: HTMLInputElement = <HTMLInputElement>document.getElementById("nameinput");
        name = nameinput.value;
        anzeigeCanvas();
        listeners();

        console.log("maininit");

        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");


        // document.getElementById("startscreen").classList.add("invisible");
        //Nachfragen

        drawBackground();

        drawClouds();
        console.log("Clouds", drawClouds);

        drawMountains();
        console.log("Mountains", drawMountains);

        drawBirdhouse();
        console.log("Birdhouse", drawBirdhouse);

        drawSnowman();
        console.log("Snowman", drawSnowman);

        drawTrees();
        console.log("Trees", drawTrees);

        generateBird();
        //generatePickingBird();
        generateSnow();


        imagedata = crc2.getImageData(0, 0, canvas.width, canvas.height);
        setTimeout(gameEnds, 180000);

        update();
    }

    function drawBackground(): void {
        console.log("Background");
        let gradiant: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradiant.addColorStop(0, "HSL(197,71%,73%");
        gradiant.addColorStop(golden, "white");
        gradiant.addColorStop(1, "HSL(0, 100%, 99%)");

        crc2.fillStyle = gradiant;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }


    function anzeigeCanvas(): void {
        document.getElementsByTagName("canvas")[0].classList.remove("invisible");
        document.getElementsByTagName("div")[0].classList.add("invisible");

    }



    function update(): void {
        crc2.clearRect(0, 0, 1400, 900);
        crc2.putImageData(imagedata, 0, 0);
        window.setTimeout(update, 1000 / fps);


        for (let i: number = 0; i < objects.length; i++) {
            let object: DrawObject = objects[i];
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
    function generateSnowball(_xMouse: number, _yMouse: number): void { //Übergabeparameter der Mausposition
        console.log(snowball);


        snowball = new Snowball(_xMouse, _yMouse);
        //            console.log(snowball);
        console.log("neuer schneeball");

        objects.push(snowball);
    }

    function mouseEvent(_event: MouseEvent): void {
        if (!snowball) {
            xMouse = _event.clientX;
            yMouse = _event.clientY;
            generateSnowball(xMouse, yMouse);
        }
    }

    function checkIfHit(): void {
        for (let i: number = 0; i < birds.length; i++) {
            if (xMouse >= birds[i].xP - 60 && xMouse <= birds[i].xP + 20) {
                if (yMouse >= birds[i].yP - 25 && yMouse <= birds[i].yP + 60) {
                    console.log("vogel getroffen", birds[i]);
                    birds.splice(i, 1);
                    for (let a: number = 0; a < objects.length; a++) {
                        if (objects[a].typ == "birds") { //|| objects[a].typ == "pickingBirds") {
                            if (xMouse >= objects[a].xP - 60 && xMouse <= objects[a].xP + 20) {
                                if (yMouse >= objects[a].yP - 25 && yMouse <= objects[a].yP + 60) {
                                    console.log("object getroffen");
                                    objects.splice(a, 1);
                                    let bird = new Birds();
                                    objects.push(bird);
                                    birds.push(bird);

                                    if (objects[a].typ == "birds") {
                                        score += 20;
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

        for (let i: number = 0; i < objects.length; i++) {
            if (objects[i].typ == "snowball") {
                objects.splice(i, 1);
                console.log("ball löschen");
                console.log(objects[i]);
            }
        }
        snowball = null;
    }



    //Schnee
    function generateSnow(): void {
        for (let i: number = 0; i < 70; i++) {

            let snowflake: Snow = new Snow();
            objects.push(snowflake);
        }
    }

    function generateBird(): void {
        for (let i: number = 0; i < 15; i++) {

            let bird: Birds = new Birds();
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

    function gameEnds(): void {
        document.getElementsByTagName("canvas")[0].classList.add("invisible");
        document.getElementById("ende").classList.remove("invisible");
        document.getElementById("reload").classList.remove("invisible");
        document.getElementById("yourScore").innerText = "Deine Punktzahl:" + " " + score.toString();
        document.getElementById("reload").addEventListener("click", reload);

        DatabaseClient.insert();
        DatabaseClient.getHighscore();

    }

    function reload(): void {
        window.location.reload();
    }

    function drawScore(): void {
        crc2.beginPath();
        crc2.moveTo(50, 700);
        crc2.lineTo(300, 700);
        crc2.lineTo(300, 770);
        crc2.lineTo(50, 770);
        crc2.closePath();
        crc2.fillStyle = "HSLA(182,25%,50%)";
        crc2.fill();
        crc2.lineWidth = 1.5;
        crc2.strokeStyle = "black";
        crc2.stroke();

        crc2.font = "55px Amatic SC";
        crc2.fillStyle = "#000000";
        crc2.fillText("Score", 85, 750);

        crc2.font = "55px Amatic SC";   
        crc2.fillStyle = "#000000";

        crc2.fillText(score.toString(), 200, 750);



    }

}

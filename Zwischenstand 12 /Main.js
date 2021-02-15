"use strict";
var feuerwerkEndabgabe;
(function (feuerwerkEndabgabe) {
    window.addEventListener("load", handleLoad);
    let serverPage = "https://sarahabschlussarbeit.herokuapp.com/"; //"http://localhost:5001/";
    let form;
    let quantity;
    let color;
    let lifetime;
    let shape;
    let moveables = [];
    let result;
    async function handleLoad(_event) {
        console.log("HalloWelt");
        let response = await fetch(serverPage + "?" + "command=getTitels");
        let listOfTitels = await response.text();
        let titelList = JSON.parse(listOfTitels);
        feuerwerkEndabgabe.generateRocket(titelList);
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        feuerwerkEndabgabe.crc2 = canvas.getContext("2d");
        let saveBtn = document.querySelector("button#saveBtn");
        //let loadBtn: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#loadBtn");
        let inputQuantity = document.querySelector("input#quantity");
        form = document.querySelector("form#controlPanel");
        canvas.addEventListener("click", createObject);
        document.addEventListener("keydown", sarah);
        saveBtn.addEventListener("click", sendDataToServer);
        //loadBtn.addEventListener("click", getDataFromServer);
        inputQuantity.addEventListener("change", hearttMeter);
        window.setInterval(update, 20);
    }
    function createObject(_event) {
        let mousePositionX = _event.clientX; //- crc2.canvas.offsetLeft;
        let mousepositionY = _event.clientY; //- crc2.canvas.offsetTop;
        let formData = new FormData(document.forms[0]);
        for (let entry of formData) {
            quantity = Number(formData.get("quantity"));
            lifetime = Number(formData.get("explosionSize"));
            color = String(formData.get("particlecolor"));
            switch (entry[1]) {
                case "circle":
                    shape = "circle";
                    break;
                case "smiley":
                    shape = "smiley";
                    break;
                case "heart":
                    shape = "heart";
                    break;
                case "hexagon":
                    shape = "hexagon";
                    break;
            }
        }
        createParticle(quantity, mousePositionX, mousepositionY, color, lifetime, shape);
    }
    async function getDataFromServer(_event) {
        console.log("Datein wurden geladen");
        let target = _event.target;
        let userValue;
        userValue = target.value;
        let response = await fetch(serverPage + "?" + "command=getAllDatas");
        let responseContent = await response.text();
        let allDatas = JSON.parse(responseContent);
        result = allDatas.find(item => item.rocketTitel === userValue);
        console.log(result);
        createUserRocket(result);
    }
    feuerwerkEndabgabe.getDataFromServer = getDataFromServer;
    function createUserRocket(_result) {
        let color = _result.particlecolor;
        let lifetime = _result.explosionSize;
        let shape = _result.particleshape;
        let quantity = _result.quantity;
        console.log("Das ist deine Rakete", "Particleshape= ", shape, "Particlecolor= ", color, "ExplosionSize= ", lifetime, "Particleqoantity= ", quantity);
        // erzeugt neuer Particle mit diesen Werten und pusht ihn in moveable Array
        // eine Funktion die z.B. auf MouseUp hört, erzeugt eine Explosion mit diesen Werten
    }
    async function sendDataToServer(_event) {
        let controlPanelData = new FormData(form);
        let textArea = document.querySelector("input#textarea");
        let rocketTitel;
        rocketTitel = textArea.value;
        let query = new URLSearchParams(controlPanelData);
        query.append("rocketTitel", rocketTitel);
        let response = await fetch(serverPage + "?" + query.toString());
        let responseText = await response.text();
        alert("Deine Daten wurden gespeichert");
        console.log("Daten geschickt: ", responseText);
        textArea.value = "";
    }
    function createParticle(_quantity, _mousePositionX, _mousePositionY, _color, _lifetime, _type) {
        let origin = new feuerwerkEndabgabe.Vector(_mousePositionX, _mousePositionY);
        let color = _color;
        for (let i = 0; i < _quantity; i++) {
            let radian = (Math.PI * 2) / _quantity;
            let px = Math.sin(radian * i) * 110 * Math.random() * 6; // 6 steht für Power
            let py = Math.cos(radian * i) * 110 * Math.random() * 6; // 6 steht für Power
            let velocity = new feuerwerkEndabgabe.Vector(px, py);
            let particle = new feuerwerkEndabgabe.Particle(origin, velocity, color, lifetime, shape);
            moveables.push(particle);
        }
    }
    /*
 
     function createParticle(_quantity: number, _mousePositionX: number, _mousePositionY: number, _color: string, _lifetime: number, _type: string): void {
   
         let origin: Vector = new Vector(_mousePositionX, _mousePositionY);
         let color: string = _color;
     
         for (let i: number = 0; i < _quantity; i++) {
           let radian: number = (Math.PI * 2) / _quantity;
           let px: number = Math.cos(radian * i) * 50 * Math.random() * 6; // 6 steht für Power
           let py: number = Math.cos(radian * i) * 1 * Math.random() * 6; // 6 steht für Power
           let velocity: Vector = new Vector(px, py);
           let particle: MoveableObject = new Particle(origin, velocity, color, lifetime, shape);
           moveables.push(particle);
     
         }
       }
 /*
     function createParticle(_quantity: number, _mousePositionX: number, _mousePositionY: number, _color: string, _lifetime: number, _type: string): void {
   
         let origin: Vector = new Vector(_mousePositionX, _mousePositionY);
         let color: string = _color;
     
         for (let i: number = 0; i < _quantity; i++) {
           let radian: number = (Math.PI * 2) / _quantity;
           let px: number = Math.sin(radian * i) * 1 * Math.random() * 6; // 6 steht für Power
           let py: number = Math.sin(radian * i) * 5 * Math.random() * 6; // 6 steht für Power
           let velocity: Vector = new Vector(px, py);
           let particle: MoveableObject = new Particle(origin, velocity, color, lifetime, shape);
           moveables.push(particle);
     
         }
       }
   */
    function update() {
        feuerwerkEndabgabe.crc2.fillStyle = "rgba(0,0,0,0.2)";
        feuerwerkEndabgabe.crc2.fillRect(0, 0, feuerwerkEndabgabe.crc2.canvas.width, feuerwerkEndabgabe.crc2.canvas.height);
        for (let moveable of moveables) {
            moveable.move(1 / 50);
            moveable.draw();
        }
        deleteExpandables();
    }
    function deleteExpandables() {
        for (let index = moveables.length - 1; index >= 0; index--) {
            if (moveables[index].expendable) //im Array an stelle des gerade befindenden Index
                moveables.splice(index, 1);
        }
    }
    function sarah(_event) {
        console.log(_event);
    }
    function hearttMeter(_event) {
        let target = _event.target;
        let meter = document.querySelector("meter");
        meter.value = parseFloat(target.value);
    }
})(feuerwerkEndabgabe || (feuerwerkEndabgabe = {}));
//# sourceMappingURL=Main.js.map
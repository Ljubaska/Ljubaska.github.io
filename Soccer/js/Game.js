"use strict";
var Soccer;
(function (Soccer) {
    class Game {
        constructor(canvasId, controlId, canvasWidth, canvasHeight, settings) {
            this.participants = [];
            this.scoreTeam1 = 0;
            this.scoreTeam2 = 0;
            this.ctx = null;
            this.pause = false;
            this.ball = null;
            this.globalSpeed = 0.3;
            this.clickMode = false;
            this.hasBall = null;
            this.lastTouch = null;
            this.selectedPlayer = null;
            this.newPlayerFor = null;
            console.log("Loading game...");
            this.fieldWidth = canvasWidth;
            this.fieldHeight = canvasHeight;
            this.settings = settings;
            this.team1 = new Soccer.Team(this.settings.teamName1, Game.getHexColorFromPreset(this.settings.colorTeam1));
            this.team2 = new Soccer.Team(this.settings.teamName2, Game.getHexColorFromPreset(this.settings.colorTeam2));
            this.initCanvas(canvasId);
            this.initField();
            this.initParticipants();
            this.initBall();
            this.setupControls();
            console.log(this.participants);
            console.log("Loading game finished!");
            console.log("Start rendering..");
            this.render();
        }
        static getNormDirVector(vec1, vec2) {
            let directionX = vec2[0] - vec1[0];
            let directionY = vec2[1] - vec1[1];
            let length = Math.sqrt((directionX * directionX) + (directionY * directionY));
            let addDirX = directionX / length;
            let addDirY = directionY / length;
            return [addDirX, addDirY];
        }
        static getDistance(vec1, vec2) {
            return Math.sqrt(Math.pow(vec2[0] - vec1[0], 2) + Math.pow(vec2[1] - vec1[1], 2));
        }
        static getRandomDir() {
            let firstMult = Math.random() < 0.6 ? -1 : 1;
            let secondMult = Math.random() < 0.6 ? -1 : 1;
            return [Math.random() * firstMult, Math.random() * secondMult];
        }
        static getHexColorFromPreset(preset) {
            switch (preset) {
                case "red":
                    return "#ff0000";
                case "yellow":
                    return "#fcff33";
                case "pink":
                    return "#ff33ff";
                case "green":
                    return "#0BC61F";
                case "blue":
                    return "#0000ff";
                case "grey":
                    return "#C3CBC4";
                case "brown":
                    return "#E19646";
                default:
                    return "#444444";
            }
        }
        setHasBall(player) {
            this.hasBall = player;
            if (player) {
                this.lastTouch = player;
            }
        }
        selectPlayer(player) {
            this.selectedPlayer = player;
        }
        setupControls() {
            const controlDiv = document.getElementById("controls");
            controlDiv.innerHTML = "";
            if (!controlDiv) {
                throw new Error("controls not found");
            }
            let pauseButton = document.createElement("button");
            pauseButton.innerText = this.pause ? "Unpause" : "Pause";
            pauseButton.setAttribute('id', 'pauseButton');
            pauseButton.addEventListener("click", this.togglePause.bind(this));
            controlDiv.appendChild(pauseButton);
            let resetButton = document.createElement("button");
            resetButton.innerText = "Reset Ball";
            resetButton.setAttribute('id', 'resetBallButton');
            resetButton.addEventListener("click", this.resetBall.bind(this));
            controlDiv.appendChild(resetButton);
            let replaceButton = document.createElement("button");
            replaceButton.innerText = `Selektierten Spieler rausnehmen`;
            replaceButton.addEventListener('click', () => {
                this.removePlayer(this.selectedPlayer);
            });
            controlDiv.appendChild(replaceButton);
            let addPlayerTeam1 = document.createElement("button");
            addPlayerTeam1.innerText = `Neuen Spieler für ${this.team1.name} einwechseln`;
            addPlayerTeam1.addEventListener('click', () => {
                this.addPlayer(this.team1);
            });
            controlDiv.appendChild(addPlayerTeam1);
            let addPlayerTeam2 = document.createElement("button");
            addPlayerTeam2.innerText = `Neuen Spieler für ${this.team2.name} einwechseln`;
            addPlayerTeam2.addEventListener('click', () => {
                this.addPlayer(this.team2);
            });
            controlDiv.appendChild(addPlayerTeam2);
        }
        addPlayer(team) {
            let teamCount = this.countTeamPlayers(team);
            if (teamCount >= 11) {
                alert("Das Team hat bereits 11 oder mehr Spieler auf dem Feld, du kannst keinen zusätzlichen Spieler mehr einwechseln.");
                return;
            }
            this.newPlayerFor = team;
        }
        resetBall() {
            this.ball.dir = null;
            this.ball.setPos(this.fieldWidth / 2, this.fieldHeight / 2);
        }
        togglePause() {
            this.pause = !this.pause;
            let btn = document.getElementById('pauseButton');
            btn.innerText = this.pause ? "Unpause" : "Pause";
        }
        initBall() {
            this.ball = new Soccer.Ball(this.fieldWidth / 2, this.fieldHeight / 2, this.fieldWidth, this.fieldHeight);
        }
        render() {
            this.ctx.clearRect(0, 0, this.fieldWidth, this.fieldHeight);
            this.initField();
            if (!this.pause) {
                this.checkBallCollision();
            }
            this.renderGameInfo();
            this.moveBall();
            this.moveParticipants();
            window.requestAnimationFrame(this.render.bind(this));
        }
        renderGameInfo() {
            const gameInfo = document.getElementById("gameInfo");
            gameInfo.innerHTML = '';
            this.renderScore(gameInfo);
            this.renderHasBall(gameInfo);
            this.renderSelectedPlayer(gameInfo);
        }
        renderSelectedPlayer(elem) {
            let fieldset = document.createElement("fieldset");
            let legend = document.createElement("legend");
            legend.innerText = "Ausgewählter Spieler";
            fieldset.appendChild(legend);
            if (this.selectedPlayer) {
                let list = document.createElement("ul");
                let itemNumber = document.createElement("li");
                let itemTeam = document.createElement("li");
                let itemPrecision = document.createElement("li");
                let itemSpeed = document.createElement("li");
                let itemInitPos = document.createElement("li");
                itemNumber.innerText = `Rückennummer: ${this.selectedPlayer.backNumber}`;
                itemTeam.innerText = `Team: ${this.selectedPlayer.team.name}`;
                itemPrecision.innerText = `Präzision: ${this.selectedPlayer.precision}`;
                itemSpeed.innerText = `Geschwindigkeit: ${this.selectedPlayer.speed}`;
                itemInitPos.innerText = `Initialposition: ${this.selectedPlayer.initX.toPrecision(3)} ${this.selectedPlayer.initY.toPrecision(3)}`;
                list.appendChild(itemNumber);
                list.appendChild(itemTeam);
                list.appendChild(itemPrecision);
                list.appendChild(itemSpeed);
                list.appendChild(itemInitPos);
                fieldset.appendChild(list);
            }
            elem.appendChild(fieldset);
        }
        removePlayer(player) {
            if (!player) {
                return;
            }
            let found = null;
            for (let partIdx in this.participants) {
                let part = this.participants[partIdx];
                if (!(part instanceof Soccer.Player)) {
                    continue;
                }
                if (part.backNumber === player.backNumber && part.team.name === player.team.name) {
                    found = partIdx;
                    //stop loop when player was found
                    break;
                }
            }
            //no player found after loop, do nothing
            if (found === null) {
                return;
            }
            this.selectedPlayer = null;
            //remove found index from array
            this.participants.splice(found, 1);
        }
        countTeamPlayers(team) {
            let count = 0;
            for (let part of this.participants) {
                if (part instanceof Soccer.Player) {
                    if (part.team.name === team.name) {
                        count++;
                    }
                }
            }
            return count;
        }
        renderScore(elem) {
            let div = document.createElement("div");
            let h1 = document.createElement("h1");
            let team1Count = this.countTeamPlayers(this.team1);
            let team2Count = this.countTeamPlayers(this.team2);
            h1.innerHTML = `(${team1Count} Spieler) ${this.team1.name} <b>${this.scoreTeam1}</b> : <b>${this.scoreTeam2}</b> ${this.team2.name} (${team2Count} Spieler)`;
            div.appendChild(h1);
            elem.appendChild(div);
        }
        renderHasBall(elem) {
            let fieldset = document.createElement("fieldset");
            let legend = document.createElement("legend");
            legend.innerText = "Ballbesitz";
            fieldset.appendChild(legend);
            if (this.hasBall) {
                let list = document.createElement("ul");
                let itemNumber = document.createElement("li");
                let itemTeam = document.createElement("li");
                let itemPrecision = document.createElement("li");
                let itemSpeed = document.createElement("li");
                let itemInitPos = document.createElement("li");
                itemNumber.innerText = `Rückennummer: ${this.hasBall.backNumber}`;
                itemTeam.innerText = `Team: ${this.hasBall.team.name}`;
                itemPrecision.innerText = `Präzision: ${this.hasBall.precision}`;
                itemSpeed.innerText = `Geschwindigkeit: ${this.hasBall.speed}`;
                itemInitPos.innerText = `Initialposition: ${this.hasBall.initX.toPrecision(3)} ${this.hasBall.initY.toPrecision(3)}`;
                list.appendChild(itemNumber);
                list.appendChild(itemTeam);
                list.appendChild(itemPrecision);
                list.appendChild(itemSpeed);
                list.appendChild(itemInitPos);
                fieldset.appendChild(list);
            }
            elem.appendChild(fieldset);
        }
        moveBall() {
            if (!this.pause) {
                this.ball.move();
            }
            this.drawBall();
        }
        drawBall() {
            this.ctx.beginPath();
            this.ctx.strokeStyle = "#000000";
            this.ctx.lineWidth = 1;
            this.ctx.arc(this.ball.x, this.ball.y, 10, 0, 360);
            this.ctx.fillStyle = "#000000";
            this.ctx.fill();
            this.ctx.stroke();
            this.ctx.closePath();
        }
        moveParticipants() {
            //MOVE ALL PARTICIPANTS
            //if game paused, just display them
            for (let participant of this.participants) {
                if (!this.pause) {
                    this.moveParticipant(participant);
                }
                this.drawParticipant(participant);
            }
        }
        movePlayer(player) {
            let playVec = [player.x, player.y];
            let ballVec = [this.ball.x, this.ball.y];
            let initVec = [player.initX, player.initY];
            //60 because 30 is too close
            if (Game.getDistance(playVec, ballVec) > DEFAULT_PLAYER_VISION_RANGE && Game.getDistance(playVec, initVec) > 1) {
                //run to initial position when ball is too far away and player is far from initial position
                let [addDirX, addDirY] = Game.getNormDirVector(playVec, initVec);
                player.addPos(addDirX * player.speed * this.globalSpeed, addDirY * player.speed * this.globalSpeed);
            }
            else if (Game.getDistance(playVec, ballVec) <= DEFAULT_PLAYER_VISION_RANGE) {
                //run to ball if ball is in range
                let [addDirX, addDirY] = Game.getNormDirVector(playVec, ballVec);
                player.addPos(addDirX * player.speed * this.globalSpeed, addDirY * player.speed * this.globalSpeed);
            }
        }
        moveReferee(ref) {
            let randomDir = Game.getRandomDir();
            let newX = ref.x + randomDir[0] * ref.speed;
            let newY = ref.y + randomDir[1] * ref.speed;
            while (newX > this.fieldWidth || newY > this.fieldHeight) {
                randomDir = Game.getRandomDir();
                newX = ref.x + randomDir[0] * ref.speed;
                newY = ref.y + randomDir[1] * ref.speed;
            }
            ref.addPos(randomDir[0] * ref.speed, randomDir[1] * ref.speed);
        }
        moveSideReferee(sideRef) {
            if (this.ball.x > sideRef.x) {
                sideRef.addPos(sideRef.speed, 0);
            }
            else {
                sideRef.addPos(-sideRef.speed, 0);
            }
        }
        moveParticipant(part) {
            if (part instanceof Soccer.Player) {
                this.movePlayer(part);
            }
            if (part instanceof Soccer.Referee) {
                this.moveReferee(part);
            }
            if (part instanceof Soccer.SideReferee) {
                this.moveSideReferee(part);
            }
        }
        drawParticipant(part) {
            if (part instanceof Soccer.Player) {
                this.drawPlayer(part);
            }
            if (part instanceof Soccer.Referee || part instanceof Soccer.SideReferee) {
                this.drawReferee(part);
            }
        }
        drawPlayer(player) {
            this.ctx.beginPath();
            this.ctx.strokeStyle = "#000000";
            this.ctx.lineWidth = 1;
            this.ctx.arc(player.x, player.y, 10, 0, 360);
            this.ctx.fillStyle = player.team.color;
            this.ctx.fill();
            this.ctx.stroke();
            this.ctx.font = "14pt Courier";
            this.ctx.fillStyle = "black";
            this.ctx.textAlign = "center";
            this.ctx.fillText(player.backNumber.toString(), player.x, player.y + 5);
            this.ctx.closePath();
        }
        drawReferee(ref) {
            this.ctx.beginPath();
            this.ctx.strokeStyle = "#000000";
            this.ctx.lineWidth = 1;
            this.ctx.arc(ref.x, ref.y, 10, 0, 360);
            this.ctx.fillStyle = ref.color;
            this.ctx.fill();
            this.ctx.stroke();
            this.ctx.font = "13pt Courier";
            this.ctx.fillStyle = "white";
            this.ctx.textAlign = "center";
            this.ctx.fillText("R", ref.x, ref.y + 5);
            this.ctx.closePath();
        }
        checkBallCollision() {
            if (this.ball.collisionImmune) {
                return;
            }
            //check if ball collides with left goal
            if (this.ball.x <= MINIMUM_WALL_DISTANCE + 2 && this.ball.y >= this.fieldHeight / 2.3 && this.ball.y <= this.fieldHeight / 2.3 + 90) {
                console.log("GOAL LEFT!");
                this.scoreTeam2++;
                this.resetBall();
                return;
            }
            //check if ball collides with right goal
            if (this.ball.x >= this.fieldWidth - MINIMUM_WALL_DISTANCE - 2 && this.ball.y >= this.fieldHeight / 2.3 && this.ball.y <= this.fieldHeight / 2.3 + 90) {
                console.log("GOAL RIGHT!");
                this.scoreTeam1++;
                this.resetBall();
                return;
            }
            //check if ball collides with players after
            for (let part of this.participants) {
                if (!(part instanceof Soccer.Player)) {
                    continue;
                }
                let dist = Game.getDistance([part.x, part.y], [this.ball.x, this.ball.y]);
                //console.log(part.backNumber, dist);
                if (dist <= 3) {
                    console.log(part.backNumber, 'HIT THE BALL!', this.ball.x, this.ball.y);
                    this.startClickMode();
                    this.togglePause();
                    this.setHasBall(part);
                    return;
                }
            }
        }
        startClickMode() {
            this.clickMode = true;
        }
        shootBall(evt) {
            if (!this.clickMode) {
                return;
            }
            let precisionMulti = 1 - (this.hasBall.precision / this.settings.maxPrecision);
            let offset = MAX_PRECISION_OFFSET - MAX_PRECISION_OFFSET * precisionMulti;
            let dir = Game.getNormDirVector([this.ball.x, this.ball.y], [evt.offsetX + offset, evt.offsetY - offset]);
            this.ball.setDir(dir);
            this.clickMode = false;
            this.pause = false;
            this.setHasBall(null);
        }
        initCanvas(id) {
            let canvas = document.getElementById(id);
            canvas.addEventListener('click', this.shootBall.bind(this));
            canvas.addEventListener('contextmenu', this.selectPlayerClick.bind(this));
            this.ctx = canvas.getContext("2d");
            if (!this.ctx) {
                throw new Error("canvas not found");
            }
        }
        selectPlayerClick(evt) {
            //prevent opening of contextmenu
            evt.preventDefault();
            let vec2 = [evt.offsetX, evt.offsetY];
            //if this.newPlayerFor is set, then add a player with a click, not select one
            if (this.newPlayerFor) {
                //get random back number
                let newNr = Math.floor(Math.random() * 99) + 1;
                this.participants.push(new Soccer.Player(vec2[0], vec2[1], this.newPlayerFor, this.getRandomSpeed(), this.getRandomPrecision(), newNr, this.fieldWidth, this.fieldHeight));
                this.newPlayerFor = null;
            }
            //otherwise select a player
            else {
                //get player closest to cursor
                for (let part of this.participants) {
                    if (part instanceof Soccer.Player) {
                        let playerVec = [part.x, part.y];
                        let dist = Game.getDistance(vec2, playerVec);
                        if (dist <= 12) {
                            this.selectPlayer(part);
                            return;
                        }
                    }
                }
                this.selectPlayer(null);
            }
        }
        initField() {
            //make field green
            this.ctx.fillStyle = "#00fa00";
            this.ctx.fillRect(0, 0, this.fieldWidth, this.fieldHeight);
            //add middle line
            this.ctx.beginPath();
            this.ctx.moveTo(this.fieldWidth / 2, 0);
            this.ctx.lineTo(this.fieldWidth / 2, this.fieldHeight);
            this.ctx.lineWidth = 5;
            this.ctx.strokeStyle = "#ffffff";
            this.ctx.closePath();
            this.ctx.stroke();
            //adding middle point
            this.ctx.beginPath();
            this.ctx.arc(this.fieldWidth / 2, this.fieldHeight / 2, 3, 0, 360);
            this.ctx.stroke();
            this.ctx.closePath();
            //adding middle circle
            this.ctx.beginPath();
            this.ctx.arc(this.fieldWidth / 2, this.fieldHeight / 2, 120, 0, 360);
            this.ctx.stroke();
            this.ctx.closePath();
            //adding left 16m room
            this.ctx.beginPath();
            this.ctx.rect(0, this.fieldHeight / 3.5, 200, 300);
            this.ctx.stroke();
            this.ctx.closePath();
            //adding right 16m room
            this.ctx.beginPath();
            this.ctx.rect(this.fieldWidth - 200, this.fieldHeight / 3.5, 200, 300);
            this.ctx.stroke();
            this.ctx.closePath();
            //add left goal
            this.ctx.beginPath();
            this.ctx.rect(0, this.fieldHeight / 2.3, 30, 90);
            this.ctx.stroke();
            this.ctx.closePath();
            //add right goal
            this.ctx.beginPath();
            this.ctx.rect(this.fieldWidth - 30, this.fieldHeight / 2.3, 30, 90);
            this.ctx.stroke();
            this.ctx.closePath();
            //adding left penalty point
            this.ctx.beginPath();
            this.ctx.arc(this.fieldWidth / 10, this.fieldHeight / 2, 3, 0, 360);
            this.ctx.stroke();
            this.ctx.closePath();
            //adding right penalty point
            this.ctx.beginPath();
            this.ctx.arc(this.fieldWidth - this.fieldWidth / 10, this.fieldHeight / 2, 3, 0, 360);
            this.ctx.stroke();
            this.ctx.closePath();
            //adding left upper corner arc
            this.ctx.beginPath();
            this.ctx.arc(0, 0, 12, 90, 180);
            this.ctx.stroke();
            this.ctx.closePath();
            //adding left downside corner arc
            this.ctx.beginPath();
            this.ctx.arc(0, this.fieldHeight, 12, 0, 90);
            this.ctx.stroke();
            this.ctx.closePath();
            //adding right upper corner arc
            this.ctx.beginPath();
            this.ctx.arc(this.fieldWidth, 0, 12, 180, 270);
            this.ctx.stroke();
            this.ctx.closePath();
            //adding right downside corner arc
            this.ctx.beginPath();
            this.ctx.arc(this.fieldWidth, this.fieldHeight, 12, 270, 360);
            this.ctx.stroke();
            this.ctx.closePath();
        }
        getRandomFieldPosition() {
            let x = Math.floor(Math.random() * this.fieldWidth);
            let y = Math.floor(Math.random() * this.fieldHeight);
            return [x, y];
        }
        getRandomSpeed() {
            return Math.floor(Math.random() * (this.settings.maxSpeed - this.settings.minSpeed) +
                this.settings.minSpeed);
        }
        getRandomPrecision() {
            return Math.floor(Math.random() *
                (this.settings.maxPrecision - this.settings.minPrecision) +
                this.settings.minPrecision);
        }
        initParticipants() {
            //create first team
            //spawn first player near kick off
            this.participants.push(new Soccer.Player(this.fieldWidth / 2 + 2, this.fieldHeight / 2 + 1, this.team1, this.getRandomSpeed(), this.getRandomPrecision(), 13, this.fieldWidth, this.fieldHeight));
            for (let i = 0; i < 10; i++) {
                let pos = this.getRandomFieldPosition();
                this.participants.push(new Soccer.Player(pos[0], pos[1], this.team1, this.getRandomSpeed(), this.getRandomPrecision(), i + 1, this.fieldWidth, this.fieldHeight));
            }
            //create second team
            for (let i = 0; i < 11; i++) {
                let pos = this.getRandomFieldPosition();
                this.participants.push(new Soccer.Player(pos[0], pos[1], this.team2, this.getRandomSpeed(), this.getRandomPrecision(), i, this.fieldWidth, this.fieldHeight));
            }
            //create referee
            let refPos = this.getRandomFieldPosition();
            this.participants.push(new Soccer.Referee(refPos[0], refPos[1], this.fieldWidth, this.fieldHeight));
            //create side referee top
            let sideTopPos = this.getRandomFieldPosition();
            this.participants.push(new Soccer.SideReferee(sideTopPos[0], 2, this.fieldWidth, this.fieldHeight));
            //create side referee top
            let sideBottomPos = this.getRandomFieldPosition();
            this.participants.push(new Soccer.SideReferee(sideBottomPos[0], this.fieldHeight - 2, this.fieldWidth, this.fieldHeight));
        }
    }
    Soccer.Game = Game;
})(Soccer || (Soccer = {}));
//# sourceMappingURL=Game.js.map
//ball speed
const DEFAULT_BALL_SPEED = 8;
//250 because 30 seems to be too low
const DEFAULT_PLAYER_VISION_RANGE = 250;
//ball immunity after someone kicks it
const BALL_IMMUNE_TIME_IN_MS = 30;
//maximum offset a bad precision can give
const MAX_PRECISION_OFFSET = 50;
//linear ball speed reduce per tick
const BALL_SPEED_REDUCE = 0.07;
//the closest a participant can be from wall
const MINIMUM_WALL_DISTANCE = 10;

const formSettings = document.getElementById("formSettings") as HTMLFormElement;

formSettings.addEventListener("submit", startGame);

function startGame(evt: Event) {
    evt.preventDefault();
    let form = evt.target as HTMLFormElement;
    let formData = new FormData(form);
    let settings: Soccer.Settings = {
        teamName1: formData.get("teamName1").toString().trim(),
        teamName2: formData.get("teamName2").toString().trim(),
        minSpeed: Number(formData.get("minSpeed").toString().trim()),
        maxSpeed: Number(formData.get("maxSpeed").toString().trim()),
        minPrecision: Number(formData.get("minPrecision").toString().trim()),
        maxPrecision: Number(formData.get("maxPrecision").toString().trim()),
        colorTeam1: formData.get("colorTeam1").toString().trim(),
        colorTeam2: formData.get("colorTeam2").toString().trim(),
    };
    new Soccer.Game("field", "controls", 1200, 700, settings);
}

//new Game('1. FC Köln', 'SV Werder Bremen', 'field');












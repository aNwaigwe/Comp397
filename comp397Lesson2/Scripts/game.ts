 



Class Player {
    strenghth: number;
    constructor() {
        this.strenght = 10;
    }

    fights() {
        console.log("He Fights");
    }

 }

var stage: createjs.Stage;
var canvas;
var helloText;
function init() {

    canvas = document.getElementById("canvas");
    stage = Createjs.Stage();
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", gameloop);

     var tom = Player();
    tom.fights();


}

function gameLoop() {
    helloText.y += 1;
    helloText.rotation =+=1;
    stage.update();
}

funtion main() {
    var helloText = new createjs.Text("Hello world", "40px", "#ffff00");
    stage.addChild
}
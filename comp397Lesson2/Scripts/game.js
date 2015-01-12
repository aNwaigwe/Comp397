/// <reference path="lib/easeljs.d.ts" />
var stage;
var canvas;
var helloText;
function init() {
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", gameLoop);
    main();
}

function gameLoop() {
    helloText.y += 1;
    helloText.rotation += 1;
    stage.update();
}

function main() {
    helloText = new createjs.Text("Hello world", "40px consolas", "#000000");
    stage.addChild(helloText);
    helloText.x = 100;
}
//# sourceMappingURL=game.js.map

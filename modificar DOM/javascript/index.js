var boxesColors = ["red", "gold", "porple", "blu"];
var aleatoryNumber = Math.round(Math.random() * 2);
var aleatoryColor = boxesColors[aleatoryNumber];
var boxes = document.getElementsByClassName('box');

var box = boxes[0];
box.onclick = changeBoxColor;



function changeBoxColor(e) {
    var box = e.target;
    box.className = box.className.replace("blu", "");
    box.className = box.className + aleatoryColor;
}

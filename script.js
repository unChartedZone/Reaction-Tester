var randomShape = document.getElementById("randomShape");
var timer = document.getElementById("timer");
randomShape.style.position = "relative";
var counter = 0;

function createShape() {
    randomShape.style.visibility = "visible";
    var indicator = oneOrZero();
    if (indicator === 0) {
        createBox();
        return;
    }
    if (indicator === 1) {
        createCircle();
    }
}
 
function oneOrZero() {
    var indicator = Math.floor(Math.random() * 2);
    return indicator;
}

function createBox() {
    var num1 = randomDimension();
    var num2 = randomDimension();
    randomShape.style.width = num1.toString() + "px";
    randomShape.style.height = num2.toString() + "px";
    randomShape.style.backgroundColor = randomColor();
    randomShape.style.borderRadius = "0";
    randomPositions();
    // console.log("A box was made");
}

function createCircle() {
    var num = randomDimension();
    randomShape.style.width = num.toString() + "px";
    randomShape.style.height = num.toString() + "px";
    randomShape.style.borderRadius = "50%";
    randomShape.style.backgroundColor = randomColor();
    randomPositions();
    // console.log("A circle was made");
}

function randomDimension() {
    var num = (Math.floor(Math.random() * 3) + 1) * 100;
    return num;
}

function randomColor() {
    var digits = "0123456789ABCDEF";
    var color = "#";
    for(var i = 0; i < 6; i++) {
        color += digits[Math.floor(Math.random() * 16)];
    }
    return color;
}

function randomPositions() {
    var left = Math.floor(Math.random() * 9) * 100;
    var upper = Math.floor(Math.random() * 3) * 100;
    randomShape.style.left = left.toString() + "px";
    randomShape.style.top = upper.toString() + "px";
}

function startTimer() {
    var time = 0;

}

document.getElementById("startButton").onclick = function () {
    createShape();
};

document.getElementById("stopButton").onclick = function () {
    randomShape.style.visibility = "hidden";
};

randomShape.onclick = function () {
    randomShape.style.visibility = "hidden";
    console.log("It disappeared!");
    createShape();
};


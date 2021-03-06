var randomShape = document.getElementById("randomShape");
document.getElementById("startButton").addEventListener("click",start);
document.getElementById("stopButton").addEventListener("click",stop);
randomShape.style.position = "relative";
var startPressed = false;

//Time vaiables
var timer = new Date().getTime(); //Handles date method
var timeElement = document.getElementById("time");
var zeroTime = timeElement.innerHTML;

function createShape() {
    randomShape.style.visibility = "visible";
    var indicator = oneOrZero();
    if (indicator === 0) {
        createBox();
        // return;
    }
    if (indicator === 1) {
        createCircle();
    }
    startTimer();
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

function start() {
    if(randomShape.style.visibilty === "hidden") {
        randomShape.style.visibilty = "visible";
    }
    if(startPressed) {
        return;
    }
    startPressed = true;
    createShape();
}

function stop() {
    randomShape.style.visibility = "hidden";
    timeElement.innerHTML = zeroTime;
    startPressed = false;
}

randomShape.onclick = function () {
    randomShape.style.visibility = "hidden";
    var end = new Date().getTime();
    var timeTaken = (end - timer) / 1000; //Get time it took in formatted milliseconds
    timeElement.innerHTML = timeTaken.toString();
    setTimeout("createShape()",1000);
};

function startTimer() {
    timer = new Date().getTime();
}


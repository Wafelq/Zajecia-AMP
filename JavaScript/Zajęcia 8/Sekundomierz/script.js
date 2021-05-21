var time = 0;
var timeCounter = 0;

function start() {
    if (timeCounter === 0) {
        time = Number(document.getElementById("time").value);
        document.getElementById("clock").innerHTML = time;
        timeCounter = setInterval(cycle, 1000);
    }
}

var cycle = function () {
    time--;
    document.getElementById("clock").innerHTML = time;

    if (time <= 0) {
        // Stopowwanie interwału
        clearInterval(timeCounter);
        timeCounter = 0;
    }
}
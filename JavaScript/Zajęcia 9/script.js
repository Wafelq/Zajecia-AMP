function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var number = getRandom(3, 5);

console.log(number);


function add() {
    var number1 = document.getElementById("number1").value;

    var number2 = document.getElementById("number2").value;

    var result = Number(number1) + Number(number2);

    document.getElementById("result").value = result;
}

function substract() {
    var number1 = document.getElementById("number1").value;

    var number2 = document.getElementById("number2").value;

    var result = Number(number1) - Number(number2);

    document.getElementById("result").value = result;
}

function multiply() {
    var number1 = document.getElementById("number1").value;

    var number2 = document.getElementById("number2").value;

    var result = Number(number1) * Number(number2);

    document.getElementById("result").value = result;
}

function divide() {
    var number1 = document.getElementById("number1").value;

    var number2 = document.getElementById("number2").value;

    var result = Number(number1) / Number(number2);

    if(number1 == 0){
        alert("PAMIĘTAJ CHOLERO, NIGDY NIE DZIEL PRZEZ ZERO!")
    }

    if(number2 == 0){
        alert("PAMIĘTAJ CHOLERO, NIGDY NIE DZIEL PRZEZ ZERO!")
    }

    document.getElementById("result").value = result;
}

function changeText() {
    //innerHTML zmienia wnętrze elementu
    //document.getElementById("text").innerHTML = "text po zmianie";

    var name = document.getElementById("name").value;
    var sname = document.getElementById("sname").value;
    var age = document.getElementById("age").value;    

    var textBefore = "Witaj, jak się nazywasz?";
    var textAfter = "Witaj " + name + " " + sname + ". Masz " + age + " lat!";
    var currentText = document.getElementById("text").innerHTML;

    if (currentText === textBefore) {
        document.getElementById("text").innerHTML = textAfter;
    } else {
        document.getElementById("text").innerHTML = textBefore;
    }
}

    


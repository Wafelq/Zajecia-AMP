function changeText() {
    //innerHTML zmienia wnętrze elementu
    //document.getElementById("text").innerHTML = "text po zmianie";

    var textBefore = "tekst przed zmianą";
    var textAfter = "tekst po zmianie";
    var currentText = document.getElementById("text").innerHTML;

    if (currentText === textBefore) {
        document.getElementById("text").innerHTML = textAfter;
    } else {
        document.getElementById("text").innerHTML = textBefore;
    }
}
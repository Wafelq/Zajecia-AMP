// function pageLoaded() {
//     setTimeout(helloWorld, 3000);

//     // Ten kod wykona się przed funkcją helloorld.
//     // Co pokazuje że setTimeout nie zatrzymuje,
//     // dalszego działania aplikacji
//     document.getElementById("text").innerHTML = "Test";
// }


// // Definicja funkcji z przypisaniem jej do zmiennej
// var helloWorld = function () {
//     alert("hello, world");
// }

function pageLoaded() {
    setInterval(helloWorld, 100);
}

var helloWorld = function () {
    document.getElementById("list").innerHTML += "<li>Hello World!</li>";
}
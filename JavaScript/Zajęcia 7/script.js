//Deklaracja tablicy

var fruits = ["Jabłko", "Gruszka", "Śliwka", "Banan", "Kiwi", "Pomarańcza", "Truskawka"];

// alert(fruits[5]);

//Deklaracja pętli for
// for (var i = 0; i < fruits.length; i++) {
//     alert(fruits[i]);
// }

function displayFruits() {
    document.getElementById("vegeList").innerHTML = "";
    
    for (var i = 0; i < fruits.length; i++) {
        document.getElementById("vegeList").innerHTML += `<li>${fruits[i]}</li>`;
    }  
}
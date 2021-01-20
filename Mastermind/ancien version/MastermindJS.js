var baliseSelectRed = document.getElementById("select-red");
var baliseSelectYellow = document.getElementById("select-yellow");
var baliseSelectGreen = document.getElementById("select-green");
var baliseSelectBlue = document.getElementById("select-blue");
var baliseSelectBlack = document.getElementById("select-black");
var baliseSelectPurple = document.getElementById("select-purple");
var baliseSelectColorOne = document.getElementById("select-color-one");
var baliseSelectColorTwo = document.getElementById("select-color-two");
var baliseSelectColorThree = document.getElementById("select-color-three");
var baliseSelectColorFour = document.getElementById("select-color-four");

baliseSelectColorOne.addEventListener("click", function () {
    selectionDeCouleur(baliseSelectColorOne);
});
baliseSelectColorTwo.addEventListener("click", function () {
    selectionDeCouleur(baliseSelectColorOne);
});
baliseSelectColorThree.addEventListener("click", function () {
    selectionDeCouleur(baliseSelectColorThree);
});
baliseSelectColorFour.addEventListener("click", function () {
    selectionDeCouleur(baliseSelectColorFour);
});


function selectionDeCouleur(s) {
    baliseSelectRed.addEventListener("click", function (e) {
        s.removeAttribute('class');
        s.classList.add("red-token");
        console.log(s);
    });
    baliseSelectYellow.addEventListener("click", function (e) {
        s.removeAttribute('class');
        s.classList.add("yellow-token");
        console.log(s);
    });
    baliseSelectGreen.addEventListener("click", function (e) {
        s.removeAttribute('class');
        s.classList.add("green-token");
        console.log(s);
    });
    baliseSelectBlue.addEventListener("click", function (e) {
        s.removeAttribute('class');
        s.classList.add("blue-token");
        console.log(s);
    });
    baliseSelectBlack.addEventListener("click", function (e) {
        s.removeAttribute('class');
        s.classList.add("black-token");
        console.log(s);
    });
    baliseSelectPurple.addEventListener("click", function (e) {
        s.removeAttribute('class');
        s.classList.add("purple-token");
        console.log(s);
    });
}

/**function colorOne() {
    selectionDeCouleur(baliseSelectColorOne);
}

function colorTwo() {
    selectionDeCouleur(baliseSelectColorTwo);
}

function colorThree() {
    selectionDeCouleur(baliseSelectColorThree);
}

function colorFour() {
    selectionDeCouleur(baliseSelectColorFour);
}*/

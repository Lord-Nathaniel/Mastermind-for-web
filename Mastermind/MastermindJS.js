//Jetons de sélection
var baliseSelectRed = document.getElementById("select-red");
var baliseSelectYellow = document.getElementById("select-yellow");
var baliseSelectGreen = document.getElementById("select-green");
var baliseSelectBlue = document.getElementById("select-blue");
var baliseSelectBlack = document.getElementById("select-black");
var baliseSelectPurple = document.getElementById("select-purple");
//Jetons sélectionnés
var baliseSelectColorOne = document.getElementById("select-color-one");
var baliseSelectColorTwo = document.getElementById("select-color-two");
var baliseSelectColorThree = document.getElementById("select-color-three");
var baliseSelectColorFour = document.getElementById("select-color-four");
//Emplacement de la fleche de selection
var balisePositionOne = document.getElementById("position-one")
var balisePositionTwo = document.getElementById("position-two")
var balisePositionThree = document.getElementById("position-three")
var balisePositionFour = document.getElementById("position-four")
//Flèches directionnelles
var baliseArrowLeft = document.getElementById("arrow-left");
var baliseArrowRight = document.getElementById("arrow-right");
//Bouton
var baliseBtnSend = document.getElementById("btn-send");
var baliseMessage = document.getElementById("message");
//Résultat à trouver
var tabResult = [];
for (let i = 0; i < 4; i++) {
    tabResult[i] = Math.floor(Math.random() * Math.floor(6));
}
console.log("Affichage de tabResult => la combinaison a trouver");
console.table(tabResult);

//Emplacements de remplissages
var balisePOE = document.getElementById("panneau-ordinateur-envoi");
var balisePOR = document.getElementById("panneau-ordinateur-reponse");

//Données
var position = 0; //0 = la position la plus à gauche
var tabPosition = [baliseSelectColorOne, baliseSelectColorTwo, baliseSelectColorThree, baliseSelectColorFour]
var tabFleche = [balisePositionOne, balisePositionTwo, balisePositionThree, balisePositionFour]
var tabValue = [0, 0, 0, 0];//Tableau des valeurs entrées par le joueur
var tabControl = [2, 2, 2, 2];//Tableau de comparaison entre les résultats à trouver (tabResult) et les valeurs entrées par le joueur (tabValue)
var nb = 0; //nb d'essais réalisés

/****************************************************************************************************************************************/
/** Selecteur de couleur */
baliseSelectRed.addEventListener("click", function () {
    tabPosition[position].src = "tokenred.png";
    tabValue[position] = 1;
});
baliseSelectYellow.addEventListener("click", function () {
    tabPosition[position].src = "tokenyellow.png";
    tabValue[position] = 2;
});
baliseSelectGreen.addEventListener("click", function () {
    tabPosition[position].src = "tokengreen.png";
    tabValue[position] = 3;
});
baliseSelectBlue.addEventListener("click", function () {
    tabPosition[position].src = "tokenblue.png";
    tabValue[position] = 4;
});
baliseSelectBlack.addEventListener("click", function () {
    tabPosition[position].src = "tokenblack.png";
    tabValue[position] = 0;
});
baliseSelectPurple.addEventListener("click", function () {
    tabPosition[position].src = "tokenpurple.png";
    tabValue[position] = 5;
});

/****************************************************************************************************************************************/
/** Selecteur de flèches */
baliseArrowLeft.addEventListener("click", function () {
    if (position == 0) {
        position = 3;
        tabFleche[0].src = "blank.png";
        tabFleche[3].src = "down-arrow.png";
    } else {
        tabFleche[position].src = "blank.png";
        position--;
        tabFleche[position].src = "down-arrow.png";
    }
});
baliseArrowRight.addEventListener("click", function () {
    if (position == 3) {
        position = 0;
        tabFleche[3].src = "blank.png";
        tabFleche[0].src = "down-arrow.png";
    } else {
        tabFleche[position].src = "blank.png";
        position++;
        tabFleche[position].src = "down-arrow.png";
    }
});

/****************************************************************************************************************************************/
/** Bouton d'envoi */
baliseBtnSend.addEventListener("click", function (e) {
    e.preventDefault();
    nb++;
    console.log("Affichage de tabValue, après le clic => combinaison entrée par le joueur");
    console.table(tabValue);

    if (nb == 12) {
        alert("Défaite !");
    } else {
        control();
        display(nb);
        for (let i = 0; i < 4; i++) {
            tabPosition[i].src = "tokenblack.png";
            tabValue[i] = 0;
            tabControl[i] = 2;
        };
    }
});

/****************************************************************************************************************************************/
/** Fonction de contrôle */
function control() {
    let tabTempValue = [];
    for (let i = 0; i < 4; i++) {
        tabTempValue[i] = tabValue[i];
    }

    let tabTempResult = [];
    for (let i = 0; i < 4; i++) {
        tabTempResult[i] = tabResult[i];
    }

    console.log("Affichage de tabControl, avant le premier contrôle");
    console.table(tabControl);

    for (let i = 0; i < 4; i++) {//regardons chacune des 4 positions proposées
        for (let j = 0; j < 4; j++) {//parmi les 4 positions à trouver, est-elle : présente ? présente à la bonne position ?
            if (tabTempValue[i] == tabTempResult[j] && i == j) { //si présente : position = ok, je retire le pion
                tabControl[i] = 0;
                tabTempValue[i] = 9;
                tabTempResult[j] = null;
            }
        }
    }

    console.log("Affichage de tabControl, après le premier contrôle : valeur 0 = juste, 1 = mal placé, 2 = faux");
    console.table(tabControl);
    console.log("Affichage de tabTempValue, après le premier contrôle : valeurs temporaire de tabValue, avec 9 = jeton retiré");
    console.table(tabTempValue);
    console.log("Affichage de tabTempResult, après le premier contrôle");
    console.table(tabTempResult);

    for (let i = 0; i < 4; i++) {//regardons chacune des 4 positions proposées
        for (let j = 0; j < 4; j++) {//parmi les 4 positions à trouver, est-elle : présente ? présente à la bonne position ?
            if (tabTempValue[i] == tabTempResult[j]) { //si présente : position = faux, je retire le pion
                tabControl[i] = 1;
                tabTempValue[i] = null;
                tabTempResult[j] = null;
            }
        }
    }

    console.log("Affichage de tabControl, après le deuxième contrôle : valeur 0 = juste, 1 = mal placé, 2 = faux");
    console.table(tabControl);
    console.log("Affichage de tabTempValue, après le deuxième contrôle : valeurs temporaire de tabValue, avec 8 = jeton retiré");
    console.table(tabTempValue);
    console.log("Affichage de tabTempResult, après le deuxième contrôle");
    console.table(tabTempResult);
    if (tabTempValue[0] == 9 && tabTempValue[1] == 9 && tabTempValue[2] == 9 && tabTempValue[3] == 9) {
        //alert("Victoire !");
        $('.demo').fireworks({
            sound: true, // sound effect
            opacity: 0.9,
            width: '100%',
            height: '100%'
        });
    }
};

/****************************************************************************************************************************************/
/** Fonction d'affichage */
function display(nb) { //préparer le résultat avant de l'envoyer dans le innerHTML, pour effectuer la lecture 1 fois au lieu de 4 !
    let remplissagePOE = "Ceci est votre " + nb + "e essai :";
    let remplissagePOR = "Résultat :";
    console.log("Affichage de tabValue, pour l'affichage => valeur de 0 à 5, définissant la couleur du jeton a afficher");
    console.table(tabValue);
    for (let i = 0; i < 4; i++) {
        switch (tabValue[i]) {
            case 0:
                remplissagePOE += "<img src='tokenblack.png' alt='black token' class='black-token'>";
                break;
            case 1:
                remplissagePOE += "<img src='tokenred.png' alt='red token' class='red-token'>";
                break;
            case 2:
                remplissagePOE += "<img src='tokenyellow.png' alt='yellow token' class='yellow-token'>";
                break;
            case 3:
                remplissagePOE += "<img src='tokengreen.png' alt='green token' class='green-token'>";
                break;
            case 4:
                remplissagePOE += "<img src='tokenblue.png' alt='blue token' class='blue-token'>";
                break;
            case 5:
                remplissagePOE += "<img src='tokenpurple.png' alt='purple token' class='purple-token'>";
                break;
        }
    };
    balisePOE.innerHTML += remplissagePOE;
    console.log("Affichage de tabControl, pour l'affichage => valeur de 0 à 2, définissant la justesse");
    console.table(tabControl);
    tabControl.sort();
    for (let i = 0; i < 4; i++) {
        switch (tabControl[i]) {
            case 0:
                remplissagePOR += "<img src='confirmed.png' alt='right check'>";
                break;
            case 1:
                remplissagePOR += "<img src='usable.png' alt='move check'>";
                break;
            case 2:
                remplissagePOR += "<img src='cancel.png' alt='wrong check'>";
                break;
        }
    };
    balisePOR.innerHTML += remplissagePOR;
}
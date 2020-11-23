// display categories without refresh

const homeLogo = document.getElementById("homeLogo"),
    homeBtn = document.getElementById("homeBtn"),
    clothesBtn = document.getElementById("clothesBtn"),
    figuBtn = document.getElementById("figuBtn"),
    caveBtn = document.getElementById("caveBtn"),
    homeFoot = document.getElementById("homeFoot"),
    clothesFoot = document.getElementById("clothesFoot"),
    figuFoot = document.getElementById("figuFoot"),
    caveFoot = document.getElementById("caveFoot"),
    home = document.getElementById("home"),
    clothes = document.getElementById("clothes"),
    figurine = document.getElementById("figurine"),
    cave = document.getElementById("cave");

homeLogo.onclick = () => {
    home.style.display = "block";
    clothes.style.display = "none";
    figurine.style.display = "none";
    cave.style.display = "none";
}

homeBtn.onclick = () => {
    home.style.display = "block";
    clothes.style.display = "none";
    figurine.style.display = "none";
    cave.style.display = "none";
}

clothesBtn.onclick = () => {
    clothes.style.display = "block";
    home.style.display = "none";
    figurine.style.display = "none";
    cave.style.display = "none";
}

figuBtn.onclick = () => {
    figurine.style.display = "block";
    home.style.display = "none";
    clothes.style.display = "none";
    cave.style.display = "none";
}

caveBtn.onclick = () => {
    cave.style.display = "block";
    home.style.display = "none";
    clothes.style.display = "none";
    figurine.style.display = "none";
}

homeFoot.onclick = () => {
    home.style.display = "block";
    clothes.style.display = "none";
    figurine.style.display = "none";
    cave.style.display = "none";
}

clothesFoot.onclick = () => {
    clothes.style.display = "block";
    home.style.display = "none";
    figurine.style.display = "none";
    cave.style.display = "none";
}

figuFoot.onclick = () => {
    figurine.style.display = "block";
    home.style.display = "none";
    clothes.style.display = "none";
    cave.style.display = "none";
}

caveFoot.onclick = () => {
    cave.style.display = "block";
    home.style.display = "none";
    clothes.style.display = "none";
    figurine.style.display = "none";
}

// end display categories without refreshlet 

let deja_cliquer = [] // les ids de tout les elements deja cliquer
function produit_deja_cliquer(id) {
    return deja_cliquer.indexOf(id) !== -1; // renvoi vrai si deja cliquer sinon faux
}

let sousTotaux = [];
function calc_total() {
    let total = 0;
    for (let i = 0; i < sousTotaux.length; i += 1) {
        total = total + parseFloat(sousTotaux[i].innerHTML);
    }
    console.log("fwegew")
    document.getElementById("panierTotal").innerHTML = total;
    // sousTotaux.forEach(sousTotal => total += sousTotal); equivalent foreach
}

function ajouterPanier(event, id_du_produit) {
    event.preventDefault() // evite de recharger la page qund on ajouter un produit au panier
    if (produit_deja_cliquer(id_du_produit) === true) {
        console.log("objet deja cliquer")
        return;
    }
    // else
    deja_cliquer.push(id_du_produit) // si pas deja cliquer on l'ajoute a tableau des cliquer


    ///////////////////// RECUPERATION DES ELEMENTS DE LA CARTE
    let produit = document.getElementById(id_du_produit).cloneNode(true);
    let produit_img = produit.children[0]; // on recuper les element contenu dans notre card sous forme de tableau et l'index 0 correspond a son <img>
    let titre = produit.children[1].children[0] // on recupere la div card body puis dans cette div on recupere le titre <h5>
    let ref = produit.children[1].children[2] // on recupere la div card body puis dans cette div on recupere le prix
    let prix = produit.children[1].children[3] // on recupere la div card body puis dans cette div on recupere le titre <h5>
    ///////////////////////////

    ///////////////////// AJOUT AU PANIER
    let new_elem = document.createElement("tr");
    new_elem.appendChild(produit_img);
    new_elem.appendChild(titre);
    new_elem.appendChild(ref);
    new_elem.appendChild(prix);

    let displayCounter = document.createElement('div');
    displayCounter.style = "border: 1px solid black;" +
                            "width: max-content;" +
                            "height: max-content;" +
                            "padding: 0px 5px 0px 5px";
    displayCounter.innerHTML = "1";
    new_elem.appendChild(displayCounter)

    let sousTotal = document.createElement('div');
    sousTotal.style = "border: 1px solid black;" +
                            "width: max-content;" +
                            "height: max-content;" +
                            "padding: 0px 5px 0px 5px";
    sousTotal.innerHTML = +displayCounter.innerHTML * get_prix_article(prix)
    sousTotaux.push(sousTotal);
    new_elem.appendChild(sousTotal);

    let new_button = document.createElement("button");
    new_button.innerHTML = "+";
    new_button.onclick = event => {
        event.preventDefault();
        // document.getElementById(id_du_produit).value = +document.getElementById(id_du_produit).value + 1;
        displayCounter.innerHTML = +displayCounter.innerHTML + 1; // pas besoin de recuperer via un id on a deja une reference vers le compteur dans la variable displaycounter
        sousTotal.innerHTML = +displayCounter.innerHTML * get_prix_article(prix)
        calc_total(); // on met jour le total 
        
        // return multiply;
    
    }
    let new_button2 = document.createElement("button");
    new_button2.innerHTML = "-";
    new_button2.onclick = event => {
        event.preventDefault();
        // document.getElementById(id_du_produit).value = +document.getElementById(id_du_produit).value - 1;
        if (+displayCounter.innerHTML <= 1) // protection pour eviter d'aller dans les negatifs
            return;
        displayCounter.innerHTML = +displayCounter.innerHTML - 1; // pas besoin de recuperer via un id on a deja une reference vers le compteur dans la variable displaycounter
        sousTotal.innerHTML = +displayCounter.innerHTML * get_prix_article(prix)
        calc_total(); // on met jour le total 

      
    }

    document.getElementById("panier").appendChild(new_elem);
    new_elem.appendChild(new_button);
    new_elem.appendChild(new_button2);


}

let supShop = document.getElementById("delete");
supShop.onclick = () => {
    document.getElementById("panier").innerHTML = null;
    deja_cliquer = [];
    sousTotaux = [];
    calc_total()
}


function get_prix_article(prix) {
    return +prix.textContent.replace('€', '.') // textcontent contien le prix sous forme de texte on le tranforme juste en float
}

// function multiply(price) {
//     console.log(price);
//     return price = parseFloat(prix) * parseFloat(displayCounter);
// }

// function divide(price) {
//     console.log(price);
//     return price = parseFloat(prix) / parseFloat(displayCounter);
// }
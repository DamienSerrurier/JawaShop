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


function ajouterPanier(id_du_produit) {

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
    let new_elem = document.createElement("div");
    new_elem.appendChild(produit_img);
    new_elem.appendChild(titre);
    new_elem.appendChild(ref);
    new_elem.appendChild(prix);


    let compteur = document.createElement("div");

    let displayCounter = document.createElement('input');

    compteur.appendChild(displayCounter)


    





    let new_button = document.createElement("button");
    new_button.innerHTML = "+";
    new_button.onclick = event => {
        event.preventDefault();
        console.log("+ 1");
        //   ici on ajoute 1 a cet article
        new_button.onclick = event => {
            if (parseInt(compteur.innerHTML) + 1 >= 0) {
                compteur.innerHTML = parseInt(compteur.innerHTML) + 1;
                // displayCounter.appendChild(compteur.innerHTML);
            }

        }
    }
    let new_button2 = document.createElement("button");
    new_button2.innerHTML = "-";
    new_button2.onclick = event => {
        event.preventDefault();
        console.log("- 1");
        //  ici on supprime 1 a cet article
        new_button2.onclick = event => {
            if (parseInt(compteur.innerHTML) - 1 >= 0) {
                compteur.innerHTML = parseInt(compteur.innerHTML) - 1;
            }

        }
    }
    new_elem.appendChild(new_button);
    new_elem.appendChild(new_button2);
    document.getElementById("panier").appendChild(new_elem);


}

let supShop = document.getElementById("delete");
supShop.onclick = () => {
    panier.innerHtml = null;
    deja_cliquer = [];
}
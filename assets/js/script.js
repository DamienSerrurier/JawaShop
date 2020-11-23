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
};

homeBtn.onclick = () => {
  home.style.display = "block";
  clothes.style.display = "none";
  figurine.style.display = "none";
  cave.style.display = "none";
};

clothesBtn.onclick = () => {
  clothes.style.display = "block";
  home.style.display = "none";
  figurine.style.display = "none";
  cave.style.display = "none";
};

figuBtn.onclick = () => {
  figurine.style.display = "block";
  home.style.display = "none";
  clothes.style.display = "none";
  cave.style.display = "none";
};

caveBtn.onclick = () => {
  cave.style.display = "block";
  home.style.display = "none";
  clothes.style.display = "none";
  figurine.style.display = "none";
};

homeFoot.onclick = () => {
  home.style.display = "block";
  clothes.style.display = "none";
  figurine.style.display = "none";
  cave.style.display = "none";
};

clothesFoot.onclick = () => {
  clothes.style.display = "block";
  home.style.display = "none";
  figurine.style.display = "none";
  cave.style.display = "none";
};

figuFoot.onclick = () => {
  figurine.style.display = "block";
  home.style.display = "none";
  clothes.style.display = "none";
  cave.style.display = "none";
};

caveFoot.onclick = () => {
  cave.style.display = "block";
  home.style.display = "none";
  clothes.style.display = "none";
  figurine.style.display = "none";
};

// end display categories without refreshlet

let deja_cliquer = []; // les ids de tout les elements deja cliquer
function produit_deja_cliquer(id) {
  return deja_cliquer.indexOf(id) !== -1; // renvoi vrai si deja cliquer sinon faux
}

let sousTotaux = [67, 99 , 33];
function calc_total() {
  let total = 0;

  for (let i = 0; i < sousTotaux.length; i += 1) {
    total = total + parseFloat(sousTotaux[i].innerHTML);
  }
  document.getElementById("panierTotal").innerHTML = total; // on l'affiche a l'ecran
  // sousTotaux.forEach(sousTotal => total += sousTotal); equivalent foreach
}

function ajouterPanier(event, id_du_produit) {
  event.preventDefault(); // evite de recharger la page quand on ajouter un produit au panier
  if (produit_deja_cliquer(id_du_produit) === true) {
    console.log("objet deja cliquer");
    return;
  }
  // else
  deja_cliquer.push(id_du_produit); // si pas deja cliquer on l'ajoute a tableau des cliquer

  ///////////////////// RECUPERATION DES ELEMENTS DE LA CARTE
  let produit = document.getElementById(id_du_produit).cloneNode(true);
  let produit_img = produit.children[0]; // on recuper les element contenu dans notre card sous forme de tableau et l'index 0 correspond a son <img>
  let titre = produit.children[1].children[0]; // on recupere la div card body puis dans cette div on recupere le titre <h5>
  let ref = produit.children[1].children[2]; // on recupere la div card body puis dans cette div on recupere le prix
  let prix = produit.children[1].children[3]; // on recupere la div card body puis dans cette div on recupere le titre <h5>
  ///////////////////////////

  let objetPanier = document.createElement("tr");
  document.getElementById("panier").appendChild(objetPanier);

  ///////////////////// AJOUT AU PANIER
  objetPanier.appendChild(produit_img);
  objetPanier.appendChild(titre);
  objetPanier.appendChild(ref);
  objetPanier.appendChild(prix);

  let qteVoulu = document.createElement("div");
  qteVoulu.style =
    "border: 1px solid black;" +
    "width: max-content;" +
    "height: max-content;" +
    "padding: 0px 5px 0px 5px";
  qteVoulu.innerHTML = "1"; // au minimum 1 objet
  objetPanier.appendChild(qteVoulu);

  let sousTotal = document.createElement("div");
  sousTotal.style =
    "border: 1px solid black;" +
    "width: max-content;" +
    "height: max-content;" +
    "padding: 0px 5px 0px 5px";                 
  sousTotal.innerHTML = +qteVoulu.innerHTML * get_prix_article(prix);
  objetPanier.appendChild(sousTotal);
  sousTotaux.push(sousTotal); // on rajoute ce sous total a la liste des sous totaux

  let bouttonAjouter = document.createElement("button");
  bouttonAjouter.innerHTML = "+";
  bouttonAjouter.onclick = (event) => {
    event.preventDefault();
    // document.getElementById(id_du_produit).value = +document.getElementById(id_du_produit).value + 1;
    qteVoulu.innerHTML = +qteVoulu.innerHTML + 1; // pas besoin de recuperer via un id on a deja une reference vers le compteur dans la variable displaycounter
    sousTotal.innerHTML = +qteVoulu.innerHTML * get_prix_article(prix); // met a jour le sous total
    calc_total(); // on met jour le total
  };
  objetPanier.appendChild(bouttonAjouter);

  let bouttonSuprimer = document.createElement("button");
  bouttonSuprimer.innerHTML = "-";
  bouttonSuprimer.onclick = (event) => {
    event.preventDefault();
    // document.getElementById(id_du_produit).value = +document.getElementById(id_du_produit).value - 1;
    if (+qteVoulu.innerHTML <= 1) {
      // protection pour eviter d'aller dans les negatifs on sors de la fonction
      return;
    }
    qteVoulu.innerHTML = +qteVoulu.innerHTML - 1; // pas besoin de recuperer via un id on a deja une reference vers le compteur dans la variable displaycounter
    sousTotal.innerHTML = +qteVoulu.innerHTML * get_prix_article(prix);// met a jour le sous total
    calc_total(); // on met jour le total
  };
  objetPanier.appendChild(bouttonSuprimer);
}

document.getElementById("delete").onclick = () => {
    // on reinitialise toute les variable du panier
  document.getElementById("panier").innerHTML = null;
  deja_cliquer = [];
  sousTotaux = [];
  calc_total();
};

function get_prix_article(prix) {
  return +prix.textContent.replace("€", "."); // textcontent contien le prix sous forme de texte on le tranforme juste en float
}

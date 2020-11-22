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

homeLogo.onclick = function () {
    home.style.display = "block";
    clothes.style.display = "none";
    figurine.style.display = "none";
    cave.style.display = "none";
}

homeBtn.onclick = function () {
    home.style.display = "block";
    clothes.style.display = "none";
    figurine.style.display = "none";
    cave.style.display = "none";
}

clothesBtn.onclick = function () {
    clothes.style.display = "block";
    home.style.display = "none";
    figurine.style.display = "none";
    cave.style.display = "none";
}

figuBtn.onclick = function () {
    figurine.style.display = "block";
    home.style.display = "none";
    clothes.style.display = "none";
    cave.style.display = "none";
}

caveBtn.onclick = function () {
    cave.style.display = "block";
    home.style.display = "none";
    clothes.style.display = "none";
    figurine.style.display = "none";
}

homeFoot.onclick = function () {
    home.style.display = "block";
    clothes.style.display = "none";
    figurine.style.display = "none";
    cave.style.display = "none";
}

clothesFoot.onclick = function () {
    clothes.style.display = "block";
    home.style.display = "none";
    figurine.style.display = "none";
    cave.style.display = "none";
}

figuFoot.onclick = function () {
    figurine.style.display = "block";
    home.style.display = "none";
    clothes.style.display = "none";
    cave.style.display = "none";
}

caveFoot.onclick = function () {
    cave.style.display = "block";
    home.style.display = "none";
    clothes.style.display = "none";
    figurine.style.display = "none";
}

// end display categories without refresh
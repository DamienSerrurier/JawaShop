const homeLogo = document.getElementById("homeLogo"),
    homeBtn = document.getElementById("homeBtn"),
    clothesBtn = document.getElementById("clothesBtn"),
    figuBtn = document.getElementById("figuBtn"),
    caveBtn = document.getElementById("caveBtn"),

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
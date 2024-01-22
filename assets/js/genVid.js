let vid = [{
    "title": "L'intérêt de la chaîne le Grenier des Joueurs",
    "desc": "Les 2 intérêts de l'existence de la chaîne Grenier des Joueurs",
    "minia":"assets/videos/Minias/00.png",
    "link": "assets/videos/01.html"
},
{
    "title": "Le Discord (Non-officiel) Joueur du grenier est là !",
    "desc": "Grande PUB pour le Discord Club JDG",
    "minia":"assets/videos/Minias/01.png",
    "link": "https://dzenetanmassart.github.io/MakeOnWeb/"
}

]



let genVid = " ";

for (let ii = 0; ii < vid.length; ii++) {
    let vids = (vid[ii]);

    genVid += '<a target="_blank" href="' +
    vids.link +
    '"><article><img src="'+
    vids.minia +
    '" alt="'+
    vids.title +
    '"><h3>' +
        vids.title +
        '</h3>' +
        '<p>' +
        vids.desc +
        '</p></div></article></a>';
}

document.getElementById("genVid").innerHTML += genVid;
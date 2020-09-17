/*const getRandomTopic = function () {
    readTextFile("js/topics.json", function (fileContent) {
        const data = JSON.parse(fileContent)
        document.getElementById("topic").innerHTML = data.topics[ Math.floor((Math.random() * data.topics.length) + 0) ];
    })
}

function readTextFile(file, callback) {
    const rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}*/

//crear contenedor de bolitas con las bolitas

const  bolasParaSorteo=["1",
"2",
"3",
"4",
"5",
"6",
"7",
"8",
"9",
"10",
"11",
"12",
"13",
"14",
"15",
"16",
"17",
"18",
"19",
"20",
"21",
"22",
"23",
"24",
"25",
"26",
"27",
"28",
"29",
"30",
"31",
"32",
"33",
"34",
"35",
"36",
"37",
"38",
"39",
"40",
"41",
"42",
"43",
"44",
"45",
"46",
"47",
"48",
"49",
"50",
"51",
"52",
"53",
"54",
"55",
"56",
"57",
"58",
"59",
"60",
"61",
"62",
"63",
"64",
"65",
"66",
"67",
"68",
"69",
"70"]

//crear contenedor de bolitas que ya salieron 

const  bolasSorteadas=[]

//mostrar las bolitas

const mostrarBolita = function () {
    //sacar la primera blita de la lista
    const bolaEnJuego = agarraLaBolita()
    //mostrar la bolita
    document.getElementById("topic").innerHTML = bolaEnJuego
    //mandar la bola sorteada a las que ya salieron
    bolasSorteadas.push(bolaEnJuego)
}
//saca aleatoriamente la bolita desde las bolas disponibles para el sorteo
function agarraLaBolita( ) {
    const cantidadDisponible = bolasParaSorteo.length
    const indiceAleatorio = Math.random() * (cantidadDisponible - 0) + 0;
    return bolasParaSorteo.splice(indiceAleatorio,1)[0]
} 

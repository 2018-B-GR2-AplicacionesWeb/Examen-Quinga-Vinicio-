const fs = require('fs');
const rxjs = require('rxjs');
//inicializamos la bdd
function inicializarBDD() {
    return new Promise((resolve, reject) => {
        fs.readFile('people.json', 'utf-8', (error, contenidoArchivo) => {
            if (error) {
                error: error;
            }
            else {
                resolve({
                    mensaje: 'BDD leida',
                    bdd: JSON.parse(contenidoArchivo)
                });
            }
        });
    });
}
const arregloF = [];
const arregloM = [];
const arregloN = [];
//## 1) Busque los tipos de "gender" en el arreglo `people.json`
inicializarBDD()
    .then(respuesta => {
    respuesta.bdd.map(valor => {
        switch (valor.gender) {
            case 'female':
                arregloF.push(valor.gender);
                break;
            case 'male':
                arregloM.push(valor.gender);
                break;
            case 'n/a':
                arregloN.push(valor.gender);
                break;
        }
    });
    console.log("Busque los tipos de \"gender\" en el arreglo `people.json`");
    console.log(arregloF);
    console.log(arregloM);
    console.log(arregloN);
});
const arregloB = [];
const arregloY = [];
const arregloR = [];
const arregloBr = [];
//## 2) Busque los tipos de "eye_color" en el arreglo `people.json`
inicializarBDD()
    .then(respuesta => {
    respuesta.bdd.map(valor => {
        switch (valor.eyes_color) {
            case 'blue':
                arregloB.push(valor.eyes_color);
                break;
            case 'yellow':
                arregloY.push(valor.eyes_color);
                break;
            case 'red':
                arregloR.push(valor.eyes_color);
                break;
            case 'brown':
                arregloBr.push(valor.eye_color);
                break;
        }
    });
    console.log("Busque los tipos de \"eye_color\" en el arreglo `people.json`");
    console.log(arregloB);
    console.log(arregloY);
    console.log(arregloR);
    console.log(arregloBr);
});
//## 3) Busque los tipos de "skin_color" en el arreglo `people.json`
inicializarBDD()
    .then((respuesta) => {
    respuesta;
});

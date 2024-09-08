"use strict";
function acessar(uuid, nome) {
    console.log(`acessar/ ${uuid}: ${nome}`);
}
function logUsuario(uuid) {
    console.log(`logUsuario/ uuid: ${uuid}`);
}
function comprarItem(moeda) {
    console.log("moedal tal: ", moeda);
}
comprarItem("BRL");

"use strict";
// let loja: object
const BurguerK = {
    nome: "BurguerK",
    endereco: "Rua ali",
    status: true,
};
// console.log(BurguerK)
function novaLoja({ nome, endereco, status }) {
    console.log(nome);
    console.log(endereco);
    console.log(status);
}
novaLoja({ nome: "subway", endereco: "rua tal", status: true });

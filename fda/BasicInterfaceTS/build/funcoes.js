"use strict";
// interface CursoProps {
//   id: string
//   nome: string
//   preco: number
//   promocao: (preco: number) => void
// }
let somaNumeros = (valor1, valor2) => {
    console.log("resultado: ", valor1 + valor2);
    return valor1 + valor2;
};
const resultado = somaNumeros(3, 8);
console.log(resultado);

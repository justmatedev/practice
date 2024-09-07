"use strict";
const novoUsuario = {
    email: "eu@email.com",
    status: true,
};
// console.log(novoUsuario)
function novoUser(propriedade) {
    console.log(propriedade.nome);
}
novoUser({ nome: "eu2", email: "asosd", status: true });

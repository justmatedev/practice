"use strict";
function cadastro(email, senha, nome = "aluno", idade) {
    let data = { email, senha, nome, idade };
    console.log(data);
}
function cadastroLoja(nome, email, status = false) {
    console.log(nome);
    return status;
}
cadastroLoja("burguerk", "email@amsda.com");

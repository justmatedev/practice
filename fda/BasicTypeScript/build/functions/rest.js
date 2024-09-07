"use strict";
function totalVendas(...vendas) {
    const qtdeVendas = vendas.length;
    console.log(qtdeVendas);
}
function mostraNomes(...nomes) {
    nomes.map((nome, i) => {
        console.log(i, nome);
    });
}
mostraNomes("a", "hg", "fda,fda", "dfksdfokdf");

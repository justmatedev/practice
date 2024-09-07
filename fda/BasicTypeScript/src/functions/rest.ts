// function totalVendas(
//   venda1: number,
//   venda2: number,
//   venda3: number,
//   venda4: number
// ): number {
//   const total = venda1 + venda2 + venda3 + venda4

//   console.log(total)

//   return total
// }

// totalVendas(6, 7, 9, 16)

function totalVendas(...vendas: number[]): void {
  const qtdeVendas = vendas.length
  console.log(qtdeVendas)
}

// totalVendas(3, 6, 8)
// totalVendas(3, 6, 8, 10)

function mostraNomes(...nomes: string[]) {
  nomes.map((nome, i) => {
    console.log(i, nome)
  })
}

mostraNomes("a", "hg", "fda,fda", "dfksdfokdf")

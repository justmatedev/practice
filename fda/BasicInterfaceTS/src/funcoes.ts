// interface CursoProps {
//   id: string
//   nome: string
//   preco: number
//   promocao: (preco: number) => void
// }

// function mostraPromocao(preco: number): void {
//   console.log("preco tal: ", preco)
// }

// const novoCurso: CursoProps = {
//   id: "1",
//   nome: "curso ts",
//   preco: 750,
//   promocao: (preco: number): void => {
//     console.log("preco tal: ", preco)
//   },
// }

// console.log(novoCurso)
// console.log(novoCurso.promocao(50))

interface SomaProps {
  (valor1: number, valor2: number): number
}

let somaNumeros: SomaProps = (valor1: number, valor2: number): number => {
  console.log("resultado: ", valor1 + valor2)
  return valor1 + valor2
}

const resultado = somaNumeros(3, 8)

console.log(resultado)

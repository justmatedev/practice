// let loja: object

// loja = {
//   nome: "bk",
//   endereco: "rua x",
//   status: true,
// }

interface LojaProps {
  nome: string
  endereco: string
  status: boolean
}

const BurguerK: LojaProps = {
  nome: "BurguerK",
  endereco: "Rua ali",
  status: true,
}

// console.log(BurguerK)

function novaLoja({ nome, endereco, status }: LojaProps): void {
  console.log(nome)
  console.log(endereco)
  console.log(status)
}

novaLoja({ nome: "subway", endereco: "rua tal", status: true })

interface ProdutosProps {
  readonly id: string
  nome: string
  descricao: string
}

let produto1: ProdutosProps = {
  id: "1",
  nome: "tenis nike",
  descricao: "descolado",
}

// produto1.id = "123"

console.log(produto1)

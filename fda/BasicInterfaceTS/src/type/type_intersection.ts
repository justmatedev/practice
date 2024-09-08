type Info = {
  id: number
  nome: string
  descricao?: string
}

const produtoInfo: Info = {
  id: 123,
  nome: "place de video",
  descricao: "rtx 2060",
}

type Categoria = {
  slug: string
  qtdeProduto: number
}

const categoria1: Categoria = {
  slug: "hardware",
  qtdeProduto: 2,
}

type ProdutoInfo = Info & Categoria

const novoProduto: ProdutoInfo = {
  id: 464,
  nome: "Teclado",
  slug: "teclado mecanico",
  qtdeProduto: 10,
}

console.log(novoProduto)

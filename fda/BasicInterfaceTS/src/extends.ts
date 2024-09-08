interface JogoProps {
  readonly id: string
  nome: string
  descricao: string
  plataforma: string[]
}

const left4dead: JogoProps = {
  id: "123",
  nome: "left 4 dead",
  descricao: "jodo de acao e tiro",
  plataforma: ["ps5", "pc"],
}

// console.log(left4dead)

interface DLC extends JogoProps {
  jogoOriginal: JogoProps
  novoConteudo: string[]
}

const left4deadDLC: DLC = {
  jogoOriginal: left4dead,
  id: "64",
  nome: "novos mapas",
  descricao: "4 mapas novos",
  plataforma: ["ps5", "pc"],
  novoConteudo: ["modo coop", "medalhas"],
}

console.log(left4deadDLC)

interface CadastroProps {
  nome?: string
  email: string
  status: boolean
}

const novoUsuario: CadastroProps = {
  email: "eu@email.com",
  status: true,
}

// console.log(novoUsuario)

function novoUser(propriedade: CadastroProps) {
  console.log(propriedade.nome)
}

novoUser({ nome: "eu2", email: "asosd", status: true })

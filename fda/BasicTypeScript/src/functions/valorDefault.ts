function cadastro(
  email: string,
  senha: string,
  nome = "aluno",
  idade?: number
): void {
  let data = { email, senha, nome, idade }

  console.log(data)
}

// cadastro("tes@temail.com", "1231321", "meu nome", 53)

function cadastroLoja(nome: string, email: string, status = false): boolean {
  console.log(nome)

  return status
}

cadastroLoja("burguerk", "email@amsda.com")

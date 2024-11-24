interface PageDetailProps {
  params: {
    id: string
  }
}

async function getData(id: string) {
  console.log("-------- o console ta aqui: ", id)

  const response = await fetch("https://api.github.com/users/justmatedev/repos")

  return response.json()
}

export default async function RepositorioId({ params }: PageDetailProps) {
  const { id } = await params
  const data = await getData(id)
  return (
    <div>
      <h1>Pagina detalhjes do repositorio {id}</h1>
      <h1>data {data[0].name}</h1>
    </div>
  )
}

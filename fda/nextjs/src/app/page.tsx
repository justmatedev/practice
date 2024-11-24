import { OwnerRepo } from "@/components/OwnerRepo"

interface DataProps {
  id: number
  name: string
  full_name: string
  owner: {
    login: string
    id: number
    avatar_url: string
    url: string
  }
}

// async function getData() {
//   const response = await fetch("https://api.github.com/users/justmatedev/repos")

//   return response.json()
// }

async function delayFetch(url: string, delay: number) {
  await new Promise((resolve) => setTimeout(resolve, delay))
  // const response = await fetch(url)
  // const response = await fetch(url, { cache: "no-store" })
  const response = await fetch(url, { next: { revalidate: 60 } })
  return response.json()
}

async function getData() {
  const data = await delayFetch(
    "https://api.github.com/users/justmatedev/repos",
    0
  )
  return data
}

export default async function Home() {
  const data: DataProps[] = await getData()

  return (
    <main>
      <h1>Pagina Home</h1>
      <span>Seja bem vindo a pagina home</span>
      <br />

      <h3>meus repositorios</h3>
      {data.map((item) => (
        <div key={item.id}>
          <strong>Repositorio: </strong>
          <span>{item.name}</span>
          <br />
          <OwnerRepo
            avatar_url={item.owner.avatar_url}
            name={item.owner.login}
          />
          <br />
        </div>
      ))}
    </main>
  )
}

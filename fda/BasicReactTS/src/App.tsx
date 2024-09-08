import { useState, ChangeEvent, FormEvent, useRef } from "react"
import "./App.css"
import { Header } from "./components/header"
// import { Nome } from "./components/nome"

interface UserProps {
  nome: string
  // idade: number
  cargo: string
}

function App() {
  const nameRef = useRef<HTMLInputElement>(null)
  const cargoRef = useRef<HTMLInputElement>(null)
  const [users, setUsers] = useState<UserProps[]>([])
  // const [user, setUser] = useState("")
  // const [input, setInput] = useState("")
  // const [nome, setNome] = useState<string | number>("")
  // const [user, setUser] = useState<UserProps>()

  // const mudarNome = () => {
  //   setNome("euu")
  //   setNome(12)
  // }
  // const mudarUser = () => {
  //   setUser({
  //     nome: "Dante",
  //     cargo: "ui",
  //     idade: 29,
  //   })
  // }

  // const trocaValorInput = (event: ChangeEvent<HTMLInputElement>) => {
  //   setInput(event.target.value)
  // }

  // const handleRegister = (event: FormEvent) => {
  //   event.preventDefault()
  //   setUser(input)
  // }

  const handleRegister = (event: FormEvent) => {
    event.preventDefault()

    if (!nameRef.current?.value || !cargoRef.current?.value) {
      alert("preencha")
      return
    }

    let user = {
      nome: nameRef.current?.value,
      cargo: cargoRef.current?.value,
    }
    setUsers((values) => [...values, user])

    nameRef.current.value = ""
    cargoRef.current.value = ""
  }

  return (
    <main>
      <Header nome="react + ts" description="curso de react" />

      <form onSubmit={handleRegister}>
        <label htmlFor="">nome:</label>
        <input
          type="text"
          placeholder="digite seu nome"
          ref={nameRef}
          // value={input}
          // onChange={(event)=>setInput(event.target.value)}
          // onChange={trocaValorInput}
        />

        <br />
        <br />

        <label htmlFor="">cargo:</label>
        <input type="text" placeholder="digite seu nome" ref={cargoRef} />

        <br />
        <br />
        <button type="submit">Cadastrar</button>
      </form>

      {users.map((user) => (
        <div>
          <br />
          <h1>{user.nome}</h1>
          <h3>{user.cargo}</h3>
        </div>
      ))}

      {/* {user && <h1>nome: {input}</h1>} */}

      {/* <Nome aluno="mateus" idade={63} />
      <Nome aluno="euuu" idade={63} />
      <Nome /> */}
      {/* <h1>Bem vindo: {nome}</h1>
      <button onClick={mudarNome}>Alterar nome</button>
      <hr />
      <br /> */}
      {/* <button onClick={mudarUser}>Alterar nome</button>
      {user && (
        <div>
          <h1>{user.nome}</h1>
          <p>{user.idade}</p>
          <p>{user.cargo}</p>
        </div>
      )} */}
    </main>
  )
}

export default App

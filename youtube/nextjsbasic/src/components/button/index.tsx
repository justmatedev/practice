"use client"

import { useState } from "react"

export function Button() {
  const [nome, setNome] = useState("vcccc")

  function handleChangeName() {
    setNome("euuuu")
  }

  return (
    <div>
      <button onClick={handleChangeName}>Alterar nome</button>
      <h3>{nome}</h3>
    </div>
  )
}

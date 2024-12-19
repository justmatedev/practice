import Link from "next/link"
import React from "react"

export default function NotFound() {
  return (
    <div>
      <h1>pagina nao econtrada - 404</h1>

      <Link href="/">Voltar para pagina home</Link>
    </div>
  )
}

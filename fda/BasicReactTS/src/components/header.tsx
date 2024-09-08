interface HeaderProps {
  nome: string
  description?: string
}
export function Header({ nome, description }: HeaderProps) {
  return (
    <header>
      <h1>{nome}</h1>
      <p>{description}</p>
      <hr />
    </header>
  )
}

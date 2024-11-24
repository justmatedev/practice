export const metadata = {
  title: "painel do site",
  description: "esse é o painel do site",
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // return children // assim seria apenas o componente do page.tsx
  return (
    <>
      <h3>Header do dashboard</h3>
      <br />
      {children}
    </>
  )
}

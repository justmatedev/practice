import { Metadata } from "next"

// link da origem
// https://youtu.be/e6FigV2fLC8?list=PLK8o5dGOylMDN0aKHJ1nW_dM7rTpAzOiL

export const metadata: Metadata = {
  metadataBase: new URL("https://seusite.com"),
  title: "Home - eu",
  description: "Aprendendo nextjs",
  openGraph: {
    // esse daqui é pra quando é compartilhado um link
    title: "Title aprendendo nextjs",
    description: "desc aprendendo nextjs",
    images: ["link de uma img"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export const revalidate = 60

export default function Home() {
  const random = Math.random() * 10
  return (
    <div>
      <h1>pagina home</h1>

      <h2>random: {random}</h2>
    </div>
  )
}

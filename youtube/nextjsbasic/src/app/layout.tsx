import type { Metadata } from "next"
import "./globals.css"
import { Header } from "@/components/header"

export const metadata: Metadata = {
  metadataBase: new URL("https://seusite.com"),
  title: "Home - eu geral",
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
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Header />

        {children}
      </body>
    </html>
  )
}

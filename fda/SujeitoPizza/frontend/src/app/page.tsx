import Image from "next/image"
import styles from "./page.module.scss"
import logoImg from "/public/logo.svg"
import Link from "next/link"
import { api } from "@/services/api"
import { redirect } from "next/navigation"
import { cookies } from "next/headers"

export default function Page() {
  async function handleLogin(formData: FormData) {
    "use server"

    const email = formData.get("email")
    const password = formData.get("password")

    if (email === "" || password === "") {
      return
    }

    try {
      const response = await api.post("/session", {
        email,
        password,
      })

      if (!response.data.token) {
        return
      }

      console.log(response.data)

      const expressTime = 60 * 60 * 24 * 30 // 30 dias em segundos
      const cookieStore = await cookies()
      cookieStore.set("session", response.data.token, {
        maxAge: expressTime,
        path: "/",
        httpOnly: false, // Prefira `true` se não precisar acessar o cookie no client
        secure: process.env.NODE_ENV === "production", // HTTPS apenas em produção
      })
      console.log(cookieStore)
    } catch (error) {
      console.log("deu este erro aquii", error)
    }

    console.log("chegou no redirect")
    redirect("/dashboard")
  }
  return (
    <>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo da pizzaria" />

        <section className={styles.login}>
          <form action={handleLogin}>
            <input
              type="email"
              required
              name="email"
              placeholder="Digite seu email..."
              className={styles.input}
            />

            <input
              type="password"
              required
              name="password"
              placeholder="********"
              className={styles.input}
            />

            <button type="submit" className={styles.button}>
              Acessar
            </button>
          </form>

          <Link href="/signup" className={styles.text}>
            Não possui uma conta? Cadastre-se
          </Link>
        </section>
      </div>
    </>
  )
}

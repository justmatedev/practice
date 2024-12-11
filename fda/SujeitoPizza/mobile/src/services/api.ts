import axios from "axios"

const api = axios.create({
  //   baseURL: "http://192.168.99.106:3333",
  baseURL: "https://sujeitopizza-backend.vercel.app",
})

export { api }

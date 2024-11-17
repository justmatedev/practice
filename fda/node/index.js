const express = require("express")
const server = express()

server.use(express.json())

// Query Params = ?nome=NodeJS
// Route Params = /curso/2
// Request Body = {nome: 'NodeJS}

const cursos = ["Node JS", "JavaScript", "React Native", "queazy"]

// Middleware Global
server.use((req, res, next) => {
  console.log(`requisição chamada: ${req.url}`)

  return next()
})

function checkCurso(req, res, next) {
  if (!req.body.name) {
    return res.status(400).json({ error: "Nome do cursos é obrigatório" })
  }

  return next()
}
function checkIndexCurso(req, res, next) {
  const curso = cursos[req.params.index]
  if (!curso) {
    return res.status(400).json({ error: "Usuario nao existe" })
  }

  req.curso = curso

  return next()
}

// get -----------------------------
// localhost:3000/curso
server.get("/cursos/:index", checkIndexCurso, (req, res) => {
  // const nome = req.query.nome
  // const id = req.params.id
  // const { index } = req.params

  // return res.json(cursos[index])
  return res.json(req.curso)
})

server.get("/cursos", (req, res) => {
  return res.json(cursos)
})

// post -----------------------------
server.post("/cursos", checkCurso, (req, res) => {
  const { name } = req.body
  cursos.push(name)

  return res.json(cursos)
})

// put  -----------------------------
server.put("/cursos/:index", checkCurso, checkIndexCurso, (req, res) => {
  const { index } = req.params
  const { name } = req.body

  cursos[index] = name

  return res.json(cursos)
})

// delete  -----------------------------
server.delete("/cursos/:index", (req, res) => {
  const { index } = req.params

  cursos.splice(index, 1)

  return res.json(cursos)
})

server.listen(3000)

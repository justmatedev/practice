// interface TecnologiaProps {
//   id: string
//   nome: string
//   slug?: string[]
// }

// let tecnologia1: TecnologiaProps = {
//   id: "1",
//   nome: "php",
//   slug: ["a", "b", "fdaf"],
// }

interface TecnologiaProps {
  id: string
  nome: string
}

interface NomesProps {
  tecnologia: TecnologiaProps[]
}

let frontend: NomesProps = {
  tecnologia: [
    {
      id: "12",
      nome: "react",
    },
    {
      id: "312",
      nome: "react native",
    },
  ],
}

console.log(frontend)

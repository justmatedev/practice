type Uuid = number | string | null

function acessar(uuid: Uuid, nome: string) {
  console.log(`acessar/ ${uuid}: ${nome}`)
}

function logUsuario(uuid: Uuid) {
  console.log(`logUsuario/ uuid: ${uuid}`)
}

// acessar(123, "asds")
// acessar("123", "zzzzz")

// logUsuario("sdadsa")

type Moeda = "BRL" | "EUR" | "USD"
function comprarItem(moeda: Moeda) {
  console.log("moedal tal: ", moeda)
}

comprarItem("BRL")

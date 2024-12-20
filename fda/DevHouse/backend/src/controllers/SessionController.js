// metodos: index, show, update, store, destroy
/* 
index: listagem de sessoes
store: criar uma sessão
show: quando queremos listar uma unica sessao
update: quando queremos alterar alguma sessao
destroy: quando queremos deletar uma sessao
*/

import User from "../models/User"
import * as Yup from "yup"

class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
    })

    const { email } = req.body

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "falha na validação" })
    }

    // verifica se o user existe
    let user = await User.findOne({ email: email })

    if (!user) {
      user = await User.create({ email: email })
    }

    return res.json(user)
  }
}

export default new SessionController()

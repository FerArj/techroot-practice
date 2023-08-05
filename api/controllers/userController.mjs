import * as userModel from '../models/userModels.mjs';

const cadastrarUsuario = (req, res) => {
  const { nome, email, senha } = req.body;

  userModel.cadastrarUsuario(nome, email, senha)
    .then(() => {
      res.status(200).send();
    })
    .catch((erro) => {
      console.log(erro);
      res.status(500).send('Erro ao cadastrar usuário');
    });
};

export { cadastrarUsuario };

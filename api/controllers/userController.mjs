import * as userModel from '../models/userModels.mjs';

const cadastrarUsuario = (req, res) => {
  const { nome, email, senha } = req.body;

  userModel.cadastrarUsuario(nome, email, senha)
    .then(() => {
      res.status(200).send('Cadastro realizado com sucesso');
    })
    .catch((erro) => {
      res.status(500).send('Erro ao cadastrar usuário');
      console.log(erro)
    });
};

const autenticarUsuario = (req, res) => {
  const { nome, senha} = req.body;

  userModel.autenticarUsuario(nome, senha)
    .then((resposta) => {
      if(resposta.length > 0){
        res.status(200).send('login bem sucedido')
      } else {
        res.status(401).send('Usuário ou senha inválidos')
      }
    })
    .catch((erro) => {
      console.log(erro)
      res.status(500).send('Erro ao autenticar o usuário');
    });
};

export { cadastrarUsuario, autenticarUsuario };

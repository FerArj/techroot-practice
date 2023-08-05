import * as questionModel from '../models/questionModel.mjs'

const criarPergunta = (req, res) => {
    const { pergunta } = req.body;
    
    questionModel.criarPergunta(pergunta)
        .then(() =>{
            res.status(200).send('Pergunta criada com sucesso!')
        })
        .catch(() =>{
            res.status(400).send('Falha ao criar a pergunta')
        });
};

const criarResposta = (req, res) => {
    const { respostas } = req.body;
    
    questionModel.criarResposta(respostas)
        .then(() =>{
            res.status(200).send('Resposta criada com sucesso!')
        })
        .catch(() =>{
            res.status(400).send('Falha ao criar a resposta')
        });
};

export { criarPergunta, criarResposta }
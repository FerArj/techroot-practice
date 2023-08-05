import * as roomModel from '../models/roomModels.mjs'

const criarSala = (req, res) => {
    const { nome } = req.body;

    roomModel.criarSala(nome)
        .then(() => {
            res.status(200).send('Sala criada com sucesso');
        })
        .catch(() => {
            res.status(500).send('Erro ao criar a sala');
        });
};

export { criarSala }
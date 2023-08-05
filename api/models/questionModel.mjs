import * as connection from '../config/database.mjs'

export function criarPergunta (pergunta) {
    const instrucao = `
        INSERT INTO perguntas (pergunta) VALUES ('${pergunta}');
    `
    return connection.executar(instrucao)
}
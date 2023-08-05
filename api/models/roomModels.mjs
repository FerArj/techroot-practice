import * as connection from '../config/database.mjs'

export function criarSala (nome) {
    const instrucao = `
        INSERT INTO sala (nome) VALUES ('${nome}');
    `;
    return connection.executar(instrucao);
}
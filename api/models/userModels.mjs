import * as connection from '../config/database.mjs';

export function cadastrarUsuario(nome, email, senha) {
    const instrucao = `
    INSERT INTO usuario (nome, email, senha) VALUES ('${nome}', '${email}', '${senha}');
  `;
    return connection.executar(instrucao);
}

export function autenticarUsuario(nome, senha) {
    const instrucao = `
    SELECT * FROM usuario WHERE nome = '${nome}' and senha = '${senha}';
    `;
    return connection.executar(instrucao);
}


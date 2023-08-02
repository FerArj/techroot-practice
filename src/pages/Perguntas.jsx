import React from 'react'
import Questions from '../components/Questions/Questions'

const Perguntas = () => {

    return (
        <>
            <Questions.Input placeholder="Digite a pergunta"></Questions.Input>
            <Questions.Perguntas>
                <Questions.Input placeholder="Insira a primeira resposta"></Questions.Input>
                <Questions.Input placeholder="Insira a segunda resposta"></Questions.Input>
            </Questions.Perguntas>

            <Questions.Perguntas>
                <Questions.Input placeholder="Insira a terceira resposta"></Questions.Input>
                <Questions.Input placeholder="Insira a quarta resposta"></Questions.Input>
            </Questions.Perguntas>
            
            <Questions.Button>Salvar</Questions.Button>
        </>
    )
}

export default Perguntas
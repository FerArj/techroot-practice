import styled from 'styled-components'

export const Input = styled.input`
    background-color: white;
    display: flex;
    width: 50vw;
    height: 5vh;
    margin: auto;
    margin-top: 5vh;
    border-radius: 10px;
    font-size: 2rem;
    text-align: center;

`

export const Perguntas = styled.div`
    margin: auto;
    display: flex;
    margin-top:2vh;
    & input{
        width: 30vw;
        height: 10vh;
        margin-left: 5vw;
    }
`

export const Button = styled.button`
    background-color: #E6005A;
    border: none;
    margin: auto;
    margin-top: 5vh;
    align-items: center;
    display: flex;
    justify-content: center;
    width: 15vw;
    height: 8vh;
    color: white;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    font-size: 1rem;
`

export const Checkbox = styled.input`
    width: 100vw;
    height: 5vh;
    margin-top: 5vh;
    border-radius: 10px;
    margin-right: 10vw;
    outline: none;
`   
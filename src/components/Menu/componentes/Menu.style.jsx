import styled from 'styled-components'

export const Menu = styled.div`
    display: flex;
    width: 10vw;
    height: 50vh;
    margin: auto;
    margin-top: 30vh;
    width: 60vw;
    align-items: center;
    background-color: white;
    box-shadow: 10px 0px 30px -3px rgba(0,0,0,0.2);
    border: 1px solid #e8eaee;
`

export const Card = styled.div`
    align-items: center;
    background-color: #1F2A44;
    display: flex;
    height: 30vh;
    width: 50vw;
    justify-content: center;
    margin-left:2vw;
    margin-right: 2vw;
    padding: 1vw;
    flex-direction: column;
    cursor: pointer;
    & h1{
        text-align: center;
        color: white;
        margin-bottom: 1vh;
    }
`
export const Input = styled.input`
    width: 20vw;
    height: 5vh;
    border-radius: 5px;
    padding-left: 1vw;
    background-color: #F6F7F9;
    border: none;
    display: flex;
    outline: none;
    font-size: 1rem;
`

export const Button = styled.button`
    background-color: #E6005A;
    border: none;
    width: 15vw;
    height: 4vh;
    color: white;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    font-size: 1rem;
    margin: auto;
    display: flex;
`
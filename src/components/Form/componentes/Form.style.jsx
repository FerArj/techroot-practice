import styled from 'styled-components'

export const Form = styled.div`
    display: flex;
    margin: auto;
    align-items: center; 
    justify-content: center;
    flex-direction: column;
    width: 40vw;
    height: 50vh;
    background-color: red;
    margin-top: 30vh;
    background-color: white;
    box-shadow: 10px 0px 30px -3px rgba(0,0,0,0.2);
    border: 1px solid #e8eaee;
`

export const Input = styled.input` 
    width: 20vw;
    height: 5vh;
    border-radius: 5px;
    padding-left: 1vw;
    background-color: #F6F7F9;
    border: none;
    margin-top: 3vh;
`

export const Button = styled.button`
    background-color: #157AFF;
    border: none;
    margin-top: 5vh;
    width: 15vw;
    height: 4vh;
    color: white;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    font-size: 1rem;
`

export const Label = styled.label`
    font-size: 2rem;
    color: black;
`

export const Paragraph = styled.p`
    text-decoration: underline;
    margin-top: 1em;
    color: purple;
    cursor: pointer;
`
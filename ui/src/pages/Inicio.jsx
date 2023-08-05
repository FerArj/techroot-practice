import React, { useRef } from 'react'
import Menu from '../components/Menu/Menu'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Inicio = () => {

    const roomNameRef = useRef(null);
    const navigate = useNavigate();

    function criarSala() {
        axios.post("http://localhost:3000/rooms/criarSala",{
            nome: roomNameRef.current.value
        }).then((resp) => {
            if(resp.status == 200){
                navigate("/perguntas")
            }
        }).catch(err =>{
            console.log(err);
        });
    }

  return (
    <Menu.Container>
        <Menu.Card>
            <h1>Entrar em uma sala</h1>
        <Menu.Input placeholder="Código da sala" />
        <Menu.Button>Entrar</Menu.Button>
        </Menu.Card>

        <Menu.Card>
            <h1>Criar uma sala</h1>
        <Menu.Input placeholder="Nome da sala" ref={roomNameRef} />
        <Menu.Button onClick={criarSala}>Criar</Menu.Button>
        </Menu.Card>

    </Menu.Container>
  )
}

export default Inicio
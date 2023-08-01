import React, { useRef } from 'react'
import Form from '../components/Form'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Cadastro = () => {

  const userNameRef = useRef(null);
  const userEmailRef = useRef(null);
  const userPasswordRef = useRef(null);

  const navigate = useNavigate();

  function cadastrarUsuario(){
    axios.post("http://localhost/users/cadastrarUsuario", {
      nome: userNameRef.current.value,
      email: userEmailRef.current.value,
      senha: userPasswordRef.current.value
    }).then((resp) => {
      if(resp.status === 200){
        navigate("/*");
        console.log(resp)
      }
    }).catch((err) => {
        console.log(err);
    });
  }

  return (
    <Form.Container>
        <Form.Label>Inscreva-se!</Form.Label>
        <Form.Input type="text" ref={userNameRef} placeholder="nome completo" ></Form.Input>
        <Form.Input type="text" ref={userEmailRef} placeholder="seuemail@gmail.com" ></Form.Input>
        <Form.Input type="password" ref={userPasswordRef} placeholder="sua senha" ></Form.Input>
        <Form.Button onClick={cadastrarUsuario}>Cadastrar</Form.Button>
        <Form.Paragraph onClick={() => navigate("/*")}>Já tenho uma conta</Form.Paragraph>
    </Form.Container>
  )
}

export default Cadastro
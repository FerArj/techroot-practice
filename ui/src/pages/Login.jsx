import React, { useRef, useState } from 'react'
import Form from '../components/Form/Form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const Login = () => {

  const userNameRef = useRef(null);
  const userPasswordRef = useRef(null);

  const navigate = useNavigate();

  function logarUsuario () {
    axios.post("http://localhost:3000/users/autenticarUsuario", {
      nome: userNameRef.current.value,
      senha: userPasswordRef.current.value
    }).then((resp) => {
      if(resp.status === 200){
        navigate('/inicio')
      }
    }).catch(err => {
      console.log(err);
    })
  }

  return (
    <Form.Container>
        <Form.Label>Bem vindo de volta!</Form.Label>
        <Form.Input type="text" ref={userNameRef} placeholder="seuemail@gmail.com" />
        <Form.Input type="password" ref={userPasswordRef} placeholder="sua senha" />
        <Form.Button onClick={logarUsuario}>Acessar</Form.Button>
        <Form.Paragraph onClick={() => navigate("/cadastro")}>Não tenho uma conta</Form.Paragraph>
    </Form.Container>
  )
}

export default Login;
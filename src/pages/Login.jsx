import React from 'react'
import Form from '../components/Form';

const Login = () => {
  return (
    <Form.Container>
        <Form.Label>Bem vindo de volta!</Form.Label>
        <Form.Input type="text" placeholder="seuemail@gmail.com" ></Form.Input>
        <Form.Input type="password" placeholder="sua senha" ></Form.Input>
        <Form.Button>Acessar</Form.Button>
    </Form.Container>
  )
}

export default Login;
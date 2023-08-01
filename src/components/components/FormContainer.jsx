import React from 'react'
import { Form } from '../components/Form.style'

const FormContainer = ({children}) => {
  return (
    <Form>
        {children}
    </Form>
  )
}

export default FormContainer
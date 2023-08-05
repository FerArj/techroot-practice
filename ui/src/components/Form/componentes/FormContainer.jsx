import React from 'react'
import { Form } from './Form.style'

const FormContainer = ({children}) => {
  return (
    <Form>
        {children}
    </Form>
  )
}

export default FormContainer
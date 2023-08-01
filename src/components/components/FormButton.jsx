import React from 'react'
import { Button } from '../components/Form.style'

const FormButton = ({children, onClick}) => {
  return (
    <Button onClick={onClick}>
        {children}
    </Button>
  )
}

export default FormButton
import React from 'react'
import { Button } from './Form.style'

const FormButton = ({children, onClick}) => {
  return (
    <Button onClick={onClick}>
        {children}
    </Button>
  )
}

export default FormButton
import React from 'react'
import { Button } from '../components/Form.style'

const FormButton = ({children}) => {
  return (
    <Button>
        {children}
    </Button>
  )
}

export default FormButton
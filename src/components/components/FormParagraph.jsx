import React from 'react'
import { Paragraph } from './Form.style'

const FormParagraph = ({children, onClick}) => {
  return (
    <Paragraph onClick={onClick}>
        {children}
    </Paragraph>
    )
}

export default FormParagraph
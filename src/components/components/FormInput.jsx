import React, { forwardRef } from 'react'
import { Input } from '../components/Form.style'

const FormInput = forwardRef((props, ref) => {
  return (
    <Input {...props} ref={ref} />
  )
});

export default FormInput
import React, { forwardRef } from 'react'
import { Input } from './Menu.style'

const MenuInput = forwardRef((props, ref) => {
  return (
    <Input {...props} ref={ref}/>
  )
})

export default MenuInput
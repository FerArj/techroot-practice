import React from 'react'
import { Button } from './Menu.style'

const MenuButton = ({onClick, children}) => {
  return (
    <Button onClick={onClick}>
        {children}
    </Button>
  )
}

export default MenuButton
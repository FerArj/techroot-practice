import React from 'react'
import { Menu } from './Menu.style'

const MenuContainer = ({children}) => {
  return (
    <Menu>
        {children}
    </Menu>
  )
}

export default MenuContainer
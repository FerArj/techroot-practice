import React from 'react'
import { Card } from './Menu.style'

const MenuCard = ({children}) => {
  return (
    <Card>
        {children}
    </Card>
  )
}

export default MenuCard
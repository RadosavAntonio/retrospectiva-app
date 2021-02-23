import React from 'react'
import * as TMS from './topmenu.style'

export const TopMenu = () => {
  return(
    <TMS.Nav>
      <span />
      <TMS.TheLink to='/'>Home</TMS.TheLink>
      <TMS.TheLink to='/login'>Login</TMS.TheLink>
    </TMS.Nav>
  )
}
import React from 'react'
import * as HS from './home.style'

export const Home = () => {
  return (
    <HS.MainStyle>
      <HS.ColorG>Home Page</HS.ColorG>
      <p>Here is Baby Yoda.</p>
      <HS.BabyYoda src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" alt="Baby Yoda"/>
    </HS.MainStyle>
  )
}
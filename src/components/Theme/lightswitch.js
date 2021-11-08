import React, { useState } from "react"
import Layout from '../components/layout'
import styled from 'styled-components'
import LightButton from './toggleLightButton'

const Lightswitch = () => {
  //light off by default - background black with white text
  const [lightOn,toggleLight] = useState(false)
  
  let bgColor = '#333'
  let textColor = '#fff'
  
  lightOn = {lightOn}
  onClick={() => toggleLight(!lightOn) }
  
  {bgColor = lightOn ? '#fff' : '#333'}
  {textColor = lightOn ? '#333' : '#fff'}*/
  document.querySelector('*').style.backgroundColor = 'bgColor';
  document.querySelector('*').style.color = 'textColor';
	
  return(
	<Layout>
	  <LightButton />
	</Layout>
  )
  
}

export default Lightswitch
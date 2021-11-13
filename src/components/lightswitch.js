import React, { useState } from "react"
import styled from 'styled-components'

const Lightswitch = () => {
  //light off by default - background black with white text
  const [lightOn,toggleLight] = useState(false)
  
  const bgColor = '#333';
  const textColor = '#fff';
  
  const Button = styled.button``
  
  return(
	<>
	  lightOn = {lightOn}
	  onClick={() => toggleLight(!lightOn) }

	  {bgColor = lightOn ? '#fff' : '#333'}
	  {textColor = lightOn ? '#333' : '#fff'}
	  document.querySelector('*').style.backgroundColor = 'bgColor';
	  document.querySelector('*').style.color = 'textColor';
	  <Button>Change theme</Button>
	</>
  );
}

export default Lightswitch
import React, { useState } from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../components/globalStyles";
import { lightTheme, darkTheme } from "../components/themes"

const IndexPage = () => {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  
  return (
	<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}> 
	  <Layout>
		<>
		<GlobalStyles/>
	      <button onClick={toggleTheme}>Toggle theme</button>
          <p>I'm making this by following the Gatsby Tutorial.</p>
          <StaticImage src="../images/giraffe1.jpg"/>
        </>
	  </Layout>
	</ThemeProvider>
  )
}

export default IndexPage
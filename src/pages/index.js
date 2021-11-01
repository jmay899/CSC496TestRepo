import React, { useState} from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

const IndexPage = () => {
  return (
    <Layout>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Bob the Giraffe looking heroicly to the side with a blue sky background"
        src="../images/giraffe1.jpg"
      />
    </Layout>
  )
}

export default IndexPage
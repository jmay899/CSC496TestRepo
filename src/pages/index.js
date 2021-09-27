import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Bob the Giraffe looking heroicly to the side with a blue sky background"
        src="../images/giraffe1.jpg"
      />
    </Layout>
  )
}

export default IndexPage
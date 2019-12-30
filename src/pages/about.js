import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"

const AboutPage = () => {
  return (
    <Layout>
      <h1>About</h1>
      <p>
        Bio: CFA charterholder with experience in managing an IT business
        starting from the early stage
      </p>
      <p>
        <Link to="/contact">Want to work with me? Reach out.</Link>
      </p>
    </Layout>
  )
}

export default AboutPage

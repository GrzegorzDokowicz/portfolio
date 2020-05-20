import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <h1>This is main page ! Hello !</h1>
    <Link to="/404">Go to page 2</Link>
  </Layout>
)

export default IndexPage

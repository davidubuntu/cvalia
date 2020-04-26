import React from "react"
import { Link } from "gatsby"

import { Layout, SEO, Image } from "../components"

const IndexPage = () => (
  <Layout>
    <SEO title="About" />
    <div style={{ maxWidth: `100vw` }}>
      <Image />
    </div>
    <Link to="/projects/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

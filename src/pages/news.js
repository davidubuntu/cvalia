import React from "react"
import { Link } from "gatsby"

import { Layout, SEO } from "../components"

const News = () => (
  <Layout>
    <SEO title="News" />
    <h1>News</h1>
    <Link to="/">Back to Home</Link>
  </Layout>
)

export default News

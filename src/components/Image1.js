import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
const Image = props => {
  const { filename, alt } = props
  const data = useStaticQuery(graphql`
    query {
      images: allFile {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              sizes(maxWidth: 600) {
                ...GatsbyImageSharpSizes
              }
            }
          }
        }
      }
    }
  `)
  const image = data.images.edges.find(n => {
    return n.node.relativePath.includes(filename)
  })
  if (!image) {
    return null
  }

  const imageSizes = image.node.childImageSharp.sizes
  return <Img alt={alt} sizes={imageSizes} />
}
export default Image

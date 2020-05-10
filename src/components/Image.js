import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */
const ImageWrapper = styled.div`
  max-width: ${props => props.maxWidth};
  max-height: ${props => props.maxHeight};
  .gatsby-image-wrapper {
    width: ${props => props.width};
    height: ${props => props.height};
  }
`

const Image = props => {
  const { alt, filename, maxWidth, maxHeight, width, height } = props
  const data = useStaticQuery(graphql`
    query {
      bgHome: file(relativePath: { eq: "bg-home.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imperial1: file(relativePath: { eq: "imperial-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      margot5: file(relativePath: { eq: "margot-5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yoga23: file(relativePath: { eq: "yoga-23.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      spa3: file(relativePath: { eq: "spa-3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      highSchool3: file(relativePath: { eq: "high-school-3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  console.log(width, height)
  return (
    <ImageWrapper
      maxWidth={maxWidth}
      maxHeight={maxHeight}
      height={height}
      width={width}
    >
      <Img alt={alt} fluid={data[`${filename}`].childImageSharp.fluid} />
    </ImageWrapper>
  )
}

export default Image

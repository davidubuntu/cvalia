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
          fluid(maxWidth: 2048, maxHeight: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      margot5: file(relativePath: { eq: "margot-5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048, maxHeight: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yoga23: file(relativePath: { eq: "yoga-23.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048, maxHeight: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      spa3: file(relativePath: { eq: "spa-3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048, maxHeight: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      highSchool3: file(relativePath: { eq: "high-school-3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048, maxHeight: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      studentHouseSharingRoom: file(
        relativePath: { eq: "student-house-sharing-room.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2048, maxHeight: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imperialKitchen1: file(
        relativePath: { eq: "imperial/imperial-kitchen-1.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imperialKitchen2: file(
        relativePath: { eq: "imperial/imperial-kitchen-2.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imperialKitchen3: file(
        relativePath: { eq: "imperial/imperial-kitchen-3.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imperialKitchen4: file(
        relativePath: { eq: "imperial/imperial-kitchen-4.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imperialLivingRoom1: file(
        relativePath: { eq: "imperial/imperial-living-room-1.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imperialLivingRoom2: file(
        relativePath: { eq: "imperial/imperial-living-room-2.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imperialLivingRoom3: file(
        relativePath: { eq: "imperial/imperial-living-room-3.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imperialLivingRoom4: file(
        relativePath: { eq: "imperial/imperial-living-room-4.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      highSchoolBuffet1: file(
        relativePath: { eq: "high-school/high-school-buffet-1.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      highSchoolBuffet2: file(
        relativePath: { eq: "high-school/high-school-buffet-2.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      highSchoolClassRoomEntrance: file(
        relativePath: { eq: "high-school/high-school-classroom-entrance.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      highSchoolClassRoom: file(
        relativePath: { eq: "high-school/high-school-classroom.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      highSchoolGarden: file(
        relativePath: { eq: "high-school/high-school-garden.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      highSchoolLaboratory1: file(
        relativePath: { eq: "high-school/high-school-laboratory-1.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      highSchoolLaboratory2: file(
        relativePath: { eq: "high-school/high-school-laboratory-2.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      highSchoolLibrary: file(
        relativePath: { eq: "high-school/high-school-library.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      highSchoolRestRoom1: file(
        relativePath: { eq: "high-school/high-school-rest-room-1.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      highSchoolRestRoom2: file(
        relativePath: { eq: "high-school/high-school-rest-room-2.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      highSchoolWorkshop: file(
        relativePath: { eq: "high-school/high-school-workshop.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  console.log("filenamww", filename)
  const imageObject = data[`${filename}`].childImageSharp
  const typeImage = imageObject.hasOwnProperty("fluid") ? "fluid" : "fixed"

  return (
    <ImageWrapper
      maxWidth={maxWidth}
      maxHeight={maxHeight}
      height={height}
      width={width}
    >
      {typeImage === "fluid" ? (
        <Img alt={alt} fluid={data[`${filename}`].childImageSharp.fluid} />
      ) : (
        <Img alt={alt} fixed={data[`${filename}`].childImageSharp.fixed} />
      )}
    </ImageWrapper>
  )
}

export default Image

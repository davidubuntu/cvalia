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
  img {
    border-radius: ${props => props.borderRadius};
  }
`

const Image = props => {
  const {
    alt,
    filename,
    maxWidth,
    maxHeight,
    width,
    height,
    borderRadius,
  } = props
  const data = useStaticQuery(graphql`
    query {
      bgHome: file(relativePath: { eq: "bg-home.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imperialMain: file(relativePath: { eq: "imperial-main.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048, maxHeight: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      margotMain: file(relativePath: { eq: "margot-main.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048, maxHeight: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yogaMain: file(relativePath: { eq: "yoga-main.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048, maxHeight: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      spaMain: file(relativePath: { eq: "spa-main.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048, maxHeight: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      highSchoolMain: file(relativePath: { eq: "high-school-main.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048, maxHeight: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      studentHousingMain: file(
        relativePath: { eq: "student-housing-main.jpg" }
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
      imperialRoom1: file(
        relativePath: { eq: "imperial/imperial-room-1.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imperialRoom2: file(
        relativePath: { eq: "imperial/imperial-room-2.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imperialRoom3: file(
        relativePath: { eq: "imperial/imperial-room-3.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imperialRoom4: file(
        relativePath: { eq: "imperial/imperial-room-4.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imperialRoom5: file(
        relativePath: { eq: "imperial/imperial-room-5.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imperialRoom6: file(
        relativePath: { eq: "imperial/imperial-room-6.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imperialBathroom1: file(
        relativePath: { eq: "imperial/imperial-bathroom-1.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imperialBathroom2: file(
        relativePath: { eq: "imperial/imperial-bathroom-2.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imperialBathroom3: file(
        relativePath: { eq: "imperial/imperial-bathroom-3.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imperialToilet: file(
        relativePath: { eq: "imperial/imperial-toilet.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imperialPlan: file(relativePath: { eq: "imperial/imperial-plan.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imperialRoom7: file(
        relativePath: { eq: "imperial/imperial-room-7.jpg" }
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
      highSchoolPlan1: file(
        relativePath: { eq: "high-school/high-school-plan-1.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      highSchoolPlan2: file(
        relativePath: { eq: "high-school/high-school-plan-2.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      highSchoolPlan3: file(
        relativePath: { eq: "high-school/high-school-plan-3.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      highSchoolPlan4: file(
        relativePath: { eq: "high-school/high-school-plan-4.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yoga1: file(relativePath: { eq: "yoga/yoga-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yoga2: file(relativePath: { eq: "yoga/yoga-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yoga3: file(relativePath: { eq: "yoga/yoga-3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yoga4: file(relativePath: { eq: "yoga/yoga-4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yoga5: file(relativePath: { eq: "yoga/yoga-5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yoga6: file(relativePath: { eq: "yoga/yoga-6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yoga7: file(relativePath: { eq: "yoga/yoga-7.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yoga8: file(relativePath: { eq: "yoga/yoga-8.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yoga9: file(relativePath: { eq: "yoga/yoga-9.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yoga10: file(relativePath: { eq: "yoga/yoga-10.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yoga11: file(relativePath: { eq: "yoga/yoga-11.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yoga12: file(relativePath: { eq: "yoga/yoga-12.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yoga13: file(relativePath: { eq: "yoga/yoga-13.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yoga14: file(relativePath: { eq: "yoga/yoga-14.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yoga15: file(relativePath: { eq: "yoga/yoga-15.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      margot1: file(relativePath: { eq: "margot/margot-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      margot2: file(relativePath: { eq: "margot/margot-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      margot3: file(relativePath: { eq: "margot/margot-3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      margot4: file(relativePath: { eq: "margot/margot-4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      margot5: file(relativePath: { eq: "margot/margot-5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      margot6: file(relativePath: { eq: "margot/margot-6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      spa1: file(relativePath: { eq: "spa/spa-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const imageObject = data[`${filename}`].childImageSharp
  const typeImage = imageObject.hasOwnProperty("fluid") ? "fluid" : "fixed"

  return (
    <ImageWrapper
      maxWidth={maxWidth}
      maxHeight={maxHeight}
      height={height}
      width={width}
      borderRadius={borderRadius}
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

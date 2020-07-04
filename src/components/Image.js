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
      contactPhoto: file(relativePath: { eq: "contact-claudia.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
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
      imperialBedRoom1: file(
        relativePath: { eq: "imperial/imperial-bed-room-1.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imperialBedRoom2: file(
        relativePath: { eq: "imperial/imperial-bed-room-2.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imperialBedRoom3: file(
        relativePath: { eq: "imperial/imperial-bed-room-3.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imperialBedRoom4: file(
        relativePath: { eq: "imperial/imperial-bed-room-4.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imperialBedRoom5: file(
        relativePath: { eq: "imperial/imperial-bed-room-5.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imperialBedRoom6: file(
        relativePath: { eq: "imperial/imperial-bed-room-6.jpg" }
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
      imperialBedRoom7: file(
        relativePath: { eq: "imperial/imperial-bed-room-7.jpg" }
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
      yogaShop1: file(relativePath: { eq: "yoga/yoga-shop-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yogaShop2: file(relativePath: { eq: "yoga/yoga-shop-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yogaShop3: file(relativePath: { eq: "yoga/yoga-shop-3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yogaShop4: file(relativePath: { eq: "yoga/yoga-shop-4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yogaHall1: file(relativePath: { eq: "yoga/yoga-hall-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yogaHall2: file(relativePath: { eq: "yoga/yoga-hall-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yogaHall3: file(relativePath: { eq: "yoga/yoga-hall-3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yogaShala1: file(relativePath: { eq: "yoga/yoga-shala-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yogaShala2: file(relativePath: { eq: "yoga/yoga-shala-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yogaShala3: file(relativePath: { eq: "yoga/yoga-shala-3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yogaShala4: file(relativePath: { eq: "yoga/yoga-shala-4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yogaTea1: file(relativePath: { eq: "yoga/yoga-tea-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yogaTea2: file(relativePath: { eq: "yoga/yoga-tea-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yogaTea3: file(relativePath: { eq: "yoga/yoga-tea-3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yogaTea4: file(relativePath: { eq: "yoga/yoga-tea-4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      margotBedRoom1: file(
        relativePath: { eq: "margot/margot-bed-room-1.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      margotBedRoom2: file(
        relativePath: { eq: "margot/margot-bed-room-2.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      margotChildrenRoom: file(
        relativePath: { eq: "margot/margot-children-room.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      margotKitchen: file(relativePath: { eq: "margot/margot-kitchen.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      margotLivingRoom: file(
        relativePath: { eq: "margot/margot-living-room.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      margotPlaySpace: file(
        relativePath: { eq: "margot/margot-play-space.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      spaPool1: file(relativePath: { eq: "spa/spa-pool-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      spaPool2: file(relativePath: { eq: "spa/spa-pool-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      spaPool3: file(relativePath: { eq: "spa/spa-pool-3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      spaHall1: file(relativePath: { eq: "spa/spa-hall-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      spaHall2: file(relativePath: { eq: "spa/spa-hall-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      spaHall3: file(relativePath: { eq: "spa/spa-hall-3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      spaPlan1: file(relativePath: { eq: "spa/spa-plan-1.png" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      spaPlan2: file(relativePath: { eq: "spa/spa-plan-2.png" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      spaPlan3: file(relativePath: { eq: "spa/spa-plan-3.png" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      spaPlan4: file(relativePath: { eq: "spa/spa-plan-4.png" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      studentHousingRoom1: file(
        relativePath: { eq: "student-housing/student-housing-room-1.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      studentHousingRoom2: file(
        relativePath: { eq: "student-housing/student-housing-room-2.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      studentHousingRoom3: file(
        relativePath: { eq: "student-housing/student-housing-room-3.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      studentHousingRoom4: file(
        relativePath: { eq: "student-housing/student-housing-room-4.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      studentHousingCanteen1: file(
        relativePath: { eq: "student-housing/student-housing-canteen-1.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      studentHousingCanteen2: file(
        relativePath: { eq: "student-housing/student-housing-canteen-2.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      studentHousingCanteen3: file(
        relativePath: { eq: "student-housing/student-housing-canteen-3.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      studentHousingPlan1: file(
        relativePath: { eq: "student-housing/student-housing-plan-1.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      studentHousingPlan2: file(
        relativePath: { eq: "student-housing/student-housing-plan-2.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      studentHousingPlan3: file(
        relativePath: { eq: "student-housing/student-housing-plan-3.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      studentHousingPlan4: file(
        relativePath: { eq: "student-housing/student-housing-plan-4.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      studentHousingPlan5: file(
        relativePath: { eq: "student-housing/student-housing-plan-5.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      studentHousingPlan6: file(
        relativePath: { eq: "student-housing/student-housing-plan-6.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      studentHousingPlan7: file(
        relativePath: { eq: "student-housing/student-housing-plan-7.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      studentHousingHall1: file(
        relativePath: { eq: "student-housing/student-housing-hall-1.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      studentHousingHall2: file(
        relativePath: { eq: "student-housing/student-housing-hall-2.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      studentHousingHall3: file(
        relativePath: { eq: "student-housing/student-housing-hall-3.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      studentHousingHall4: file(
        relativePath: { eq: "student-housing/student-housing-hall-4.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      studentHousingCommonArea1: file(
        relativePath: {
          eq: "student-housing/student-housing-common-area-1.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      studentHousingCommonArea2: file(
        relativePath: {
          eq: "student-housing/student-housing-common-area-2.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      studentHousingCommonArea3: file(
        relativePath: {
          eq: "student-housing/student-housing-common-area-3.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      studentHousingBoxRoom1: file(
        relativePath: { eq: "student-housing/student-housing-box-room-1.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      studentHousingBoxRoom2: file(
        relativePath: { eq: "student-housing/student-housing-box-room-2.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      studentHousingBoxRoom3: file(
        relativePath: { eq: "student-housing/student-housing-box-room-3.jpg" }
      ) {
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

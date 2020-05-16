import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Image from "../components/Image"
import styled from "styled-components"
import media from "../styles/media"
import SliderImages from "../components/SliderImages"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import {
//   faChevronRight,
//   faChevronLeft,
// } from "@fortawesome/free-solid-svg-icons"
// import Slider from "react-slick"
// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"

// const CustomSlideButton = styled.div`
//   display: none;
//   .svg-inline--fa.fa-w-10 {
//     color: #41413c;
//     height: 20px;
//     width: 20px;
//   }
//   :before {
//     font-size: 0;
//   }
//   ${media.tablet`
//    display: block;
//    right: ${props => props.right && "-6rem"};
//    left: ${props => props.left && "-6rem"};
//  `};
//   ${media.laptopL`
//     display: block;
//     right: ${props => props.right && "-10rem"};
//     left: ${props => props.left && "-10rem"};
//  `};
// `
// const NextArrow = props => {
//   const { className, onClick } = props
//   return (
//     <CustomSlideButton className={className} onClick={onClick} right>
//       <FontAwesomeIcon icon={faChevronRight} />
//     </CustomSlideButton>
//   )
// }
// const PrevArrow = props => {
//   const { className, onClick } = props
//   return (
//     <CustomSlideButton className={className} onClick={onClick} left>
//       <FontAwesomeIcon icon={faChevronLeft} />
//     </CustomSlideButton>
//   )
// }

// const settings = {
//   dots: true,
//   fade: false,
//   infinite: true,
//   autoplay: false,
//   lazyLoad: true,
//   accessibility: false,
//   draggable: true,
//   centerMode: false,
//   arrows: true,
//   autoplay: false,
//   pauseOnHover: true,
//   autoplaySpeed: 2000,
//   adaptiveHeight: false,
//   nextArrow: <NextArrow />,
//   prevArrow: <PrevArrow />,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   responsive: [
//     {
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//       },
//     },
//   ],
// }

const ProjectDetail = ({ data }) => {
  const project = data.markdownRemark.frontmatter
  const images = project.images
  const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      "ProjectMedia"
      "ProjectInfo";
    gap: 3rem 0rem;
    padding: 0 2rem 2rem;
    ${media.tablet`
      padding: 0 5rem 5rem;
    `};
    ${media.laptopL`
      padding: 0 10rem 10rem;
    `};
  `
  const ProjectInfo = styled.div`
    grid-area: ProjectInfo;
    display: grid;
    justify-self: center;
  `
  const ProjectMedia = styled.div`
    grid-area: ProjectMedia;
    justify-self: center;
  `
  const SliderWrapper = styled.div`
    width: 80vw;
    ${media.tablet`
      width: 75vw;
    `};
    ${media.laptopL`
      width: 52vw;
    `};
  `

  return (
    <Layout>
      <Grid>
        <ProjectMedia>
          <SliderWrapper>
            <SliderImages>
              {images.map(image => (
                <Image key={image.name} filename={image.name} />
              ))}
            </SliderImages>
          </SliderWrapper>
        </ProjectMedia>
        <ProjectInfo>
          <h3>{project.title}</h3>
          <p>{project.info.description}</p>
        </ProjectInfo>
      </Grid>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        image
        slug
        info {
          type
          place
          description
        }
        images {
          name
        }
      }
    }
  }
`
export default ProjectDetail

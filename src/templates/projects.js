import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Image from "../components/Image"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const CustomSlideButton = styled.div`
  right: ${props => props.right};
  left: ${props => props.left};
  .svg-inline--fa.fa-w-10 {
    color: #41413c;
    height: 20px;
    width: 20px;
  }
  :before {
    font-size: 0;
  }
`

const NextArrow = props => {
  const { className, style, onClick } = props
  return (
    <CustomSlideButton className={className} onClick={onClick} right={"-10rem"}>
      <FontAwesomeIcon icon={faChevronRight} />
    </CustomSlideButton>
  )
}
const PrevArrow = props => {
  const { className, style, onClick } = props
  return (
    <CustomSlideButton className={className} onClick={onClick} left={"-10rem"}>
      <FontAwesomeIcon icon={faChevronLeft} />
    </CustomSlideButton>
  )
}

const settings = {
  dots: true,
  fade: false,
  infinite: true,
  autoplay: false,
  lazyLoad: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  accessibility: false,
  centerMode: false,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
}

const ProjectDetail = ({ data }) => {
  const project = data.markdownRemark.frontmatter
  const images = project.images
  const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      "ProjectInfo"
      "ProjectMedia";
    gap: 3px 3px;
    padding: 6rem;
  `
  const ProjectInfo = styled.div`
    grid-area: ProjectInfo;
    justify-self: center;
  `
  const ProjectMedia = styled.div`
    grid-area: ProjectMedia;
    align-items: center;
    justify-self: center;
  `
  const SliderWrapper = styled.div`
    width: 50vw;
    align-self: center;
    justify-self: center;
  `

  return (
    <Layout>
      <Grid>
        <ProjectInfo>
          <h1>{project.title}</h1>
          <p>{project.info.description}</p>
        </ProjectInfo>
        <ProjectMedia>
          <SliderWrapper>
            <Slider {...settings} className="overflow-hidden">
              {images.map(image => (
                <Image key={image.name} filename={image.name} />
              ))}
            </Slider>
          </SliderWrapper>
        </ProjectMedia>
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

import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Image from "../components/Image"
import styled from "styled-components"
import media from "../styles/media"
import SliderImages from "../components/SliderImages"
import { StyledButton } from "../components/common/StyledLink"

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    "ProjectFilters"
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
    width: 55vw;
  `};
`
const Filters = styled.div`
  grid-area: ProjectFilters;
  gap: 0.2rem;
  font-family: "Montserrat-Light";
  margin: 1rem 0;
  display: grid;
  span {
    margin: 0 3rem;
  }
`

const ProjectDetail = ({ data }) => {
  const [initialImages, setInitialImages] = useState([])
  const [filteredImages, setFilteredImages] = useState([])
  const project = data.markdownRemark.frontmatter
  const filters = project.filters
  const images = project.images
  useEffect(() => {
    setInitialImages(images)
    setFilteredImages(images)
  }, [])

  const handleFilter = filter => {
    const filterType = filter.toUpperCase()
    debugger
    if (filterType === "ALL") {
      setFilteredImages(initialImages)
    } else {
      const filteredImages = initialImages.filter(image => {
        return image.name.toUpperCase().includes(filterType)
      })
      setFilteredImages(filteredImages)
    }
  }

  return (
    <Layout>
      <Grid>
        <Filters>
          {filters.map(f => (
            <StyledButton key={f.type} onClick={() => handleFilter(f.type)}>
              {f.name}
            </StyledButton>
          ))}
        </Filters>
        <ProjectMedia>
          <SliderWrapper>
            <SliderImages>
              {filteredImages.map(image => (
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
        filters {
          name
          type
        }
      }
    }
  }
`
export default ProjectDetail

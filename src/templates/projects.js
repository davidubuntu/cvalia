import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Image from "../components/Image"
import styled, { css } from "styled-components"
import media from "../styles/media"
import SliderImages from "../components/SliderImages"

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    "filters"
    "media"
    "title"
    "info";
  padding: 0 2rem 2rem;
  gap: 3rem;
  ${media.tablet`
      gap: 4rem 0rem;
      padding: 0 5rem 5rem;
      grid-template-areas:
        "title"
        "filters"
        "media"
        "info";
  `};
  ${media.laptopL`
    gap: 4rem 0rem;
    padding: 0 10rem 10rem;
    grid-template-areas:
        "title"
        "filters"
        "media"
        "info";
  `};
`

const ProjectTitle = styled.div`
  grid-area: title;
  justify-self: left;
  font-family: "Montserrat-Medium";
  span {
    font-size: 1rem;
  }
  ${media.tablet`
    justify-self: center;
    span {
      font-size: 2rem;
    }
  `};
  ${media.laptopL` 
    justify-self: center;
    span{
        font-size: 2rem;
      }
  `};
`
const ProjectInfo = styled.div`
  grid-area: info;
  display: grid;
  justify-self: center;
`
const ProjectMedia = styled.div`
  grid-area: media;
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
  grid-area: filters;
  display: grid;
  height: 100%;
  gap: 0rem;
  grid-template-columns: auto;
  grid-auto-flow: column;
  align-items: center;
  justify-self: center;
  width: 80vw;
  overflow-x: scroll;
  ${media.tablet`
     gap: 1.5rem;
     overflow-x: hidden;
     width: auto;
  `};
  ${media.laptopL`
    gap: 1.5rem;
    overflow-x: hidden;
    width: auto;
  `};
  a:visited {
    border: none;
  }
`

const FilterButton = styled.a`
  font-size: 8px;
  text-align: center;
  min-width: max-content;
  border: none;
  padding: 0.8rem;
  letter-spacing: 0.2rem;
  cursor: pointer;
  font-family: "Montserrat-SemiBold";
  &:hover {
    border: none;
  }
  ${media.tablet`
    font-size: 10px; 
    border: 1px solid #c1bab0;
    border-radius: 0.5rem;
    padding: 0.5rem 0.9rem;
    font-family: "Montserrat-Light";
    ${props =>
      props.selected &&
      css`
        border-radius: 0.5rem;
        background-color: #b2afac;
        color: white;
        font-family: "Montserrat-SemiBold";
      `}
  `};
  ${media.laptopL`
    font-size: 10px;
    border: 1px solid #c1bab0;
    border-radius: 0.5rem;
    padding: 0.5rem 0.9rem;  
    font-family: "Montserrat-Light";
    ${props =>
      props.selected &&
      css`
        border-radius: 0.5rem;
        border: none;
        background-color: #b2afac;
        color: white;
        font-family: "Montserrat-SemiBold";
      `}
  `};
`

const ProjectDetail = ({ data }) => {
  const [initialImages, setInitialImages] = useState([])
  const [filteredImages, setFilteredImages] = useState([])
  const [selectedFilter, setSelectedFilter] = useState("ALL")
  const project = data.markdownRemark.frontmatter
  const filters = project.filters
  const images = project.images
  useEffect(() => {
    setInitialImages(images)
    setFilteredImages(images)
  }, [images])

  const handleFilter = filter => {
    const filterType = filter.toUpperCase()
    setSelectedFilter(filterType)
    if (filterType === "ALL") {
      setFilteredImages(initialImages)
    } else {
      const filteredImages = initialImages.filter(image => {
        return image.name.toUpperCase().includes(filterType)
      })
      setFilteredImages(filteredImages)
    }
  }
  console.log(selectedFilter, filters)
  return (
    <Layout>
      <Grid>
        <ProjectTitle>
          <span>{project.title}</span>
        </ProjectTitle>
        <Filters>
          {filters.map(f => (
            <FilterButton
              selected={selectedFilter === f.type.toUpperCase()}
              key={f.type}
              onClick={() => handleFilter(f.type)}
            >
              {f.name.toUpperCase()}
            </FilterButton>
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

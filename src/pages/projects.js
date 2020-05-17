import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import styled from "styled-components"
import Image from "../components/Image"
import { StyledLink, StyledButton } from "../components/common/StyledLink"
import media from "../styles/media"
import { Link } from "gatsby"

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    "filters"
    "main";
  padding: 0 3rem 3rem;
  ${media.tablet`
    gap: 1rem;
    padding: 0 5rem 5rem;
  `};
  ${media.laptopL`
    gap: 1rem;
    padding: 0 10rem 10rem;
  `};
`
const Filters = styled.div`
  grid-area: filters;
  display: grid;
  gap: 0.8rem;
  font-family: "Montserrat-Light";
  margin: 3rem 0;
`
const Main = styled.div`
  grid-area: main;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 1fr);
  gap: 3rem 3rem;
  ${media.tablet`
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 4rem 4rem;
  `};
  ${media.laptopL`
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 6rem 6rem;
  `};
`

const Project = styled.div``

const ProjectInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1rem;
  font-family: "Montserrat-Light";
  padding: 2rem 0;
  a {
    font-family: "Montserrat-Bold";
  }
  font-size: 13px;
`

const Projects = ({ data }) => {
  const [projects, setProjects] = useState([])
  const [filteredProjects, setFilteredProjects] = useState([])
  useEffect(() => {
    const initialProjects = data.projectDetail.edges.map(
      e => e.node.frontmatter
    )
    setProjects(initialProjects)
    setFilteredProjects(initialProjects)
  }, [data.projectDetail.edges])

  const filters = data.projects.edges[0].node.frontmatter.filters
  const handleFilter = filter => {
    const filterType = filter.toUpperCase()

    if (filterType === "ALL") {
      setFilteredProjects(projects)
    } else {
      const filteredProjects = projects.filter(
        project => project.info.type.toUpperCase() === filterType
      )
      setFilteredProjects(filteredProjects)
    }
  }
  return (
    <Layout>
      <SEO title="Projects" />
      <Grid>
        <Filters>
          {filters.map(f => (
            <StyledButton key={f.type} onClick={() => handleFilter(f.type)}>
              {f.name}
            </StyledButton>
          ))}
        </Filters>
        <Main>
          {filteredProjects
            .sort((a, b) => a.position - b.position)
            .map((project, i) => {
              return (
                <Project key={project.title} className={`project${i + 1}`}>
                  <Link to={`/projects/${project.slug}`}>
                    <Image alt={project.title} filename={project.image} />
                  </Link>
                  <ProjectInfo>
                    <StyledLink to={`/projects/${project.slug}`}>
                      {project.title}
                    </StyledLink>
                    <span>{project.info.place}</span>
                  </ProjectInfo>
                </Project>
              )
            })}
        </Main>
      </Grid>
    </Layout>
  )
}

export default Projects

export const query = graphql`
  query {
    projectDetail: allMarkdownRemark(
      filter: { frontmatter: { pageKey: { eq: "project-detail" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            image
            slug
            position
            info {
              place
              type
            }
          }
        }
      }
    }
    projects: allMarkdownRemark(
      filter: { frontmatter: { pageKey: { eq: "projects" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            filters {
              name
              type
            }
          }
        }
      }
    }
  }
`

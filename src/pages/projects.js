import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import styled from "styled-components"
import Image from "../components/Image"
import { StyledLink, StyledButton } from "../components/common/StyledLink"

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    "filters . ."
    "main main main";
  margin: 6rem 0;
  gap: 6rem;
`
const Filters = styled.div`
  grid-area: filters;
  display: grid;
  padding: 0 6rem;
  gap: 0.8rem;
  font-family: "Montserrat-Light";
`
const Main = styled.div`
  grid-area: main;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 6rem 6rem;
  grid-template-areas:
    "project1 project2 project3"
    "project4 project5 project6";
  justify-self: center;
  .project1 {
    grid-area: project1;
  }

  .project2 {
    grid-area: project2;
  }
  .project3 {
    grid-area: project3;
  }
  .project4 {
    grid-area: project4;
  }
  .project5 {
    grid-area: project5;
  }
  .project6 {
    grid-area: project6;
  }
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
        project => project.type.toUpperCase() === filterType
      )
      setFilteredProjects(filteredProjects)
    }
  }
  return (
    <Layout>
      <SEO title="Projects" />
      <Grid>
        <Filters>
          {filters.map(f => {
            return (
              <StyledButton key={f.type} onClick={() => handleFilter(f.type)}>
                {f.name}
              </StyledButton>
            )
          })}
        </Filters>
        <Main>
          {filteredProjects.map((p, i) => {
            return (
              <Project key={i} className={`project${i + 1}`}>
                <Image
                  width={"22rem"}
                  height={"22rem"}
                  alt="imperial-salon"
                  filename={p.image}
                />
                <ProjectInfo>
                  <StyledLink to={`/projects/${p.slug}`}>{p.title}</StyledLink>
                  <span>{p.place}</span>
                </ProjectInfo>
              </Project>
            )
          })}
          {/* <Project className={"project1"}>
            <Image alt="imperial-salon" filename={"imperial1"} />
            <ProjectInfo>
              <span>Imperial</span>
              <span>Madrid</span>
            </ProjectInfo>
          </Project>
          <Project className={"project2"}>
            <Image alt="margot-room" filename={"margot5"} />
            <ProjectInfo>
              <span>Margot House</span>
              <span>California</span>
            </ProjectInfo>
          </Project>
          <Project className={"project3"}>
            <Image alt="yoga-room" filename={"yoga23"} />
            <ProjectInfo>
              <span>Yoga Shala</span>
              <span>Madrid</span>
            </ProjectInfo>
          </Project>
          <Project className={"project4"}>
            <Image alt="spa-room" filename={"spa3"} />
            <ProjectInfo>
              <span>Spa</span>
              <span>Madrid</span>
            </ProjectInfo>
          </Project>
          <Project className={"project5"}>
            <Image alt="yoga-room" filename={"yoga23"} />
            <ProjectInfo>
              <span>Imperial</span>
              <span>Madrid</span>
            </ProjectInfo>
          </Project>
          <Project className={"project6"}>
            <Image alt="highschool" filename={"highSchool3"} />
            <ProjectInfo>
              <span>Imperial</span>
              <span>Madrid</span>
            </ProjectInfo>
          </Project> */}
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
            place
            type
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

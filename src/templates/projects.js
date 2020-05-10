import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import styled from "styled-components"

const ProjectDetail = ({ data }) => {
  const project = data.markdownRemark.frontmatter
  console.log(data)

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
  `
  return (
    <Layout>
      <Grid>
        <ProjectInfo>
          <h1>{project.title}</h1>
          <p>{project.info.description}</p>
        </ProjectInfo>
        <ProjectMedia></ProjectMedia>
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
      }
    }
  }
`
export default ProjectDetail

import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import styled from "styled-components"
import Image from "../components/Image"

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    "filters . ."
    "main main main";
  margin-bottom: 6rem;
`
const Filters = styled.div`
  grid-area: filters;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  padding: 0 6rem;
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
  padding: 0 10rem;
`
const Project1 = styled.div`
  grid-area: project1;
`
const Project2 = styled.div`
  grid-area: project2;
`
const Project3 = styled.div`
  grid-area: project3;
`
const Project4 = styled.div`
  grid-area: project4;
`
const Project5 = styled.div`
  grid-area: project5;
`
const Project6 = styled.div`
  grid-area: project6;
`
const ProjectInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1px 1px;
  font-family: "Montserrat-Light";
`

const Projects = () => (
  <Layout>
    <SEO title="Projects" />
    <Grid>
      <Filters>
        <h4>Residencial</h4>
        <h4>Contract</h4>
        <h4>All</h4>
      </Filters>
      <Main>
        <Project1>
          <Image alt="imperial-salon" filename={"imperial1"} />
          <ProjectInfo>
            <span>Imperial</span>
            <span>Madrid</span>
          </ProjectInfo>
        </Project1>
        <Project2>
          <Image alt="margot-room" filename={"margot5"} />
          <ProjectInfo>
            <span>Margot House</span>
            <span>California</span>
          </ProjectInfo>
        </Project2>
        <Project3>
          <Image alt="yoga-room" filename={"yoga23"} />
          <ProjectInfo>
            <span>Yoga Shala</span>
            <span>Madrid</span>
          </ProjectInfo>
        </Project3>
        <Project4>
          <Image alt="spa-room" filename={"spa3"} />
          <ProjectInfo>
            <span>Imperial</span>
            <span>Madrid</span>
          </ProjectInfo>
        </Project4>
        <Project5>
          <Image alt="yoga-room" filename={"yoga23"} />
          <ProjectInfo>
            <span>Imperial</span>
            <span>Madrid</span>
          </ProjectInfo>
        </Project5>
        <Project6>
          <Image alt="highschool" filename={"highSchool3"} />
          <ProjectInfo>
            <span>Imperial</span>
            <span>Madrid</span>
          </ProjectInfo>
        </Project6>
      </Main>
    </Grid>
    {/* <Link to="/">Go back to the homepage</Link> */}
  </Layout>
)

export default Projects

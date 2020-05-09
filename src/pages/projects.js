import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import styled from "styled-components"
import Image from "../components/Image"

const Filters = styled.div`
  grid-area: filters;
  grid-area: filters;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  padding: 10rem;
`
const Main = styled.div`
  grid-area: main;
`
const SideBar = styled.div`
  grid-area: sidebar;
`
const Footer = styled.div`
  grid-area: footer;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    "filters filters filters"
    "main main main"
    "footer footer footer";
`
const ImageWrapper = styled.div`
  max-width: 400px;
`

const Projects = () => (
  <Layout>
    <SEO title="Projects" />
    <Grid>
      <Filters>
        <h3>Residencial</h3>
        <h3>Contract</h3>
        <h3>All</h3>
      </Filters>
      <Main>
        <ImageWrapper>
          <Image alt="imperial-salon" filename={"imperialOne"} />
        </ImageWrapper>
      </Main>
      <SideBar></SideBar>
      <Footer></Footer>
    </Grid>
    {/* <Link to="/">Go back to the homepage</Link> */}
  </Layout>
)

export default Projects

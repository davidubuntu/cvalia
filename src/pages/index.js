import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import media from "../styles/media"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Image from "../components/Image_Fluid"
import Map from "../components/Map"
import MapboxGLMap from "../components/MapboxGLMap"

const Section = styled.section``
const ImageBgWrapper = styled.div`
  maxwidth: 100vw;
  padding: 0 0 calc((0.4rem + 0.5vw) * 12);
`
const DescriptionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  padding: 0 26.573vw calc((0.4rem + 0.5vw) * 13.5);
  text-align: center;
  line-height: 2;
  ${media.tablet`
    padding:  0 5vw calc((.4rem + .5vw) * 12);;
  `}
`
const SectionTravel = styled.section`
  display: flex;
  padding: 0 calc((0.4rem + 0.5vw) * 17.5);
  ${media.tablet`
    flex-direction: column;
  `}
`

const Description = styled.p`
  font-size: 14px;
  opacity: 1;
  transform: matrix(1, 0, 0, 1, 0, 0);
  font-weight: 300;
`
const DescriptionTitle = styled.span`
  font-weight: bold;
`
const MapTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const MapDescription = styled.p`
  font-family: "Montserrat-Light";
  padding: 2rem 12rem 2rem 0;

  line-height: 2;
`
const MapTitle = styled.div`
  font-family: "Montserrat-Bold";
  font-weight: bold;
`

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const { map, image, mainheader } = frontmatter
  return (
    <Layout>
      <SEO title="About" />
      <ImageBgWrapper>
        <Image alt="home-image" filename={image} />
      </ImageBgWrapper>
      <Section>
        <DescriptionWrapper>
          <Description>
            <DescriptionTitle>{mainheader.title} </DescriptionTitle>
            {mainheader.description}
          </Description>
        </DescriptionWrapper>
      </Section>
      <SectionTravel>
        <MapTextContainer>
          <MapTitle>{map.title}</MapTitle>
          <MapDescription>{map.description}</MapDescription>
        </MapTextContainer>
        {/* <Map width={"100%"} height={"500px"} /> */}
        <main>
          <MapboxGLMap width={"40vw"} height={"480px"} />
        </main>
      </SectionTravel>
      {/* <Link to="/projects/">Go to page 2</Link> */}
    </Layout>
  )
}
export default IndexPage

export const query = graphql`
  query {
    markdownRemark(frontmatter: { pageKey: { eq: "index" } }) {
      id
      frontmatter {
        image
        mainheader {
          description
          title
        }
        map {
          description
          title
        }
      }
    }
  }
`

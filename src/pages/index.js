import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import media from "../styles/media"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Image from "../components/Image"
import Map from "../components/Map"
import ProgressBar from "../components/ProgressBar"

const SectionMain = styled.section``

const SectionImageHome = styled.div`
  padding: 0 0 calc((0.4rem + 0.5vw) * 12);
`
const DescriptionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  padding: 0 5vw calc((0.4rem + 0.5vw) * 12);
  text-align: center;
  line-height: 2;
  ${media.tablet`
    padding: 0 26.573vw calc((0.4rem + 0.5vw) * 13.5);
  `}
`
const SectionTravel = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 5vw calc((0.4rem + 0.5vw) * 12);
  #map {
    width: 100%;
    height: 200px;
  }
  ${media.tablet`
    padding: 0 12.5vw calc((0.4rem + 0.5vw) * 12);
    #map {
     width: 100%;
     height: 300px;
    }
  `}
  ${media.laptopL`
    flex-direction: row;
    padding: 0 12.5vw calc((0.4rem + 0.5vw) * 12);
    #map{
      width: 40vw;
      height: 400px;
    }
  `}
`
const SectionSkills = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 5vw calc((0.4rem + 0.5vw) * 12);
  ${media.tablet`
    padding: 0 12.5vw calc((0.4rem + 0.5vw) * 12);
  `}
  ${media.laptopL`
    flex-direction: row;
    padding: 0 12.5vw calc((0.4rem + 0.5vw) * 12);
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
  padding: 2rem;
  line-height: 2;
  text-align: center;
  ${media.tablet`
    padding:  2rem 2rem 2rem 0;
    text-align: left;
  `}
  ${media.laptopL`
    padding: 2rem 8rem 2rem 0;
    text-align: left;
  `}
`
const MapTitle = styled.div`
  font-family: "Montserrat-Bold";
  font-weight: bold;
  text-align: center;
  ${media.tablet`
    text-align: left;
  `}
  ${media.laptopL`
    text-align: left;
  `}
`
const MapMain = styled.main`
  padding: 0;
  ${media.laptopL`
    padding: 0 4rem;
  `};
`
const SkillsProgress = styled.div`
  width: 100%;
  text-align: center;
  ${media.tablet`
    text-align: left;
  `}
  ${media.laptopL`
    width: 50%;
    text-align: left;
  `}
`
const SkillsDescription = styled.div`
  width: 100%;
  padding: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 2;
  ${media.laptopL`
    width: 50%;
  `}
`
const SkillsTitle = styled.div`
  font-family: "Montserrat-Bold";
  font-weight: bold;
`

const ProgressBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`
const ProgressBarDiv = styled.div`
  width: 50%;
  height: 5px;
`
const ProgressSet = styled.div`
  display: flex;
  margin: 1.2rem 0;
  align-items: center;
`
const SkillName = styled.span`
  font-size: 13px;
`
const SkillNameDiv = styled.div`
  padding-left: 2rem;
  ${media.tablet`
  padding-left: 5rem;
  `}
`

const IndexPage = ({ data }) => {
  const { frontmatter } = data.allMarkdownRemark.edges[0].node
  const { skills, map, image, mainheader } = frontmatter
  const { tools } = skills
  return (
    <Layout>
      <SEO title="About" />
      <SectionImageHome>
        <Image
          alt="background-cvalia-home"
          filename={image}
          maxWidth={"100vw"}
        />
      </SectionImageHome>
      <SectionMain>
        <DescriptionWrapper>
          <Description>
            <DescriptionTitle>{mainheader.title} </DescriptionTitle>
            {mainheader.description}
          </Description>
        </DescriptionWrapper>
      </SectionMain>
      <SectionTravel>
        <MapTextContainer>
          <MapTitle>{map.title}</MapTitle>
          <MapDescription>{map.description}</MapDescription>
        </MapTextContainer>
        <MapMain>
          <Map />
        </MapMain>
      </SectionTravel>
      <SectionSkills className="slide-top">
        <SkillsProgress>
          <SkillsTitle>{skills.title}</SkillsTitle>
          <ProgressBarWrapper>
            {tools.map(tool => (
              <ProgressSet key={tool.name}>
                <ProgressBarDiv>
                  <ProgressBar width={100} completed={tool.percentage} />
                </ProgressBarDiv>
                <SkillNameDiv>
                  <SkillName>{tool.name}</SkillName>
                </SkillNameDiv>
              </ProgressSet>
            ))}
          </ProgressBarWrapper>
        </SkillsProgress>
        <SkillsDescription>{skills.description}</SkillsDescription>
      </SectionSkills>
      {/* <Link to="/projects/">Go to page 2</Link> */}
    </Layout>
  )
}
export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { pageKey: { eq: "index" } } }) {
      edges {
        node {
          id
          frontmatter {
            image
            mainheader {
              title
              description
            }
            map {
              title
              description
            }
            skills {
              title
              description
              tools {
                tool
                name
                percentage
              }
            }
          }
        }
      }
    }
  }
`

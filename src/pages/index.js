import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import media from "../styles/media"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Image from "../components/Image"

const Section = styled.section``
const DescriptionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  padding: 7.5rem 25vw calc((.4rem + .5vw) * 13.5);
  text-align: center;
  line-height: 2;
  ${media.laptop`
    padding: 6rem 10vw calc((.4rem + .5vw) * 12);
  `}
  ${media.tablet`
    padding: 5rem 5vw calc((.4rem + .5vw) * 12);
  `}
  ${media.mobileL`
    padding: 5rem 11vw calc((.4rem + .5vw) * 12);
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
const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const { mainheader } = frontmatter
  return (
    <Layout>
      <SEO title="About" />
      <div style={{ maxWidth: `100vw` }}>
        <Image />
      </div>
      <Section>
        <DescriptionWrapper>
          <Description>
            <DescriptionTitle>{mainheader.title} </DescriptionTitle>
            {mainheader.description}
          </Description>
        </DescriptionWrapper>
      </Section>
      <Section>
        <div style={{ maxWidth: `300px` }}>
          {/* <Image alt="home-image" filename="linkedin.jpg" /> */}
        </div>
      </Section>
      <Link to="/projects/">Go to page 2</Link>
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
      }
    }
  }
`

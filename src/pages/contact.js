import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Image from "../components/Image"
import SEO from "../components/Seo"
import styled from "styled-components"
import media from "../styles/media"

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  gap: 1px 1px;
  grid-template-areas:
    "info"
    "image";
  padding: 0 3rem 3rem;
  ${media.tablet`
    gap: 1rem;
    padding: 0 5rem 5rem;
    grid-template-areas: "info image";
  `};
  ${media.laptopL`
    gap: 1rem;
    padding: 0 10rem 10rem;
    grid-template-areas: "info image";
  `};
`
const ContactInfo = styled.div`
  grid-area: info;
  margin: 3rem 0;
`
const ContactImage = styled.div`
  grid-area: image;
  margin: 3rem 0;
`
const LinkSection = styled.section``
const ContactPage = ({ data }) => {
  const { frontmatter } = data.allMarkdownRemark.edges[0].node
  const {
    image,
    personalInfo: { title, links, number }
  } = frontmatter

  return (
    <Layout>
      <SEO title="Contact" />
      <Grid>
        <ContactInfo>
          <h3>{title}:</h3>
          {links.map(link => (
            <LinkSection key={link.type}>
              <h3>{link.name}</h3>
              <p>{link.description}</p>
              <a href={`mailto:${link.link}`}>{link.link}</a>
            </LinkSection>
          ))}
          <Link to="/">Home</Link>
        </ContactInfo>
        <ContactImage>
          <Image
            alt="contact-photo-cvalia"
            filename={image}
            height={"60%"}
            width={"60%"}
          />
        </ContactImage>
      </Grid>
    </Layout>
  )
}

export default ContactPage

export const query = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { pageKey: { eq: "contact" } } }) {
      edges {
        node {
          id
          frontmatter {
            image
            personalInfo {
              links {
                link
                name
                description
                type
              }
              number {
                contactNumber
                name
              }
              title
            }
          }
        }
      }
    }
  }
`

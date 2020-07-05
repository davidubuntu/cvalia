import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Image from "../components/Image"
import SEO from "../components/Seo"
import styled from "styled-components"
import media from "../styles/media"

const Grid = styled.div`
  display: grid;
  margin: 3rem 0 3rem 0;
  grid-template-areas:
    "info"
    "image";
  padding: 0 3rem;
	${media.tablet`
	  gap:5rem;
		padding: 0 5rem;
		grid-template-columns: 1fr 2fr;
    grid-template-areas: "info image";
  `};
  ${media.laptopL`
	  gap:5rem;
		padding: 0 10rem;
		grid-template-columns: 1fr 2fr;
    grid-template-areas: "info image";
  `};
`
const ContactInfo = styled.section`
  grid-area: info;
  display: grid;
  align-items: center;
`
const ContactImage = styled.section`
  grid-area: image;
  .image-center {
    width: 100%;
  }
  ${media.tablet`
		display: flex;
		justify-content: center;
		width: 100%;
  `};
  ${media.laptopL`
		display: flex;
		justify-content: center;
		.image-center {
			width:70%;
		}
  `};
`
const LinkSection = styled.section`
  margin-bottom: 3rem;
`
const LinkTitle = styled.h3`
  color: var(--textLightBlack);
  font-family: var(--main-font-regular);
`
const LinkDescription = styled.p`
  color: var(--textGrey);
  font-family: var(--main-font-regular);
`
const LinkUrl = styled.a`
  color: var(--textLightBlack);
  font-family: var(--main-font-regular);
`
const LinkSectionComponent = ({ name, description, link, number }) => {
  return (
    <LinkSection>
      <LinkTitle>{name}</LinkTitle>
      {description && <LinkDescription>{description}</LinkDescription>}
      {number && <LinkUrl href={`tel:${number}`}>{number}</LinkUrl>}
      <LinkUrl href={`mailto:${link}`}>{link}</LinkUrl>
    </LinkSection>
  )
}

const ContactPage = ({ data }) => {
  const { frontmatter } = data.allMarkdownRemark.edges[0].node
  const {
    image,
    personalInfo: { title, links, number }
  } = frontmatter
  console.log(number)
  return (
    <Layout>
      <SEO title="Contact" />
      <Grid>
        <ContactInfo>
          <h3>{title}:</h3>
          {links.map(link => (
            <LinkSectionComponent
              key={link.type}
              name={link.name}
              description={link.description}
              link={link.link}
            />
          ))}
          <LinkSection>
            <LinkSectionComponent
              name={number.name}
              description={number.description}
              number={number.contactNumber}
            />
          </LinkSection>
        </ContactInfo>
        <ContactImage>
          <Image
            alt="contact-photo-cvalia"
            filename={image}
            className={"image-center"}
            width={"100%"}
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
                description
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

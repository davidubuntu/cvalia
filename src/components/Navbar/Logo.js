import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql } from "gatsby"

const LogoWrap = styled.div`
  padding: 0px 5rem;
  @media (max-width: 768px) and (orientation: landscape) {
    padding: 0rem 1rem;
  }
`
const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      logoImage: file(relativePath: { eq: "logo-valia-dark.png" }) {
        childImageSharp {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <LogoWrap as={Link} to="/">
      <Img fixed={data.logoImage.childImageSharp.fixed} alt="logo" />
    </LogoWrap>
  )
}

export default Logo

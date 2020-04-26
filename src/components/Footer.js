import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  const FooterWrap = styled.footer`
    p {
      font-size: 0.8rem;
    }
  `

  return (
    <FooterWrap>
      <p>
        Made by {data.site.siteMetadata.author}, {new Date().getFullYear()}
      </p>
    </FooterWrap>
  )
}

export default Footer

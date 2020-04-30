import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { useSiteMetadata } from "."
const Footer = () => {
  const { author } = useSiteMetadata()

  const FooterWrap = styled.footer`
    p {
      font-size: 0.8rem;
    }
  `

  return (
    <FooterWrap>
      <p>
        Made by {author}, {new Date().getFullYear()}
      </p>
    </FooterWrap>
  )
}

export default Footer

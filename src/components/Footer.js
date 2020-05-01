import React from "react"
import styled from "styled-components"
import useSiteMetadata from "./useSiteMetadata"
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

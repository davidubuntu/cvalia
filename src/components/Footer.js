import React from "react"
import styled from "styled-components"
import useSiteMetadata from "../hooks/useSiteMetadata"
const Footer = () => {
  const { author } = useSiteMetadata()

  const FooterWrap = styled.footer`
    background: #f2f2f2;
    height: auto;
    font-weight: 400;
    font-size: calc(-0.104166666666667vw + 0.9rem);
    line-height: 1.4rem;
    letter-spacing: 0.125em;
    text-transform: none;
    writing-mode: horizontal-tb;
    transform: inherit;
    padding: calc((0.4rem + 0.5vw) * 1.75) 6rem;
    text-align: center;
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

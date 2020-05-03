import React from "react"
import styled from "styled-components"
import useSiteMetadata from "../hooks/useSiteMetadata"
const Footer = () => {
  const { author } = useSiteMetadata()

  const Footer = styled.footer`
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
  const FooterMain = styled.div`
    display: flex;
    justify-content: space-between;
    text-align: center;
    font-size: 0.6rem;
    a {
      text-decoration: none;
      display: inline-block;
      white-space: nowrap;
      transition: all 200ms ease-in;
      position: relative;
      text-transform: uppercase;
      font-size: 10px;
      margin: 0 1.5vw;
      letter-spacing: 0.25em;
      :after {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        width: 0%;
        content: ".";
        color: transparent;
        background: var(--textNormal);
        height: 1px;
        transition: all 0.4s ease-in;
      }

      :hover {
        color: var(--textNormal);
        ::after {
          width: 100%;
        }
      }
    }
  `

  return (
    <Footer>
      <FooterMain>
        <div>
          Made by {author}, {new Date().getFullYear()}
        </div>
        <div>© 2020 CValia Interior Design. All Rights Reserved.</div>
        <div>
          Email : <a href="mailto:cvalia@gmail.com">cvalia@gmail.com</a>{" "}
        </div>
      </FooterMain>
    </Footer>
  )
}

export default Footer

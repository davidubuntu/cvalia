import React from "react"
import styled from "styled-components"
import useSiteMetadata from "../hooks/useSiteMetadata"
import media from "../styles/media"

const FooterWrapper = styled.footer`
  position: relative;
  bottom: 0px;
  width: 100vw;
  background: #f2f2f2;
  height: auto;
  font-weight: 400;
  font-size: calc(-0.104166666666667vw + 0.9rem);
  line-height: 1.4rem;
  letter-spacing: 0.125em;
  text-transform: none;
  transform: inherit;
  text-align: center;
  padding: calc((0.4rem + 0.5vw) * 6) 2rem;
  ${media.tablet`
padding: calc((0.4rem + 0.5vw) * 1.75) 6rem;
`}
`
const FooterMain = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  font-size: 0.6rem;
  flex-direction: column;
  ${media.tablet`
  flex-direction:row;
`}
  a {
    text-decoration: none;
    display: inline-block;
    white-space: nowrap;
    position: relative;
    font-size: 10px;
    margin-left: 1.5vw;
    margin-right: 1.5vw;
    letter-spacing: 0.25em;
    :after {
      content: "";
      position: absolute;
      width: 0;
      height: 1px;
      display: block;
      margin-bottom: 1px;
      right: 0;
      background: var(--textNormal);
      transition: all 0.6s ease-in-out;
      -webkit-transition: all 0.6s ease-in-out;
    }
    :hover {
      color: var(--textNormal);
      ::after {
        width: 100%;
        left: 0;
      }
    }
  }
`

const Footer = () => {
  const { title } = useSiteMetadata()
  return (
    <FooterWrapper>
      <FooterMain>
        <div>{title}</div>
        <div>
          Email:<a href="mailto:cvalia@gmail.com">cvalia@gmail.com</a>{" "}
        </div>
        <div>
          <a href="mailto:cvalia@gmail.com">Instagram</a>{" "}
        </div>
        <div>© 2020 CValia Interior Design. All Rights Reserved.</div>
      </FooterMain>
    </FooterWrapper>
  )
}

export default Footer

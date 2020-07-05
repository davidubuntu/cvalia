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
  font-size: 0.6rem;
  line-height: 1.3rem;
  letter-spacing: 0.125em;
  text-transform: none;
  transform: inherit;

  text-align: center;
  padding: calc((0.4rem + 0.5vw) * 6) 2rem;
  ${media.tablet`
    padding: calc((0.4rem + 0.5vw) * 1.75) 6rem;
    line-height: 0.8rem;
 `}
 ${media.laptopL`
  line-height: 1.3rem;
 `}
`
const FooterMain = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  flex-direction: column;
  font-family: var(--main-font-light);
  ${media.tablet`
    flex-direction:row;
  `}
  a {
    text-decoration: none;
    display: inline-block;
    white-space: nowrap;
    position: relative;
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
const FooterDiv = styled.div`
  margin-top : 1rem;
  ${media.tablet`
    margin-top : 0;
  `}
  ${media.laptopL`
    margin-top : 0;
  `}
`

const Footer = () => {
  const { title, email } = useSiteMetadata()
  console.log(title, email);
  return (
    <FooterWrapper>
      <FooterMain>
        <div>{title}</div>
        <FooterDiv>
          Email:<a href={email}>cvaliadesign@gmail.com</a>{" "}
        </FooterDiv>
        <FooterDiv>
          <a href="">Instagram</a>{" "}
        </FooterDiv>
        <FooterDiv>© 2020 CValia Interior Design. All Rights Reserved.</FooterDiv>
      </FooterMain>
    </FooterWrapper>
  )
}

export default Footer

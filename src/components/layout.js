import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import "../styles/index.scss"

import Navbar from "./Navbar/Navbar"
import Footer from "./Footer"
const MainWrapper = styled.div`
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  color: var(--textNormal);
  flex-grow: 1;
  justify-content: space-around;
`

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <MainWrapper>{children}</MainWrapper>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

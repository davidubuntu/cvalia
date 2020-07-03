import React from "react"

import "../styles/index.scss"
import PropTypes from "prop-types"
import styled from "styled-components"

import Navbar from "./Navbar/Navbar"
import Footer from "./Footer"

const MainWrapper = styled.div`
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  color: var(--textNormal);
  flex-grow: 1;
  justify-content: space-between;
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

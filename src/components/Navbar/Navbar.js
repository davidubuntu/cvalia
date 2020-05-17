import React, { useState } from "react"
import styled from "styled-components"
import NavbarLinks from "./NavbarLinks"
import Logo from "./Logo"

const Navigation = styled.nav`
  height: 12vh;
  display: flex;
  position: relative;
  align-items: center;
  z-index: 2;
  transition: all 0.5s cubic-bezier(0.79, 0.14, 0.15, 0.86);

  @media (max-width: 768px) {
    position: ${props => (props.open ? "fixed" : "")};
    justify-content: space-between;
    padding: 2rem;
    height: 8vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
    background-color: var(--bg);
  }
`
const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }
`
const ToggleBox = styled.div`
  height: 30px;
  width: 30px;
`
const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-around;
  align-items: center;
  transition: all 0.5s cubic-bezier(0.79, 0.14, 0.15, 0.86);
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100vw;
    justify-content: center;
    padding-bottom: 8vh;
    background-color: var(--bg);
    top: 8vh;
    left: ${props => (props.open ? "-100%" : "0")};
    height: 92vh;
  }
`

const Hamburger = styled.div`
  z-index: 3333;
  background-color: var(--textNormal);
  width: 30px;
  height: 2px;
  transition: all 0.5s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 2px;
    background-color: var(--textNormal);
    content: "";
    position: absolute;
    transition: all 0.5s linear;
  }

  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  const handleClickNav = () => {
    setNavbarOpen(false)
  }
  return (
    <Navigation open={navbarOpen}>
      <Logo />
      <ToggleBox onClick={() => setNavbarOpen(!navbarOpen)}>
        <Toggle navbarOpen={navbarOpen}>
          {navbarOpen ? <Hamburger open /> : <Hamburger />}
        </Toggle>
      </ToggleBox>

      {navbarOpen ? (
        <Navbox>
          <NavbarLinks handleClick={handleClickNav} />
        </Navbox>
      ) : (
        <Navbox open>
          <NavbarLinks handleClick={handleClickNav} />
        </Navbox>
      )}
    </Navigation>
  )
}

export default Navbar

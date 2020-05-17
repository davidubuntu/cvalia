import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const links = [
  { slug: "/", page: "About", status: false },
  { slug: "/projects", page: "Projects", status: false },
  { slug: "/news", page: "News", status: false },
  { slug: "/contact", page: "Contact", status: false },
]

const NavbarLinks = {handleClick} => {
  return (
    <>
      {links.map(({ slug, page, status }) => (
        <NavItem
          key={slug}
          activeClassName="activeLink"
          partiallyActive={status}
          to={slug}
          onClick={handleClick}
        >
          {page}
          <Line className="line"></Line>
        </NavItem>
      ))}
    </>
  )
}

export default NavbarLinks

const NavItem = styled(Link)`
  text-decoration: none;
  display: inline-block;
  white-space: nowrap;
  position: relative;
  text-transform: uppercase;
  font-size: 10px;
  margin: 0 1.5vw;
  letter-spacing: 0.25em;
  :after {
    content: "";
    position: absolute;
    width: 0;
    height: 1px;
    display: block;
    margin-top: 4px;
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

  @media (max-width: 768px) {
    margin: 3% 0;
    font-size: 1.2rem;
    z-index: 6;
  }
`
const Line = styled.span`
  display: none;
  position: absolute;
  bottom: -5px;
  left: 0;
  border-bottom: 1px solid black;
  width: 100%;
`

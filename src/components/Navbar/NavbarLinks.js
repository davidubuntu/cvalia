import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const links = [
  { slug: "/", page: "About", status: false },
  { slug: "/projects", page: "Projects", status: true },
  { slug: "/news", page: "News", status: true },
]
const NavbarLinks = () => {
  return (
    <>
      {links.map(({ slug, page, status }) => (
        <NavItem
          key={slug}
          activeStyle={{ color: "var(--textLink" }}
          partiallyActive={status}
          to={slug}
        >
          {page}
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

  @media (max-width: 768px) {
    margin: 3% 0;
    font-size: 1.2rem;
    z-index: 6;
  }
`

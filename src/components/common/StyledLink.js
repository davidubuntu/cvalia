import styled from "styled-components"
import { Link } from "gatsby"

const StyledLink = styled(Link)`
  text-decoration: none;
  display: inline-block;
  white-space: nowrap;
  position: relative;
  font-size: 12px;
  letter-spacing: 0.25em;
  width: min-content;
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
`

const StyledButton = styled.span`
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  white-space: nowrap;
  position: relative;
  font-size: 12px;
  letter-spacing: 0.25em;
  width: min-content;
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
`
export { StyledLink, StyledButton }

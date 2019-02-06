import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import styled from 'styled-components';

import gatsbyLogo from '../images/gatsby-icon.png'

const HeaderWrapper= styled.div `
background: #524763;
margin-bottom: 1.45rem;
img{
  margin-bottom: 0;
}
`;

const HeaderContainer =styled.div `
margin: 0 auto;
max-Width: 960px;
padding: 0.5rem;
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
        <img 
        style={{
          width: "100px", 
        }}
        src={gatsbyLogo } 
        alt="Gatsby Logo"/>
        </Link>
      </h1>
    </HeaderContainer>
    <nav>
      <ul>
        <li>
          <Link  to="/about"> About </Link>
        </li>
        <li>
          <Link  to="/">Home </Link>
        </li>
      </ul>
    </nav>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

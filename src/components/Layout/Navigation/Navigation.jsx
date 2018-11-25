import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { siteTitle } from '../../../../data/SiteConfig'
import Logo from '../../Accessories/Logo'

class TopNavigation extends Component {
  render() {
    return (
      <header>
        <TitleSection>
          <Link to="/">
            <Logo />
          </Link>          
        </TitleSection>
        <NavList>
          {/*<li>
            <a target="_blank" rel="noopener noreferrer" href="/about">About</a>
          </li>*/}
        </NavList>
      </header>
    )
  }
}

const TitleSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  h3 {
    font-size: 2.5rem;
  }

  div {
    margin-right: 10px;
  }

  @media (max-width: 900px) {
    h3 {
      font-size: 14px;
    }
  }
`

const NavList = styled.ul`
  display: flex;

  li a {
    font-size: 2rem;
  }

  @media (min-width: 900px) {
    display: block;

    li {
      margin-left: 50px;
    }
  }
`

export default TopNavigation

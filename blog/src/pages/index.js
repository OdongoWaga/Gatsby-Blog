import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import BMC from '../images/BMC.jpg';
import styled from "styled-components";

const HeaderWrapper =styled.div`
    background:  #524763;
    margin-bottom: 1.45rem; 
`;

const IndexPage = () => (
  <HeaderWrapper>
    <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />

      <img src={BMC} alt="BMC" />
    </div>
    <Link to="/about">About</Link>

  </Layout>


  </HeaderWrapper>
  )

export default IndexPage

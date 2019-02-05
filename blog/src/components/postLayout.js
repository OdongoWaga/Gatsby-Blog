import React, { Component } from 'react'
import Layout from './layout';
import {graphql} from 'gatsby'

 class PostLayout extends Component {
  render() {
    return (

      <Layout >
        <h1>Post Layout </h1>
      </Layout>
    )
  }
}

export default PostLayout;

export const query = graphql`
query PostQuery {
    markdownRemark(frontmatter: {
        slug: {
            eq: "/third-post" 
        }
    }) {
        html
        frontmatter {
            title
            date
            slug
        }
    } 
}
`

import React from "react"
import { StaticQuery, graphql } from "gatsby"




const Archive = () => (
  <StaticQuery
    query={graphql`
      query  {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
       <aside>
        <h3>Archive </h3>
       </aside>
       
      </> 
    )}
  />
)

 
export default Archive;

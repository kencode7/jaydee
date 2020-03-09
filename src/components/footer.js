import React from 'react'
import {graphql, useStaticQuery } from "gatsby"


const Footer = () => {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

    return (
        <footer>
            <p>Jaydee's Blog <span>&#169;</span>2020 All rights reserved</p>
            <p>Designed by {data.site.siteMetadata.author}</p>
        </footer>
    )
}

export default Footer
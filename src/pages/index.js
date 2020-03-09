import React from "react"
import { Link } from "gatsby"

import Body from "../components/body"
import '../styles/index.scss'


const IndexPage = () => (
    <Body>
      <h1>Hi people</h1>
      <p>I'm Jaydee</p>
      <p>Need a writer? <Link to="/contact" >contact them</Link></p>
    </Body>
  
)

export default IndexPage

import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"
import headerStyles from './header.module.scss'

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={headerStyles.header}>
      <h1 className={headerStyles.logo}>
        <Link>
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <nav>
        <ul className={headerStyles.navList}>
          <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.navItemActive} to="/" >Home</Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.navItemActive} to="/categories">Categories</Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.navItemActive} to="/contact">Contact</Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.navItemActive} to="/community">Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

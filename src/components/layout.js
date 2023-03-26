/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import { StaticImage } from "gatsby-plugin-image"
import { PageProvider } from "./context/PageContext"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <PageProvider>
      <div className="layoutContainer">
        <div className="lateralHeader">
          <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        </div>
        <div className="cildrenContainer">
          <div
            style={{
              margin: `0 auto`,
              maxWidth: `var(--size-content)`,
              padding: `var(--size-gutter)`,
            }}
          >
            <main>{children}</main>
            {/*<footer
              style={{
                marginTop: `var(--space-5)`,
                fontSize: `var(--font-sm)`,
              }}
              id="contact"
            >
              <div className="footer-container">

              {/*© {new Date().getFullYear()} &middot; SNTSA*
              </div>
              
            </footer>*/}
          </div>
        </div>
      </div>
    </PageProvider>
  )
}

export default Layout

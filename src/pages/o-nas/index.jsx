import React from "react"
import {
  graphql,
  useStaticQuery,
} from "gatsby"
import Container from '@material-ui/core/Container'
import Layout from "../../components/layout"
import AboutUs from '../../components/AboutUs'
import Constitution from '../../components/Constitution'

export default ({ location }) => {
  const { site: { siteMetadata } } = useStaticQuery(graphql
    `query AboutUsQuery{
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            excerpt
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              description
            }
          }
        }
      }
    }`
  )

  return (
    <Layout location={location} title={siteMetadata.siteTitle}>
      <Container>
        <AboutUs />
        <Constitution />
      </Container>
    </Layout>
  )
}
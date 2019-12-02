import React from "react"
import {
  graphql,
  useStaticQuery,
} from "gatsby"
// import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
// import Grid from '@material-ui/core/Grid';
import Layout from "../../components/layout"
import AboutUs from './AboutUs'
import Constitution from './Constitution'

export default ({ location }) => {
  const { site: { siteMetadata } } = useStaticQuery(graphql
    `query AboutUsQuery{asdasd
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

  const support = [
    'Demokraciu',
    'Pokrok',
    'Obranu seba aj druhých',
    'Miešanie rás',
    'Rovnosť náboženstiev',
    'Rovnosť pohlaví',
    'Ochranu prírody',
    'Ochranu detí pred náboženskou demagógiou a fundamentalizmom',
    'Nepodporujeme',
    'Autoritárstvo',
    'Bazírovanie na tradíciách',
    'Používanie násilia v inom prípade než v obrane',
    'Rasovú neznášanlivosť',
    'Nadradenosť jednotlivých náboženstiev',
    'Nadradenosť jedného pohlavia',
    'Popieranie zmeny klímy',
    'Zneužívanie detí náboženstvami a náboženskými predstaviteľmi'
  ]

  return (
    <Layout location={location} title={siteMetadata.siteTitle}>
      <Container>
        <AboutUs />
        <Constitution />
      </Container>
    </Layout>
  )
}
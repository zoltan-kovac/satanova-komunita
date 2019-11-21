import React from "react"
import {
  graphql,
  useStaticQuery,
} from "gatsby"
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid';
import Layout from "../../components/layout"
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

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
      <Container maxWidth="sm">
          <Box mb={8}>
            <Typography variant="h1" gutterBottom>O nás</Typography>
            <Typography variant="body1">
              <p>Satanizmus nie je len liberálne náboženstvo, ale tiež filozofia podporujúca mier, všestrannú rovnoprávnosť a princípy demokracie. Neuctievame síce Satana ani iných teistických bohov, ale uctievame prírodu, človeka a ľudstvo. Sme teda v pravom zmysle slova panteisti, hoci združujeme aj rozmanité formy ateizmu.</p>
            </Typography>
          </Box>
          <Box mb={8}>
            <Typography variant="h2" gutterBottom>Satanova Ústava</Typography>
            <Typography variant="body1">
              <p>Satanova ústava je základný dokument našej organizácie. V plnom znení a s vysvetlivkami ju nájdete tu.</p>
            </Typography>

            <Grid item xs={12} md={6}>
              <Typography variant="h6">
                Podporujeme
              </Typography>
              <div>
                <List dense={true}>
                  {support.map(item => <ListItem><ListItemText primary={item} /></ListItem>)}
                </List>
              </div>
            </Grid>
          </Box>
      </Container>
    </Layout>
  )
}
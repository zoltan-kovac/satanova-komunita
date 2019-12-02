
import React from "react"
import {
  graphql,
  Link,
  useStaticQuery,
} from "gatsby"
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import CardHeader from '@material-ui/core/CardHeader'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Layout from "../components/layout"
import SEO from "../components/seo"

const useStyles = makeStyles({
  card: {
  },
  media: {
    height: 140,
  },
})

export default function Root({
  location,
}) {
  const classes = useStyles()
  const { allMarkdownRemark: { edges: posts } } = useStaticQuery(graphql`query RootQuery {
    allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "news"}}}, sort: { fields: [frontmatter___date], order: DESC }) {
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
            templateKey
          }
        }
      }
    }
  }`)

  return <></>

  // return (
  //   <Layout location={location}>
  //     <SEO title="Úvod" />
  //     <Container>
  //       <Box my={8}>
  //         <Grid container spacing={3}>
  //           <Grid item container xs={12} md={8}>-</Grid>

  //           <Grid item container xs={12} md={4} spacing={3}>
  //             {posts.map(({ node }) => {
  //               const title = node.frontmatter.title || node.fields.slug
  //               const templateKey = node.frontmatter.templateKey
  //               console.log('templateKey', templateKey)

  //               return (
  //                 <Grid item xs={12}>
  //                   <article key={node.fields.slug}>
  //                     <Card className={classes.card}>
  //                       <CardActionArea>
  //                         <Link to={node.fields.slug}>
  //                           <CardHeader
  //                             title={title}
  //                             subheader={node.frontmatter.date}
  //                           />
  //                           {/* <CardMedia
  //                             className={classes.media}
  //                             image="/static/images/cards/contemplative-reptile.jpg"
  //                             title="Contemplative Reptile"
  //                           /> */}
  //                           <CardContent>
  //                             <p dangerouslySetInnerHTML={{
  //                               __html: node.frontmatter.description || node.excerpt,
  //                             }} />
  //                           </CardContent>
  //                         </Link>
  //                       </CardActionArea>
  //                       {/* <CardActions>
  //                         <Button size="small" color="primary">
  //                           <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
  //                             {title}
  //                           </Link>
  //                         </Button>
  //                       </CardActions> */}
  //                     </Card>
  //                   </article>
  //                 </Grid>
  //               )
  //             })}
  //           </Grid>
  //         </Grid>
  //       </Box>
  //     </Container>
  //   </Layout>
  // )
}

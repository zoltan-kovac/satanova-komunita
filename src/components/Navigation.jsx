import React from "react"
import {
  graphql,
  Link,
  useStaticQuery,
} from "gatsby"
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Toolbar from '@material-ui/core/Toolbar'

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
  },
}));

export default function Navigation() {
  const classes = useStyles();
  const { site: { siteMetadata } } = useStaticQuery(graphql
    `query HeaderQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }`
  )
  const rootPath = `${__PATH_PREFIX__}/`

  return (
    <AppBar position="static" className={classes.root}>
      <Container>
        <Toolbar disableGutters>
          <div className={classes.title}>
            <Link
              style={{
                boxShadow: `none`,
                color: `inherit`,
                textDecoration: `none`,
                textTransform: 'uppercase',
              }}
              to={rootPath}
            >
              {siteMetadata.title}
            </Link>
          </div>

          {siteMetadata.menuLinks.map(({ name, link }) => 
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={link}
            >
              <Button color="inherit">
                {name}
              </Button>
            </Link>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  )
}
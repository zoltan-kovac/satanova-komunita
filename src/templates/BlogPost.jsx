import { Link, graphql } from "gatsby"
import Container from '@material-ui/core/Container'
import Layout from "../components/layout"
import React from "react"
import SEO from "../components/seo"

export default function BlogPostTemplate({
  data, location, pageContext
}) {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext
    
    return (
      <Layout location={location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <Container maxWidth="md">
          <article>
            <header>
              <h1>
                {post.frontmatter.title}
              </h1>
              <p>
                {post.frontmatter.date}
              </p>
            </header>
            <section dangerouslySetInnerHTML={{ __html: post.html }} />
            <hr/>
          </article>

          <nav>
            <ul
              style={{
                display: `flex`,
                flexWrap: `wrap`,
                justifyContent: `space-between`,
                listStyle: `none`,
                padding: 0,
              }}
            >
              <li>
                {previous && (
                  <Link to={previous.fields.slug} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                )}
              </li>
              <li>
                {next && (
                  <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        </Container>
      </Layout>
    )
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`

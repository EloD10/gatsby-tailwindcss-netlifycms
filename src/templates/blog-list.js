import React from 'react'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'

class BlogList extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? '/' : currentPage - 1
    const nextPage = currentPage + 1

    return (
      <Layout>
        <Helmet title={` ${data.site.siteMetadata.title} | Blog`} />
        <h1 className="ml-4 md:ml-0 mt-4 text-purple-dark">Latest Blog Post</h1>
        <div className="ml-4 md:ml-0 border-t-4 border-purple-dark w-24 mt-4 mb-8" />
        <ul className="mx-4 md:mx-0 flex flex-col my-8 pb-6 rounded list-reset">
          {posts.map(({ node: post }) => (
            <li
              key={post.id}
              className="bg-orange-lightest p-4 my-4 py-4 text-lg text-purple"
            >
              <div className="flex justify-between items-center">
                <Link
                  to={post.fields.slug}
                  className="flex items-center no-underline text-purple-dark hover:text-purple-darker hover:underline"
                >
                  <h2>{post.frontmatter.title}</h2>
                </Link>
                <time className="text-base ml-4 mr-8 underline">
                  {post.frontmatter.date}
                </time>
              </div>
              <p className="mt-2 text-base leading-tight">{post.excerpt}</p>
            </li>
          ))}
        </ul>
        {numPages !== 1 && (
          <div class="mx-4 md:mx-0 absolute pin-b inline-flex mb-32">
            <div class="bg-purple-light hover:bg-purple text-purple-darkest font-bold py-2 px-4 rounded-l">
              {!isFirst && (
                <Link
                  to={'/blog/' + prevPage}
                  rel="prev"
                  className="no-underline text-sm text-orange-lightest hover:text-orange-lighter active:text-indigo-dark"
                >
                  ← Previous Page
                </Link>
              )}
            </div>
            {Array.from({ length: numPages }, (_, i) => (
              <Link
                key={`pagination-number${i + 1}`}
                to={`/blog/${i === 0 ? '' : i + 1}`}
                className={`text-orange-lightest p-2 no-underline font-bold hover:text-orange-lighter ${
                  i + 1 === currentPage ? 'bg-orange' : 'bg-purple'
                }`}
              >
                {i + 1}
              </Link>
            ))}
            <div class="bg-purple-light hover:bg-purple text-purple-darkest font-bold py-2 px-4 rounded-r">
              {!isLast && (
                <Link
                  to={'/blog/' + nextPage}
                  rel="next"
                  className="no-underline text-sm text-orange-lightest hover:text-orange-lighter active:text-indigo-dark"
                >
                  Next Page →
                </Link>
              )}
            </div>
          </div>
        )}
      </Layout>
    )
  }
}

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 400)
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }

    site {
      siteMetadata {
        title
      }
    }
  }
`
export default BlogList

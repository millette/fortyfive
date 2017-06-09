module.exports = {
  siteMetadata: {
    title: 'Comeback @ 45',
    description: 'A little bit of this and that',
    site_url: 'dat://d62aa262608e6ccfa81364764632265668a7046f25206d3ded8480f14e8b7c42',
    author: 'Robin Millette'
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-responsive-image`,
            options: {
              maxWidth: 590
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants'
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                site_url
              }
            }
          }
        `,
        feeds: [
          {
            query: `
              {
                allMarkdownRemark(
                  limit: 1000,
                  sortBy: { order: DESC, fields: [frontmatter___date] },
                  frontmatter: { draft: { ne: true } }
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: '/feed.xml'
          }
        ]
      }
    }
  ]
}

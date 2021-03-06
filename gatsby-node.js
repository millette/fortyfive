const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
// const select = require(`unist-util-select`)
// const fs = require(`fs-extra`)

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    // const pages = []
    const blogPost = path.resolve('./src/templates/blog-post.js')
//        allMarkdownRemark(frontmatter: { draft: { ne: true } }) {

    resolve(
      graphql(
        `
      {
        allMarkdownRemark(
          limit: 10,
          sortBy: { order: DESC, fields: [frontmatter___date] },
          frontmatter: { draft: { ne: true } }
        ) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // Create blog posts pages.
        _.each(result.data.allMarkdownRemark.edges, edge => {
          createPage({
            path: edge.node.fields.slug, // required
            component: blogPost,
            context: {
              slug: edge.node.fields.slug
            }
          })
        })
      })
    )
  })
}

// Add custom slug for blog posts to both File and MarkdownRemark nodes.
exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === `File`) {
    const parsedFilePath = path.parse(node.relativePath)
    const slug = `/${parsedFilePath.dir}/`
    createNodeField({ node, fieldName: `slug`, fieldValue: slug })
  } else if (node.internal.type === `MarkdownRemark`) {
    const fileNode = getNode(node.parent)
    createNodeField({
      node,
      fieldName: `slug`,
      fieldValue: fileNode.fields.slug
    })
  }
}

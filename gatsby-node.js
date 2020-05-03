/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
/* const { createFilePath } = require("gatsby-source-filesystem")
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
 */

const path = require("path")
/**
 * Enable absolute imports with `/src` as root.
 *
 */
exports.onCreateWebpackConfig = ({ actions, stage, loaders }) => {
  const config = {
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  }

  // when building HTML, window is not defined, so Leaflet causes the build to blow up
  if (stage === "build-html") {
    config.module = {
      rules: [
        {
          test: /mapbox-gl/,
          use: loaders.null(),
        },
      ],
    }
  }

  actions.setWebpackConfig(config)
}

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")
const { createFilePath, createFileNode } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actionsif (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({
            node, getNode, basePath: `pages` }) 
            createNodeField({
                node,
                name: `slug`,
                value: slug,
            })
        }

    }
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '~atoms': path.resolve(__dirname, 'src/atoms'),
        '~assets': path.resolve(__dirname, 'src/assets'),
        '~molecules': path.resolve(__dirname, 'src/molecules'),
        '~organisms': path.resolve(__dirname, 'src/organisms'),
        '~state': path.resolve(__dirname, 'src/state'),
        '~pages': path.resolve(__dirname, 'src/pages'),
      },
      extensions: ['.js', '.jsx', '.json', '.scss'],
    },
  })
}

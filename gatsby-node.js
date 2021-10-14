const path = require('path')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      alias: {
        '@Components': path.resolve(__dirname, 'src/components'),
        '@Assets': path.resolve(__dirname, 'src/assets'),
        '@Styles': path.resolve(__dirname, 'src/components/Styles'),
        '@Layout': path.resolve(__dirname, 'src/components/Layout'),
        '@Utils': path.resolve(__dirname, 'src/Utils'),
      },
    },
  })
}

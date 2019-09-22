/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-transformer-remark',
    'gatsby-transformer-json',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: "UA-46548102-2",
      },
    },
    {
      resolve: 'gatsby-plugin-s3',
      options: {
          bucketName: 'harrisonliddiard.com'
      }
    }
  ]
}

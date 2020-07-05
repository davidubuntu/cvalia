module.exports = {
  siteMetadata: {
    title: `Claudia Valia Portfolio`,
    description: `Interior Designer Portfolio`,
    email:`cvaliadesign@gmail.com`,
    author: `David Diez`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/markdown`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [`gatsby-remark-images`, `gatsby-remark-images-zoom`],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Claudia Interior Design`,
        short_name: `CValia Interior Design`,
        start_url: `/`,
        background_color: `#ebbea8`,
        theme_color: `#ebbea8`,
        display: `minimal-ui`,
        icon: `src/images/icon-tab.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-page-progress",
      options: {
        height: 3,
        prependToBody: false,
        excludePaths: ["/contact", "/news"],
        color: `#ebbea8`,
      },
    },
    {
      resolve: `gatsby-plugin-env-variables`,
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

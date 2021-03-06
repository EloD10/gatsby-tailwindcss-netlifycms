module.exports = {
  siteMetadata: {
    title: 'Gatsby Blog Tailwindcss',
    titleSeparator: '|',
    siteUrl: `https://www.example.com`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog/`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'static/img/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-postcss',
    'gatsby-transformer-remark',
    'gatsby-plugin-slug',
    'gatsby-plugin-netlify-cms', // make sure to keep it last in the array

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
  ],
}

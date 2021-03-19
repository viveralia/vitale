/* eslint-disable camelcase */
module.exports = {
  plugins: [
    {
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
      resolve: `gatsby-source-filesystem`,
    },
    {
      options: {
        background_color: `#223C53`,
        display: `minimal-ui`,
        icon: `src/assets/images/icon.png`,
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        theme_color: `#223C53`,
      },
      resolve: `gatsby-plugin-manifest`,
    },
    {
      options: {
        fonts: {
          google: [
            {
              family: "Lato",
              variants: ["300", "400", "500", "700"],
            },
          ],
        },
      },
      resolve: `gatsby-plugin-webfonts`,
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-material-ui`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // `gatsby-plugin-offline`
  ],
  siteMetadata: {
    author: ``,
    description: `Soluciones de almacenamiento de agua, al mejor precio. Entra y descubre cuánto podrías ahorrar eligiendo Vitale.`,
    title: `Vitale`,
  },
};

module.exports = {
  siteMetadata: {
    title: "My Gatsby Site",
    description: "This is to test the gatsby",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `test`,
        path: `${__dirname}/src/test/`,
      },
    },
  ],
};

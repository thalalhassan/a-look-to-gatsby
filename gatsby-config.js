module.exports = {
  siteMetadata: {
    title: "A look to Gatsby",
    author: {
      name: `Thalal Hassan`,
      summary: `Learn from Gatsby.`,
    },
    description: `A starter blog demonstrating what Gatsby can do.`,
    siteUrl: `https://gatsbystarterblogsource.gatsbyjs.io/`,
    social: {
      twitter: `thalal_hassan`,
    },
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `test`,
        path: `${__dirname}/src/test/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `413q3zh5i98u`,
        accessToken: `OZ10KJH2OwWooljucO5702OBtqDjPXXrjNdzKwIKcxU`,
      },
    },
  ],
};

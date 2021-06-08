const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const BlogPostContentFul = path.resolve("./src/templates/blog-post.js");

  const result = await graphql(`
    {
      allContentfulBlog {
        edges {
          node {
            tittle
            slug
            content {
              content
            }
          }
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    );
    return;
  }
  const postData = result.data.allContentfulBlog.edges;

  postData.forEach((post, i) => {
    createPage({
      path: post.node.slug,
      component: BlogPostContentFul,
      context: {
        slug: post.node.slug,
      },
    });
  });
};

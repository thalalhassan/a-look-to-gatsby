import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const BlogPostContentFul = ({ data, location }) => {
  const post = data.contentfulBlog;
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  return (
    <Layout location={location} title={siteTitle}>
      <article>
        <header>
          <h1>{post.tittle}</h1>
        </header>
        <p>{post.content.content}</p>
        <hr />
      </article>
    </Layout>
  );
};

export default BlogPostContentFul;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulBlog(slug: { eq: $slug }) {
      tittle
      content {
        content
      }
    }
  }
`;

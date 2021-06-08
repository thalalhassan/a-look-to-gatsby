import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const posts = data.allContentfulBlog.edges;

  return (
    <Layout location={location} title={siteTitle}>
      <p>Contentful Datas</p>
      <ol style={{ listStyle: `none` }}>
        {posts.map(({ node: { tittle, slug } }) => {
          return (
            <li key={tittle}>
              <Link to={slug}>{tittle}</Link>
            </li>
          );
        })}
      </ol>
      <p>Local Page Routes</p>
      <ol style={{ listStyle: `none` }}>
        <li key="testRoute">
          <Link to="testRoute">test route</Link>
        </li>
        <li key="testRoute_test">
          <Link to="testRoute/test">{"test route > test"}</Link>
        </li>
      </ol>
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlog {
      edges {
        node {
          tittle
          slug
        }
      }
    }
  }
`;

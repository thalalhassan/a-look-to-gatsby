import { graphql } from "gatsby";
import * as React from "react";

// styles
const pageStyles = {
  color: "#00000",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

// markup
const IndexPage = (props) => {
  const {data} = props;
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <p>{JSON.stringify(data)}</p>
    </main>
  );
};

export default IndexPage;

export const query = graphql`
query pageQuery {
  site {
    siteMetadata {
      title
    }
  }
}
`;

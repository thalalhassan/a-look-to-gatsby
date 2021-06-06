import { graphql, useStaticQuery } from "gatsby";
import React from "react";

export default function Header() {
  const data = useStaticQuery(graphql`
    query componentQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const { title } = data.site.siteMetadata;
  return <div>{title}</div>;
}

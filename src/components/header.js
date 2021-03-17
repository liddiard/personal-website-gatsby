import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const Header = props => (
  <StaticQuery
    query={graphql`
      query {
        allNavLinksJson {
          edges {
            node {
              id
              url
              text
              external
            }
          }
        }
      }
    `}
    render={data => <Nav data={data} {...props} />}
  />
)

const Nav = ({ data }) => <nav>
  <ul>
    {data.allNavLinksJson.edges.map(({ node }) =>
      <li key={node.id}>
        {node.external ?
          <OutboundLink href={node.url}>{node.text}</OutboundLink> :
          <Link to={node.url}>{node.text}</Link>
        }
      </li>
    )}
  </ul>
</nav>

export default Header
import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { Link, OutboundLink } from './link'

export default props => (
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
    render={data => <Header data={data} {...props} />}
  />
)

const Header = ({ data }) => <nav>
  <ul>
    {data.allNavLinksJson.edges.map(link => {
      const { node } = link
      let linkElement
      if (node.external) {
        linkElement = <OutboundLink href={node.url} target="_blank" rel="noopener noreferrer">{node.text}</OutboundLink>
      } else {
        linkElement = <Link to={node.url}>{node.text}</Link>
      }
      return <li key={node.id}>{linkElement}</li>
    })}
  </ul>
</nav>

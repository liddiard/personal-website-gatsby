import React from 'react'
import { graphql } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import Layout from '../components/layout'

export default ({ data }) => <Layout page="credits" pageTitle="Credits">
    <h1>Background Image Credits</h1>
    <p>From top to bottom, left to right. All works have been modified by me unless otherwise noted.</p>
    {data.allCreditsJson.edges.map(credit =>
        <li key={credit.node.id}>
          <OutboundLink href={credit.node.link}>{credit.node.name}</OutboundLink> <span className="license">({credit.node.license})</span>
        </li>
    )}
</Layout>

export const query = graphql`
  query {
    allCreditsJson {
      edges {
        node {
          id
          name
          license
          link
        }
      }
    }
  }
`

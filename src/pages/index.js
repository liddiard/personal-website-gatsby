import React from 'react'
import { Link, graphql } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import TagCloud from 'react-tag-cloud'
import Layout from '../components/layout'

const tagCloudStyle = {
  padding: 5,
  fontFamily: 'Muli, sans-serif',
  fontWeight: 600,
  fontSize: 15,
  width: '100%',
  height: '320px'
}

const Skills = ({ data }) => (
  <TagCloud 
    style={tagCloudStyle}>
    {data.allSkillsJson.edges.map(({ node }) => 
      <div key={node.id} style={{
        color: node.type === 'software' ? 'rgb(0, 40, 180)' : 'initial'
      }}>{node.name}</div>)}
  </TagCloud>
);

const Interests = ({ data }) => (
  <TagCloud 
  style={{ ...tagCloudStyle, height: '100px' }}>
  {data.allInterestsJson.edges.map(({ node }) => 
      <div key={node.id}>{node.name}</div>)}
  </TagCloud>
);

const renderProjects = (edges) => (
  <ul className="projects">
    {edges
    .sort((a, b) => b.node.frontmatter.order - a.node.frontmatter.order)
    .map(({ node }) => (
      <li key={node.id}>
        <Link
          to={node.fields.slug}>
          {node.frontmatter.title}
        </Link>
        : {node.frontmatter.description}
      </li>
    ))}
  </ul>
)

const metaDescription = 'Harrison Liddiard is a software engineer in the California San Francisco Bay Area working at PayPal. See his projects and resume';
export default ({ data }) => <Layout page="front" pageTitle="Home", metaDescription={metaDescription}>
  <header>
      <h1 className="name">Harrison Liddiard</h1>
      <p className="tagline">Software engineer at PayPal, event coordination enthusiast, aspiring pilot</p>
  </header>
  <p>Hi, I’m Harrison, a software engineer at <OutboundLink href="https://www.paypal.com" target="_blank" rel="noopener noreferrer">PayPal</OutboundLink> and <OutboundLink href="https://ucla.edu" target="_blank" rel="noopener noreferrer">UCLA</OutboundLink> graduate. Check out my <Link to="/resume">resume</Link> for other stuff I’ve done. You can also find me on <OutboundLink href="https://linkedin.com/in/liddiard" target="_blank" rel="noopener noreferrer">LinkedIn</OutboundLink> and <OutboundLink href="https://github.com/liddiard/" target="_blank" rel="noopener noreferrer">GitHub</OutboundLink>.</p>
  <h2>Skills & Interests</h2>
  <p>Here are some things I enjoy doing. Software-specific skills are in <strong><span className="primary-accent">blue</span></strong>:</p>
  <Skills data={data} />
  <h2>Industries</h2>
  <p>I’m particularly interested in these areas:</p>
  <Interests data={data} />
  <h2>Projects</h2>
  Some things I’ve made:
  <h3>Software</h3>
  {renderProjects(data.allMarkdownRemark.edges
    .filter(({ node }) => node.frontmatter.type === 'software'))}
  <h3>Non-software</h3>
  {renderProjects(data.allMarkdownRemark.edges
    .filter(({ node }) => node.frontmatter.type !== 'software'))}
</Layout>

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            description
            order
            type
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
    allSkillsJson {
      edges {
        node {
          id
          name
          type
        }
      }
    }
    allInterestsJson {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`

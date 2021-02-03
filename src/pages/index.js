import React from 'react'
import { Link, graphql } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import TagCloud from 'react-tag-cloud'
import Layout from '../components/layout'

const tagCloudStyle = {
  padding: 5,
  fontFamily: 'Lato, sans-serif',
  fontSize: 15,
  width: '100%',
  height: '200px'
}

const Skills = ({ data }) => (
  <TagCloud
    style={tagCloudStyle}>
    {data.allSkillsJson.edges.map(({ node }) =>
      <div
        key={node.id}
        style={
          node.type === 'software' ?
            { color: '#6653ff' } : 
            {}
        }>
        {node.name}
      </div>)}
  </TagCloud>
);

const Interests = ({ data }) => (
  <TagCloud
    style={{ ...tagCloudStyle, height: '80px' }}>
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

const metaDescription = 'Harrison Liddiard is a software engineer in the California San Francisco Bay Area working at PayPal. See his projects and resume.';
const Home = ({ data }) => <Layout page="front" pageTitle="Home" meta={{ description: metaDescription }}>
  <header>
    <h1 className="name">Harrison Liddiard</h1>
    <p className="tagline">Software engineer, event planning enthusiast, aspiring pilot</p>
  </header>
  <p className="lede">Hi! I’m Harrison, a software engineer at <OutboundLink href="https://www.paypal.com" target="_blank" rel="noopener noreferrer">PayPal</OutboundLink> and a <OutboundLink href="https://ucla.edu" target="_blank" rel="noopener noreferrer">UCLA</OutboundLink> graduate. You can check out my <a href="#projects">projects</a> below and my <Link to="/resume">resumé</Link> for some stuff I’ve done. You can also find me on <OutboundLink href="https://linkedin.com/in/liddiard" target="_blank" rel="noopener noreferrer">LinkedIn</OutboundLink> and <OutboundLink href="https://github.com/liddiard/" target="_blank" rel="noopener noreferrer">GitHub</OutboundLink>.</p>
  <h2>Skills & Interests</h2>
  <p>Here are some things I enjoy doing, to varying levels of competency. Software-specific skills are in <span className="primary-accent"><strong>purple</strong></span>:</p>
  <Skills data={data} />
  <h2>Industries</h2>
  <p>I’m particularly interested in these areas of work:</p>
  <Interests data={data} />
  <h2 id="projects">Projects</h2>
  Some things I’ve made (most recent first):
  <h3>Software</h3>
  {renderProjects(data.allMarkdownRemark.edges
    .filter(({ node }) => node.frontmatter.type === 'software'))}
  <h3>Video</h3>
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

export default Home
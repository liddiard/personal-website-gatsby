import React from 'react'
import { Link, graphql } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import Layout from '../components/layout'


const Skills = ({ data }) => (
  <ul className="skills">
    {data.edges.map(({ node }) =>
      <li
        key={node.name}
        style={node.type === 'software' ? { color: '#6653ff', fontWeight: '600' } : {}}
      >
        {node.name}
      </li>
    )}
  </ul>
);

const Interests = ({ data }) => (
  <ul className="interests">
    {data.edges.map(({ node }) =>
      <li key={node.name}>
        {node.name}
      </li>
    )}
  </ul>
);

const renderProjects = (edges) => (
  <ul className="projects">
    {edges
      .sort((a, b) => b.node.frontmatter.year - a.node.frontmatter.year)
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

const metaDescription = 'Harrison Liddiard is a technical product manager working at PayPal in New York City. See his projects and resume.';
const Home = ({ data }) => <Layout page="front" meta={{ description: metaDescription }}>
  <header>
    <h1 className="name">Harrison Liddiard</h1>
    <p className="tagline">Product manager, design & aviation enthusiast</p>
  </header>
  <p className="lede">Hi! I’m Harrison, a technical product manager at <OutboundLink href="https://www.paypal.com" target="_blank" rel="noopener noreferrer">PayPal</OutboundLink> with a software engineering background. Check out my <a href="#projects">projects</a> below and my <Link to="/resume">resumé</Link> for some things I’ve done. You can also find me on <OutboundLink href="https://linkedin.com/in/liddiard" target="_blank" rel="noopener noreferrer">LinkedIn</OutboundLink> and <OutboundLink href="https://github.com/liddiard/" target="_blank" rel="noopener noreferrer">GitHub</OutboundLink>.</p>
  <h2>Skills & Interests</h2>
  <p>Here’s some stuff I enjoy learning about and doing. Technical skills are in <span className="primary-accent"><strong>purple</strong></span>:</p>
  <Skills data={data.allSkillsJson} />
  <h2>Industries</h2>
  <p>I’m particularly interested in these areas of work:</p>
  <Interests data={data.allInterestsJson} />
  <h2 id="projects">Projects</h2>
  Some things I’ve made – most recent first:
  {renderProjects(data.allMarkdownRemark.edges
    .filter(({ node }) => node.frontmatter.type === 'software'))}
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
            year
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
import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { OutboundLink } from 'gatsby-plugin-google-analytics';

export default ({ data }) => {
  const post = data.markdownRemark,
    metadata = post.frontmatter
  let link, github;
  if (metadata.link) {
    link = <OutboundLink href={metadata.link} target="_blank" rel="noopener noreferrer" className="project-link">{metadata.link}</OutboundLink>;
  }
  if (metadata.github) {
    github = <>
      <strong>Code:</strong>{" "}
      <OutboundLink href={`https://github.com/${metadata.github}`} target="_blank" rel="noopener noreferrer">
        {metadata.github}
      </OutboundLink>
    </>
  }
  return (
    <Layout page="project" pageTitle={metadata.title} metaDescription={metadata.description}>
      <article>
        <h1>{metadata.title}</h1>
        <h2>{metadata.description}</h2>
        {link}
        <div className="project-info">
          <strong>Involvement:</strong> {metadata.involvement}<br/>
          <strong>Skills:</strong> {metadata.skills}<br/>
          {github}
        </div>
        <div className="article-body" dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
      <aside>
        {metadata.media.map(media => {
          const mediaPath = post.fields.slug + media.filename
          switch (media.type) {
            case 'image':
              return <figure>
                <img src={mediaPath} />
                  <figcaption>{media.caption}</figcaption>
              </figure>
            case 'video':
              return <figure>
                <video src={mediaPath} controls autoPlay muted loop playsInline />
                  <figcaption>{media.caption}</figcaption>
              </figure>
            default:
              return console.error('unknown media type:', media.type);
          }})}
      </aside>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      html
      frontmatter {
        title
        description
        link
        github
        involvement
        skills
        media {
          caption
          filename
          type
        }
      }
    }
  }
`

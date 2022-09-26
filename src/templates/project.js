import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { OutboundLink } from 'gatsby-plugin-google-analytics';

const getMediaPath = (post, media) =>
  post.fields.slug + media.filename

const renderMedia = (post, media) => {
  const { filename, type, caption } = media
  const path = getMediaPath(post, media)
  let mediaElement
  switch (type) {
    case 'image':
      mediaElement = <img src={path} alt={caption} />
      break
    case 'video':
      mediaElement = <video src={path} controls autoPlay muted loop playsInline />
      break
    default:
      console.error('unknown media type:', type);
  }
  return <figure key={filename}>
    <a
      title="Open in new window"
      href={path}
      target="_blank"
      rel="noreferrer"
    >
      {mediaElement}
    </a>
    <figcaption>{caption}</figcaption>
  </figure>
}

const Project = ({ data }) => {
  const post = data.markdownRemark,
    metadata = post.frontmatter,
    { media, description } = metadata,
    firstImage = media.find(m => m.type === 'image'),
    firstImagePath = firstImage && getMediaPath(post, firstImage)
  let link, github;
  if (metadata.link) {
    link = <OutboundLink href={metadata.link} target="_blank" rel="noopener noreferrer" className="project-link">{metadata.link}</OutboundLink>;
  }
  if (metadata.github) {
    github = <div>
      <dt>Code:</dt>{" "}
      <dd>
        <OutboundLink href={`https://github.com/${metadata.github}`} target="_blank" rel="noopener noreferrer">
          {metadata.github}
        </OutboundLink>
      </dd>
    </div>
  }
  return (
    <Layout page="project" pageTitle={metadata.title} meta={{ description, image: firstImagePath && `https://harrisonliddiard.com${firstImagePath}`}}>
      <article>
        <h1>{metadata.title}</h1>
        <h2>{metadata.description}</h2>
        {link}
        <dl className="project-info">
          <div>
            <dt>Involvement:</dt> <dd>{metadata.involvement}</dd>
          </div>
          <div>
            <dt>Skills:</dt> <dd>{metadata.skills}</dd>
          </div>
          {github}
        </dl>
        <div className="article-body" dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
      <aside>
        {media.map(media => renderMedia(post, media))}
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

export default Project
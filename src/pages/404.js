import React from 'react'
import Layout from '../components/layout'

export default () => <Layout page="credits" pageTitle="Not Found">
  <h1>Not Found</h1>
  <p>Uh oh! That page doesn’t exist. Try one of the links from the navigation above.</p>
  <div style={{ width: '100%', height: 0, paddingBottom: '100%', position: 'relative' }}>
    <iframe src="https://giphy.com/embed/YyKPbc5OOTSQE" width="100%" height="100%" style={{position: 'absolute'}} frameBorder="0" className="giphy-embed" title="404" allowFullScreen />
  </div>
  <p><a href="https://giphy.com/gifs/gustavo-art-kidmograph-gustavo-YyKPbc5OOTSQE">via GIPHY</a></p>
</Layout>
import React from 'react'
import Helmet from 'react-helmet'
import Footer from './footer'
import Header from './header'

const Layout = ({ page, children, pageTitle, meta = {} }) => (
  <>
    <main className={`container ${page ? page : ''}`}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{pageTitle + ' | Harrison Liddiard'}</title>
        <meta property="og:image" content={meta.image || 'https://harrisonliddiard.com/img/default_og_image.png'} />
        {meta.description ? <meta name="description" content={meta.description} /> : null}
      </Helmet>
      <Header />
      <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400&family=Lora:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
      {children}
    </main>
    <Footer />
  </>
)

export default Layout
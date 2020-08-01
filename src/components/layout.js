import React from 'react'
import Helmet from 'react-helmet'
import Footer from './footer'
import Header from './header'

export default ({ page, children, pageTitle, metaDescription }) => (
  <main className={`container ${page ? page : ''}`}>
    <Helmet>
      <meta charSet="utf-8" />
      <title>{pageTitle + ' | Harrison Liddiard'}</title>
      {metaDescription ? <meta name="description" content={metaDescription} /> : null}
    </Helmet>
    <Header />
    <link href="https://fonts.googleapis.com/css?family=Muli:400,600,700|Overpass:400,700&display=swap" rel="stylesheet" />
    {children}
    <Footer />
  </main>
)

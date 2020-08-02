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
    <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400&family=Lora:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
    {children}
    <Footer />
  </main>
)

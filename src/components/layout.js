import React from 'react'
import Helmet from 'react-helmet'
import Footer from './footer'
import Header from './header'

export default ({ page, children, pageTitle }) => (
    <main className={`container ${page ? page : ''}`}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{pageTitle + ' | Harrison Liddiard'}</title>
        </Helmet>
        <Header />
        <link href="https://fonts.googleapis.com/css?family=Muli:400,600|Overpass:400,700&display=swap" rel="stylesheet" />
        {children}
        <Footer />
    </main>
)

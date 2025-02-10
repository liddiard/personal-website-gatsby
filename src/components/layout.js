import React from 'react'
import Helmet from 'react-helmet'
import Footer from './footer'
import Header from './header'

const Layout = ({ page, children, pageTitle, meta = {} }) => (
  <>
    <main className={`container ${page ? page : ''}`}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{[pageTitle, 'Harrison Liddiard'].filter(Boolean).join(' | ')}</title>
        <meta property="og:image" content={meta.image || 'https://harrisonliddiard.com/img/default_og_image.png'} />
        {meta.description ? <meta name="description" content={meta.description} /> : null}
      </Helmet>
      <Header />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Gabarito:wght@400..900&family=Lexend:wght@100..900&display=swap" rel="stylesheet" />
      {children}
    </main>
    <Footer />
  </>
)

export default Layout
import React from 'react'

const Seo = ({ pageTitle, meta = {} }) => (
  <>
    <meta charSet="utf-8" />
    <title>{[pageTitle, 'Harrison Liddiard'].filter(Boolean).join(' | ')}</title>
    <meta property="og:image" content={meta.image || 'https://harrisonliddiard.com/img/default_og_image.png'} />
    {meta.description && <meta name="description" content={meta.description} />}
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    <link href="https://fonts.googleapis.com/css2?family=Gabarito:wght@400..900&family=Lexend:wght@100..900&display=swap" rel="stylesheet" />
  </>
)

export default Seo

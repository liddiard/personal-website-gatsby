import React from 'react'
import Footer from './footer'
import Header from './header'

const Layout = ({ page = '', children, className = '' }) => (
  <>
    <main className={['container', page, className].join(' ')}>
      <Header />
      {children}
    </main>
    <Footer />
  </>
)

export default Layout

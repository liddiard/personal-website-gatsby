import React from 'react'
import { Link } from 'gatsby'

const Footer = () => <footer>
  Content © {new Date().getFullYear()} Harrison Liddiard – All rights reserved. Product names, logos, and brands are property of their respective owners. <Link to="/credits">Background image credits</Link>.
</footer>

export default Footer
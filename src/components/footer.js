import React from 'react'
import { Link } from 'gatsby'

export default () => <footer>
  Text, images, and videos copyright © {new Date().getFullYear()} Harrison Liddiard. All rights reserved. Product names, logos, and brands are property of their respective owners. <Link to="/credits">Background image credits</Link>.
</footer>

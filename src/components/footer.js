import React from 'react'
import { Link } from './link'

export default () => <footer>
    Copyright © {new Date().getFullYear()} Harrison Liddiard, all rights reserved. Product names, logos, and brands are property of their respective owners. <Link to="/credits">Background image credits</Link>.
</footer>

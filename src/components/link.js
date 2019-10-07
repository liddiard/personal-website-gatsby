import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { OutboundLink as GoogleOutboundLink } from 'gatsby-plugin-google-analytics'
import palette from 'google-palette'

// http://google.github.io/palette.js/
const seq = palette('tol-rainbow', 10)
const setColor = (ev) => {
    ev.target.style = `background-color: #${seq[Math.floor(Math.random() * seq.length)]}44`
    ev.target.classList.add('no-text-shadow')
}
const clearColor = (ev) => {
    ev.target.style = ''
    ev.target.classList.remove('no-text-shadow')
}

export const Link = (props) => 
    <GatsbyLink onMouseEnter={setColor} onMouseLeave={clearColor} {...props} />

export const OutboundLink = (props) => 
    <GoogleOutboundLink onMouseEnter={setColor} onMouseLeave={clearColor} {...props} />

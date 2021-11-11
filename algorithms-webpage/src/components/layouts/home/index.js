// Index for the home layout, this is loaded for the home page.
import { Box } from '@mui/material'
import React from 'react'
import Header from './header'
import Hero from './hero'


// Imports netlify identity into our script into HTML.
// Must be called from React life-cyle function, some form
// of 'did mount/ on mount' functionality.
function initNetlifyIdentity() {
    console.log("initNetlifyIdentity called.")
    const script = document.createElement("script")
    script.src = "https://identity.netlify.com/v1/netlify-identity-widget.js"
    script.async = true

    document.body.appendChild(script)
}

export default function Layout({children}) {
    initNetlifyIdentity()

    return (
        <Box>
            <Header/>
            <Hero/>
            <Box >
                {children}
            </Box>
        </Box>
    )
}
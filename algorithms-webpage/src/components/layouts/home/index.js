import { Box } from '@mui/material'
import React from 'react'
import Header from './header'
import Hero from './hero'


export default function Layout({children}) {

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
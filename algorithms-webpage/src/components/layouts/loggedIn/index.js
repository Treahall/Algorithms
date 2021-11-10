import { Box } from '@mui/material'
import React from 'react'
import ResponsiveDrawer from '../../responsiveDrawer.component'
import Routes from '../../routes.component'
import Header from './header'
import Hero from './hero'


export default function Layout({children}) {

    return (
        <Box sx={{ 
            backgroundColor: '#0c1e42'
         }}>
            <Header/>
            <Hero>
            {children}
            </Hero>
        </Box>
    )
}
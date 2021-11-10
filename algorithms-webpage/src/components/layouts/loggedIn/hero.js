import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import HeroImage from '../../../images/hero_image.png'

export default function Hero({children}) {

    return (
        <Box sx={{
            minHeight: '100vh',
            backgroundColor: '#0c1e42',
            backgroundImage: `url(${HeroImage})`, 
            opacity: '100%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPositionX: '90%',
            backgroundPositionY: '90%'
        }} >

            <Box className='content' sx={{   
                position: 'absolute',
                top: '6em'
            }}>
                {children}
            </Box>

        </Box>
    )
}

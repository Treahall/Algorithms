import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import HeroImage from '../../../images/hero_image.png'

export default function Hero() {

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
                top: '10em',
                left: '10em'
            }}>
                <Typography variant='h1' fontSize={100} color='#B7F0F9' >
                    CREATORS:
                </Typography>
                <Typography variant='h2' fontSize={60} color='#8FB0B5' paddingTop='.5em' letterSpacing='.05em' >
                    Trever Hall - Frontend Dev - treahall@ut.utm.edu
                </Typography>
                <Typography variant='h2' fontSize={60} color='#8FB0B5' paddingTop='.5em' letterSpacing='.05em' >
                    Collin Winstead - Backend Dev - collwins@ut.utm.edu
                </Typography>
            </Box>

        </Box>
    )
}

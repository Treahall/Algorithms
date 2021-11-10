import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import HeroImage from '../../../images/hero_image.png'
import { Link } from 'react-router-dom'

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
                    LEARN ALGORITHMS
                </Typography>
                <Typography variant='h2' fontSize={60} color='#8FB0B5' maxWidth='20em' letterSpacing='.05em' >
                Visual demonstrations of algorithms that help you understand them and implement your own.
                </Typography>
                <Button id='login-btn' sx={{ 
                    backgroundColor: '#ffb092',
                    marginTop: '2em',
                    color: '#0C1D40',
                    "&:hover": {
                        backgroundColor: '#0C1D40',
                        color: '#ffb092'
                    } }} >

                    <Typography variant='h3' component={Link} to='/user/example' fontSize={40} sx={{
                        textDecoration: 'none',
                        color: '#ffb092',
                        "&:visited": {
                            color: '#0C1D40'
                        },
                        "&:hover": {
                            color: '#ffb092'
                        },
                    }}  >
                        LOGIN WITH GOOGLE
                    </Typography>
                </Button>
            </Box>

        </Box>
    )
}
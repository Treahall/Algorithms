// Hero for the home layout
import { Box, Button, Typography } from '@mui/material'
import React, { useLayoutEffect, useEffect, useState } from 'react'
import HeroImage from '../../../images/hero_image.png'
import { Link, useHistory } from 'react-router-dom'

const openNetlifyModal = () => {
    const netlifyIdentity = window.netlifyIdentity
    console.log(netlifyIdentity.currentUser())
    if(netlifyIdentity){
        netlifyIdentity.open()
    } else
    console.log("netlifyIdentity not defined.")
}


export default function Hero() {
    const history = useHistory()
    const [user, setUser] = useState(window.netlifyIdentity.currentUser())
    
    window.netlifyIdentity.on('login', () => {
        setUser(window.netlifyIdentity.currentUser())
        history.push('/logged-in/insertion_sort')
    })

    window.netlifyIdentity.on('logout', () => {
        setUser(window.netlifyIdentity.currentUser())
        window.location.reload(true)
    })

    useEffect(() => {
        return () => {
            window.netlifyIdentity.off('logout')
        }
    }, [])

    const loginBtn = (
        <Button component={Link} to='/' id='login-btn' onClick={openNetlifyModal} sx={{ 
            backgroundColor: '#ffb092',
            marginTop: '2em',
            color: '#0C1D40',
            "&:hover": {
                backgroundColor: '#0C1D40',
                color: '#ffb092'
            } }} >
    
            <Typography variant='h3' fontSize={40} sx={{
                textDecoration: 'none',
                color: '#0C1E42',
                "&:visited": {
                    color: '#0C1E42'
                },
                "&:hover": {
                    color: '#ffb092'
                },
            }}  >
                LOGIN TO LEARN
            </Typography>
        </Button>
    )

    const backToAlgorithmsBtn = (
        <Button component={Link} to='/logged-in/insertion_sort' id='back-to-algoritms-btn' sx={{ 
            backgroundColor: '#ffb092',
            marginTop: '2em',
            color: '#0C1D40',
            "&:hover": {
                backgroundColor: '#0C1D40',
                color: '#ffb092'
            } }} >
    
            <Typography variant='h3' fontSize={40} sx={{
                textDecoration: 'none',
                color: '#0C1E42',
                "&:visited": {
                    color: '#0C1E42'
                },
                "&:hover": {
                    color: '#ffb092'
                },
            }}  >
                BACK TO ALGORITHMS
            </Typography>
        </Button>
    )
    
    
    useEffect(() => {
        return () => {
        };

    }, [])

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
                {!!user ? backToAlgorithmsBtn : loginBtn}
            </Box>

        </Box>
    )
}

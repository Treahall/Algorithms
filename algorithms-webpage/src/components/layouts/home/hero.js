// Hero for the home layout
import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import HeroImage from '../../../images/hero_image.png'
import { Link } from 'react-router-dom'
import netlifyAuth from '../../netlifyAuth'
import axios from 'axios'

const openNetlifyModal = () => {
    const netlifyIdentity = window.netlifyIdentity
    console.log(netlifyIdentity.currentUser())
    if(netlifyIdentity){
        netlifyIdentity.open()
        //add user to db if they do not exist already
        netlifyIdentity.on('login', user => {
            axios.post("https://learn-algorithms.herokuapp.com/users/add", {
                username: user.user_metadata.full_name,
                email: user.email
            })
            .then(res =>{console.log(res)})
            .catch(err =>{console.log(err.response.data)});
        })
    } else
    console.log("netlifyIdentity not defined.")
}


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
                <Button component={Link} to='/user/:id' id='login-btn' onClick={openNetlifyModal} sx={{ 
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
                        LOGIN WITH GOOGLE
                    </Typography>
                </Button>
            </Box>

        </Box>
    )
}

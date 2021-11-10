import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Logo } from '../../../images/icons'
import { Link } from 'react-router-dom'

// TO USE 'EMOTION' CSS STYLES: 
// these comments tell babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'

export default function Header() {

    return (
        <AppBar sx={{
            background: 'transparent',
            boxShadow: 'none',
            padding: '1em' 
        }}>
            <Toolbar>

                <Box component={Link} to='/' id='logo' className='logo' sx={{
                    display: 'inline-block'
                }}>
                    <Logo/>
                </Box>
                <Box sx={{ flexGrow: 1 }} />

                <Box >
                    <Typography variant='subtitle' component={Link} to='/contact' sx={{
                        textDecoration: 'none',
                        color: '#8FB0B5S', 
                        "&:hover": {
                            color: '#8FB0B5'
                        },
                        "&:visited": {
                            color: '#8FB0B5'
                        }
                    }} >
                        CONTACT US
                    </Typography>
                </Box>

            </Toolbar>
        </AppBar>
    )
}
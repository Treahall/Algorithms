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
                    display: 'inline-block', zIndex: 900
                }}>
                    <Logo />
                    
                </Box>
                <Typography variant='h5' sx={{
                    fontSize: '20',
                    paddingLeft: '4.8em',
                    color: '#A5735F'
                }}>
                        LEARN ALGORITHMS
                </Typography>
                
                <Box sx={{ flexGrow: 1 }} />

                <Box >
                    <Typography id='user-greeting' variant='h5'  sx={{
                        fontSize: `30`,
                        fontWeight: 'bold',
                        textDecoration: 'none',
                        color: '#A5735F', 
                        "&:hover": {
                            color: '#A5735F'
                        },
                        "&:visited": {
                            color: '#A5735F'
                        }
                    }} >
                        {/*//! Welcome the person */}
                        WELCOME BACK TREVER
                    </Typography>
                </Box>

            </Toolbar>
        </AppBar>
    )
}
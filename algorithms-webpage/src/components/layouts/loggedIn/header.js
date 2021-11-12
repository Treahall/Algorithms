import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Logo } from '../../../images/icons'
import { Link, useHistory } from 'react-router-dom'


export default function Header() {
    let netlifyIdentity = window.netlifyIdentity 
    let user = netlifyIdentity.currentUser()
    let history = useHistory()
    

    const handleLogout = async () => {
        await netlifyIdentity.logout()
        netlifyIdentity.on('logout', () => {
            user = null
            return Promise.resolve()
         })
        history.push('/')
        window.location.reload(true)
    }

    const logoutBtn = (
        <Button sx={{ marginBottom: '.25em' }} onClick={handleLogout} >
            <Typography id='user-logout' variant='subtitle'  sx={{
                fontSize: 15,
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
                Logout
            </Typography>
        </Button>

    )

    const greeting = (
        <>
            <Typography id='user-greeting' variant='h5'  sx={{
                display: 'inline-block',
                alignItems: 'center',
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
                {!!user
                    ? 'Welcome ' + user.user_metadata.full_name + ' | '
                    : 'not logged in'
                }
            </Typography>
            {logoutBtn}
        </>
    )

    return (
        <AppBar sx={{
            position: 'relative',
            background: 'transparent',
            boxShadow: 'none',
            padding: '1em' 
        }}>
            <Toolbar sx={{ textAlign: 'center' }}>

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

                <Box sx={{ textAlign: 'center', }} >
                    {greeting}
                </Box>

            </Toolbar>
        </AppBar>
    )
}
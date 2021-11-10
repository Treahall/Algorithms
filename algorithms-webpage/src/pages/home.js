
//header code adapted from: https://www.youtube.com/watch?v=CUJfepWtM_s

import React from 'react'
import { Box, CssBaseline, Button, AppBar } from '@mui/material'
import Logo from '../images/icons/svgs/LOGO.svg'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/home'

export default function Home() {
    return (
        <Layout>

        </Layout>
    )
}




// const Header = () => {
//  return (
//      <header className='header'>
//          <Box id='logo' className='logo'>
//             <Link to='/'  >
//                 <img src={Logo} />
//             </Link>
//          </Box>
//          <Box sx={{flexGrow: 1}} />

//          <Box className='contact-nav'>
//             <Link to='/contact'>
//                 <Button sx={{  }} >
//                     Contact Us
//                 </Button>
//             </Link>
//          </Box>
//      </header>
//  )   
// }

// export default function Home() {

//     return (
//         <Box sx={{
//             minHeight: '100vh',
//             backgroundColor: '#0C1E42',
//             backgroundImage: `url(${HeroImage})`,
//             opacity: '100%'
//         }}>
//             <CssBaseline/>
            
//         </Box>
//     )
// }

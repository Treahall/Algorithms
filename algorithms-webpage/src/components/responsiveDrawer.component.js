import * as React from 'react';
import { IconButton, Drawer, Divider, AppBar, Box, CssBaseline,
    List, ListItemButton, ListItemText, Toolbar, Typography, Button
    } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import GoogleLogin from 'react-google-login';
import axios from 'axios';
import Routes from './routes.component';
import App from '../App';

const drawerWidth = 190;

function ResponsiveDrawer(props) {
    const { children } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    //Handles user info
    const [user, setUser] = React.useState();

    //Handles the welcome message
    const [welcome_message, setMessage] = React.useState();

    //Updates welcome message on load/update
    React.useEffect(() =>{
      updateWelcomeMessage();
    })

    const [selectedIndex, setSelectedIndex] = React.useState(-1);

    const handleListItemClick = (event, index) => {
      setSelectedIndex(index);
    };

    const responseGoogle=(response)=>{
        postGoogleUserData(response.profileObj);
    }

    //Updates the welcome message if the user is logged in.
    function updateWelcomeMessage(){
      if(user == null){
        return;
      }
      else{
        setMessage(`Welcome, ${user}.`);
      }
    }

    //Posts new user to the database
    function postGoogleUserData(profileObj){
        axios.post('https://learn-algorithms.herokuapp.com/users/add', {
          username: profileObj.name,
          email: profileObj.email
        })
          .then(res =>{
            setUser(profileObj.name);
          })
          .catch(err=>{
            if(err.response.data.indexOf('duplicate key error') !== -1){
              setUser(profileObj.name);
            }
            else{
              console.log(err);
            }
          })
    }

    const drawer = (
        <Box sx={{ background: 'transparent' }} >
            <Toolbar sx={{ height: '8em' }} />
            <List >
                <ListItemButton component={Link} selected={selectedIndex === 0}
                    to="/logged-in/insertion_sort" style={{ textDecoration: 'none', color: '#B7F0F9', padding: '1em 0 1em 2.4em' }}
                    onClick={(event) => handleListItemClick(event, 0)}
                >
                    <Typography variant='subtitle' sx={{
                        textDecoration: 'none',
                        color: '#8FB0B5S', 
                    }} >
                        INSERTION SORT
                    </Typography>
                    {/* <ListItemText primary="Insertion Sort"/> */}
                </ListItemButton>

                <ListItemButton component={Link} selected={selectedIndex === 1}
                    to="/logged-in/merge_sort" style={{ textDecoration: 'none', color: '#B7F0F9', padding: '1em 0 1em 2.4em' }}
                    onClick={(event) => handleListItemClick(event, 1)}
                >
                        <Typography variant='subtitle' sx={{
                        textDecoration: 'none',
                        color: '#8FB0B5S', 
                    }} >
                        MERGE SORT
                    </Typography>
                </ListItemButton>

                <ListItemButton component={Link} selected={selectedIndex === 2}
                    to="/logged-in/bubble_sort" style={{ textDecoration: 'none', color: '#B7F0F9', padding: '1em 0 1em 2.4em' }}
                    onClick={(event) => handleListItemClick(event, 2)}
                >
                        <Typography variant='subtitle' sx={{
                        textDecoration: 'none',
                        color: '#8FB0B5S', 
                    }} >
                        BUBBLE SORT
                    </Typography>
                </ListItemButton>

                <ListItemButton component={Link} selected={selectedIndex === 3}
                    to="/logged-in/quick_sort" style={{ textDecoration: 'none', color: '#B7F0F9', padding: '1em 0 1em 2.4em' }}
                    onClick={(event) => handleListItemClick(event, 3)}
                >
                        <Typography variant='subtitle' sx={{
                        textDecoration: 'none',
                        color: '#8FB0B5S', 
                    }} >
                        QUICK SORT
                    </Typography>
                </ListItemButton>
            </List>
        </Box>
    );

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />


            <Box
                component="nav" 
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }, background: 'transparent', zIndex: '800' }}
                aria-label="mailbox folders"
                >
                {/* ### The mobile (aka small) version of the drawer ### */}

                <Drawer 
                    hideBackdrop='true'
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    BackdropProps={{
                        background: 'transparent'
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, background: 'transparent', boxShadow: 'none'  },
                    }}
                    >
                        {drawer}
                </Drawer>

                {/* ### The desktop (aka large) version of the drawer ### */}
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' }, flexShrink: 0,
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, background: 'transparent', boxShadow: 'none' },
                        
                    }}
                    open
                    >
                        {drawer}
                </Drawer>

            </Box>

            {/* <Box sx={{ marginTop: '3.2em' }} >
                <Typography variant='h1' >
                    Insertion Sort
                </Typography>
            </Box> */}

            <Box component="content" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                {children}

            </Box>
        </Box>
    );
}

export default ResponsiveDrawer;

import * as React from 'react';
import { IconButton, Drawer, Divider, AppBar, Box, CssBaseline,
    List, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography, Button
    } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import {BrowserRouter as Router, Route} from "react-router-dom"

const drawerWidth = 240;

function ResponsiveDrawer(props) {
    const { children } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const [selectedIndex, setSelectedIndex] = React.useState(-1);

    const handleListItemClick = (event, index) => {
      setSelectedIndex(index);
    };

    const drawer = (
        <div>
            <Router>
                <Toolbar/>  
                <Divider />
                <List>
                    <ListItemButton selected={selectedIndex === 0}
                        onClick={(event) => handleListItemClick(event, 0)}
                    >
                        <Link to="/insertion_sort" style={{ textDecoration: 'none' }}>
                        <ListItemText primary="Insertion Sort"/>
                        </Link>
                    </ListItemButton>

                    <ListItemButton selected={selectedIndex === 1}
                        onClick={(event) => handleListItemClick(event, 1)}
                    >
                        <Link to="/merge_sort" style={{ textDecoration: 'none' }}>
                            <ListItemText primary="Merge Sort"/>
                        </Link>
                    </ListItemButton>

                    <ListItemButton selected={selectedIndex === 2}
                        onClick={(event) => handleListItemClick(event, 2)}
                    >
                        <Link to="/bubble_sort" style={{ textDecoration: 'none' }}>
                            <ListItemText primary="Bubble Sort"/>
                        </Link>
                    </ListItemButton>

                    <ListItemButton selected={selectedIndex === 3}
                        onClick={(event) => handleListItemClick(event, 3)}
                    >
                        <Link to="/quick_sort" style={{ textDecoration: 'none' }}>
                            <ListItemText primary="Quick Sort"/>
                        </Link>
                    </ListItemButton>
                </List>
            </Router> 
        </div>
    );



    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                sx={{
                width: '100%',
                position: "fixed",
                zIndex:  (theme) => theme.zIndex.drawer + 1
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Router>
                        <Button component="Typography" color="inherit" onClick={(event) => handleListItemClick(event, -1)}>
                            <Link to="/" style={{ textDecoration: 'none' }}>
                                <Typography component="div" variant="h6" noWrap >
                                    Algorithms
                                </Typography>
                            </Link>
                            
                        </Button>
                    </Router>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* ### The mobile (aka small) version of the drawer ### */}
                <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                >
                    {drawer}
                </Drawer>
                {/* ### The desktop (aka large) version of the drawer ### */}
                <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' }, flexShrink: 0,
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                open
                >
                    {drawer}
                </Drawer>
            </Box>

            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                
                { children }
            </Box>
        </Box>
    );
}

export default ResponsiveDrawer;
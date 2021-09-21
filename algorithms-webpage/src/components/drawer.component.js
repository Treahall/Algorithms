import * as React from 'react';
import { IconButton, Drawer, Divider, AppBar, Box, CssBaseline,
    List, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography
    } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth = 240;

function ResponsiveDrawer(props) {
    const { children } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleRouting = (algName) => {
        
    }

    const drawer = (
        <div>
            <Toolbar/>  
            <Divider />
            <List>
                {['Insertion Sort', 'Merg Sort', 'Bubble Sort', 'Quick Sort'].map((text, index) => (
                <ListItemButton onClick={() => handleRouting(text)} key={text}>
                    <ListItemText primary={text} />

                </ListItemButton>
                ))}
            </List>
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
                    <Typography variant="h6" noWrap component="div">
                        Algorithms
                    </Typography>
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
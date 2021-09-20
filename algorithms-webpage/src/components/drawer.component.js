import React, { Children, Component } from 'react';
import { Link } from 'react-router-dom';
import { Box, CssBaseline, AppBar, Toolbar, IconButton, Typography, Drawer, 
    Divider, List, ListItem, ListItemIcon, ListItemText
    } from '@material-ui/core';
import { Menu, Inbox, Mail } from '@material-ui/icons';


const drawerWidth = 240;

export default class ResponsiveDrawer extends Component {
    constructor(props) {
        super(props)

        this.state={
            mobileOpen: false
        }
    }

    handleDrawerToggle = () => {
        this.setState({mobileOpen: !this.state.mobileOpen})
    }

    render () {
        const { window, classes, children } = this.props;
        const { mobileOpen } = this.state;
    
        const drawer = (
            <div>
                <Toolbar />
                <Divider />
                <List>
                    {['Insertion Sort', 'Merge Sort', 'Bubble Sort', 'Quick Sort'].map((text, index) => (
                    <ListItem button key={text}>
                        {/* <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon> */}
                        <ListItemText primary={text} />
                    </ListItem>
                    ))}
                </List>
            </div>
        );

        const container = window !== undefined ? () => window().document.body : undefined;

        return(
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    }}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={this.handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <Menu />
                        </IconButton>
                        <Typography variant="h6" noWrap component="div">
                            Responsive drawer
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                    aria-label="mailbox folders"
                >
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={this.handleDrawerToggle}
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
                    <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                    >
                    {drawer}
                    </Drawer>
                </Box>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Toolbar />
                    {children}
                </Box>
            </Box>
        )
    }      
}
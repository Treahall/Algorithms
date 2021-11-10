import React from 'react';
import "fontsource-roboto";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
//import {createTheme} from '@mui/material';
//import { purple, yellow } from '@mui/material/colors';
import './App.css';
import ResponsiveDrawer from "./components/responsiveDrawer.component";
import Routes from './components/routes.component';
import Home from './pages/home';
import LoggedIn from './pages/loggedIn';
import Contact from './pages/contact';
import { Box } from '@mui/material';

function App() {
  return (
    <Box sx={{ backgroundColor: '#0c1e42' }}>
      <Router>
          <Switch>
            <Route path="/" exact component={ Home } />
            <Route path="/contact" exact component={ Contact }/>
            <Route path="/user/:id" component={ LoggedIn }/>
          </Switch>
      </Router>
    </Box>

  );
}

export default App;
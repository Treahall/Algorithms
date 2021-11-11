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

// Imports netlify identity into our script into HTML.
// Must be called from React life-cyle function, some form
// of 'did mount/ on mount' functionality.
function initNetlifyIdentity() {
  console.log("initNetlifyIdentity called.")
  const script = document.createElement("script")
  script.src = "https://identity.netlify.com/v1/netlify-identity-widget.js"
  script.async = true

  document.body.appendChild(script)
}

function App() {
  document.body.style = 'background: #0c1e42'

  initNetlifyIdentity()
  const netlifyIdentity = window.netlifyIdentity
  netlifyIdentity.on('init', user => console.log('init', user))
  netlifyIdentity.init()

  return (
    <Box>
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
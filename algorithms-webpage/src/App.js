import logo from './logo.svg';
import "fontsource-roboto";
import {BrowserRouter as Router, 
    Route, Switch, Link} from "react-router-dom"
import { Menu } from '@mui/material';
import { AppBar, Container, ThemeProvider, createTheme, Button,
   Typography, IconButton, Toolbar } from '@mui/material'; 
import { purple, yellow } from '@mui/material/colors';
import './App.css';

import ResponsiveDrawer from "./components/drawer.component";
import MainBody from './components/mainbody.component';

const theme = createTheme({
  typography: {
      h2: {
        fontSize: 36
      }
  },
  palette: {
    primary: {
      main: purple[400],
    },
    secondary: {
      main: yellow[200],
    }
  }
})

function App() {
  return (
    <Router>
      <ResponsiveDrawer>
          <Switch>
            <Route exact path="/">
              <MainBody/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/settings">
              <Settings/>
            </Route>
          </Switch>
    </ResponsiveDrawer>
    </Router>

  );
}

import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Title of the page</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/settings">Settings</Link>
      </div>
    </nav>
  );
}

export default Navbar;
export default App;

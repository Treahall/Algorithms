import logo from './logo.svg';
import "fontsource-roboto";
import {BrowserRouter as Router, Route} from "react-router-dom"
import { Menu } from '@material-ui/icons';
import { AppBar, Container, ThemeProvider, createTheme, Button, Typography, IconButton, Toolbar } from '@material-ui/core'; 
import { purple, yellow } from '@material-ui/core/colors';
import './App.css';

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
      <ThemeProvider theme={theme}>
        <div className="App">
          <AppBar color="secondary">
            <Toolbar>
              <IconButton>
                <Menu></Menu>
              </IconButton>
              <Typography variant="h6" style={{ flex: 1 }} align="left">
                Sorting Visualizer
              </Typography>
              <Button>
                Login
              </Button>
            </Toolbar>
          </AppBar>
        </div>
      </ThemeProvider>
    </Router>
    
  );
}

export default App;

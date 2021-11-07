import React from 'react';
import "fontsource-roboto";
import {BrowserRouter as Router} from "react-router-dom"
//import {createTheme} from '@mui/material';
//import { purple, yellow } from '@mui/material/colors';
import './App.css';
import ResponsiveDrawer from "./components/responsiveDrawer.component";
import Routes from './components/routes.component';

// const theme = createTheme({
//   typography: {
//       h2: {
//         fontSize: 36
//       }
//   },
//   palette: {
//     primary: {
//       main: purple[400],
//     },
//     secondary: {
//       main: yellow[200],
//     }
//   }
// })

function App() {
  return (
    <Router>
      <ResponsiveDrawer>
        <Routes>

        </Routes>
      </ResponsiveDrawer>
    </Router>
  );
}

export default App;
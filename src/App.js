import React, { useState } from 'react';
import { cyan, blue, indigo, grey } from '@mui/material/colors';
import { 
  Container,
  CssBaseline,
  responsiveFontSizes,
  Divider,
  ThemeProvider,
  unstable_createMuiStrictModeTheme as createMuiTheme } from '@mui/material';
  import Welcome from './home/Welcome';
  import Projects from './home/Projects';
  import Navbar from './layout/Navbar';
  import Contact from './home/Contact';
  import Footer from './home/Footer';

function App() {

  const [darkState, setDarkState] = useState(false);

  const paletteType = darkState ? 'dark' : 'light';
  const mainPrimary = darkState ? grey[50] : blue[700];
  const mainSecondary = darkState ? cyan[300] : indigo[900];

  let theme = createMuiTheme({
    palette: {
      mode: paletteType,
      primary: {
        main: mainPrimary
      },
      secondary: {
        main: mainSecondary
      }
    }
  });

  theme = responsiveFontSizes(theme);

  const handleThemeChange = () => {
    setDarkState(!darkState);
  }

  return (
   <ThemeProvider theme={theme}>
      <CssBaseline />

      <Navbar 
        isChecked={darkState}
        isChanged={handleThemeChange}
      />

      <Container>
        <Welcome />
        <Divider style={{backgroundColor: theme.palette.secondary.main, marginTop: 20}} />
         <Projects />
        <Divider style={{backgroundColor: theme.palette.secondary.main}} />
        <Contact />
      </Container>

      <Footer />
      
    </ThemeProvider>
  );
}

export default App;

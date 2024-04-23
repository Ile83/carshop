
import './App.css'
import React from 'react'
import Carlist from './components/carlist'
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import { Typography } from '@mui/material';

function App() {
 

  return (
    <>
       <Container maxWidth="xl">
      <CssBaseline />
      <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          CarShop
          </Typography>
          </Toolbar>
          </AppBar>
        <Carlist />
      </Container>
    </>
  )
}

export default App

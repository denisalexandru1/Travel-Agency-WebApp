import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Typography, CssBaseline, Menu, MenuItem } from '@mui/material';
import {BrowserRouter as Router, Route, Routes, Switch, Redirect} from "react-router-dom";
import SearchField from './components/SearchField';
import Home from './components/Home';
import Contact from './components/Contact';
import Destinations from './components/Destinations';
import { Link } from 'react-router-dom';

function App() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <CssBaseline />
        <Router>
          <AppBar position="sticky" style={{ backgroundColor: "#000000", marginBottom: "0px", marginTop : "0px" }}>
            <Toolbar>
              <Toolbar sx={{ flexGrow: 0.1 }} style={{ display: "flex", justifyContent: "space-between" }}>
                <Button href="/" variant="text" color="secondary" size="large">
                  Home
                </Button>
                <Button href="/contact" variant="text" color="secondary" size="large">
                  Contact
                </Button>
                <Button aria-haspopup="true" variant="text" color="secondary" size="large" onClick={handleMenuOpen}>
                  Destinations
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <Button component={Link} to="/destinations" variant="text" color="secondary" size="large" onClick={handleMenuClose}>
                      All Destinations
                    </Button>
                    <Button component={Link} to="/destinations" variant="text" color="secondary" size="large" onClick={handleMenuClose}>
                      Special Offers
                    </Button>
                  </div>
                </Menu>
              </Toolbar>
              <Toolbar sx={{ flexGrow: 0.1 }} style={{ display: "flex", justifyContent: "center" }}>
                <SearchField/>
              </Toolbar>
              <Button href="/login" variant="contained" color="secondary" size="large" style={{ width: "200px", borderRadius: "20px" }}> 
                Login
              </Button>
              <img src={require('./images/logo.png')} alt="Small Logo" style={{ marginLeft: "500px", marginRight: "5px", width: "5%"  }} />
            </Toolbar>
          </AppBar>

          <Routes style={{ marginTop: 0 }}>
            <Route exact path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/offers" element={<Contact />} />
          </Routes>
        </Router>
    </>
  );
}

export default App;

import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Typography, CssBaseline, Menu, MenuItem } from '@mui/material';
import {BrowserRouter as Router, Route, Routes, Switch, Redirect} from "react-router-dom";
import SearchField from './components/SearchField';
import Home from './components/Home';
import Contact from './components/Contact';
import Destinations from './components/Destinations';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import AgentView from './components/AgentView';
import EditDestination from "./components/EditDestination";
import AddDestination from "./components/AddDestination";
import Offers from "./components/Offers";
import { Link } from 'react-router-dom';

function App() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchValue, setSearchValue] = useState('');

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const saveGeoPositions = (lat, long) => {
    localStorage.setItem("latitude", lat);
    localStorage.setItem("longitude", long);
  }

  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      saveGeoPositions(position.coords.latitude, position.coords.longitude);
    });
  } else {
    console.log("Geolocation is not available");
  }

  const handleSearch = () => {
    window.location.href = searchValue === '' ? '/destinations' : '/destinations/' + searchValue;
  }

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
                    <Button component={Link} to="/offers" variant="text" color="secondary" size="large" onClick={handleMenuClose}>
                      Special Offers
                    </Button>
                  </div>
                </Menu>
              </Toolbar>
              <Toolbar sx={{ flexGrow: 0.1 }} style={{ display: "flex", justifyContent: "center" }}>
                <SearchField onSearchChange={setSearchValue}/>
                <Button variant="text" color="secondary" size="large" onClick={handleSearch}>
                  Search
                </Button>
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
            <Route path="/destinations/:location" element={<Destinations />} />
            <Route path="/edit/:id" element={<EditDestination />} />
            <Route path="/add" element={<AddDestination />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/agent" element={<AgentView />} />
          </Routes>
        </Router>
    </>
  );
}

export default App;

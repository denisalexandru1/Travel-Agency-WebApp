import React from 'react';
import { Button, Typography } from '@mui/material';
import background from '../images/home.jpg';

function Home() {
    return (
        <div style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <div style={{ flex: 1 }}>
                    <img src={require('../images/logo.png')} alt="Logo" style={{ display: "block", marginLeft: "auto", marginRight: "auto", width: "50%" }} />
                </div>
                <div style={{ flex: 1,  marginTop: "7px"}}> 
                    <div>
                        <Typography variant="h1" style={{ color: "purple", textAlign: "center", fontSize: "65px", fontWeight: "bold" }}>
                            You dream it
                        </Typography>
                        <Typography variant="h1" style={{ color: "purple", textAlign: "center", fontSize: "65px", fontWeight: "bold" }}>
                            We make it happen
                        </Typography>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
                        <Typography variant="h1" style={{ color: "orange", textAlign: "center", fontSize: "30px", fontWeight: "bold" }}>
                            Welcome to our travel agency
                        </Typography>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
                        <Button href="/destinations" variant="contained" color="secondary" size="large" style={{ width: "500px", height: "50px", borderRadius: "50px", boxShadow: "0 0 20px 0 #000" }}>
                            Get Started
                        </Button>
                    </div>
                </div>
          </div>
        </div>
    );
}

export default Home;
import React from 'react';
import Link from '@mui/material/Link';
import { Box, Typography, TextField, Button } from '@mui/material';

function LoginPage() {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleLogin = () => {
        fetch('http://localhost:5000/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        }).then(response => response.json())
            .then(data => {
                // save the data into the local storage
                localStorage.setItem('user', JSON.stringify(data));

                // redirect to
                window.location.href = data.role === 'AGENT' ? '/agent' : '/destinations';
            })
    }

    return (
        <div style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh',
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(255, 0, 255, 0.1)"
        }}>
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(255, 255, 255, 1)",
                maxWidth: '600px',
                padding: "20px",
                borderRadius: "20px",
                boxShadow: "0 0 5px 0 #000"
            }}>
                <Typography variant="h4" style={{textAlign: 'center', marginBottom: '20px'}}>
                    Enter your credentials
                </Typography>
                <Box sx={{display: 'flex', flexDirection: 'column', maxWidth: '400px'}}>
                    <TextField
                        label="Email"
                        name="email"
                        variant="outlined"
                        onChange={(e) => setEmail(e.target.value)}
                        sx={{mb: 2}}
                    />
                    <TextField
                        label="Password"
                        name="password"
                        type="password"
                        variant="outlined"
                        onChange={(e) => setPassword(e.target.value)}
                        sx={{mb: 2}}
                    />
                    <Button variant="contained" color="secondary" sx={{mb: 2}} onClick={handleLogin}>
                        Log In
                    </Button>
                    <Link href="/register" color="secondary" underline="hover" variant="body2"
                          style={{textAlign: 'center'}}>
                        {"Don't have an account? Sign Up"}
                    </Link>
                </Box>
            </div>
        </div>
    );
}

export default LoginPage;
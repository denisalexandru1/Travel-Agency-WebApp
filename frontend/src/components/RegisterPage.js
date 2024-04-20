import React from "react";
import { Box, Typography, TextField, Button } from '@mui/material';

function RegisterPage() {

    const [email, setEmail] = React.useState('');
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');

    const handleRegister = () => {
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        fetch('http://localhost:5000/user/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                first_name: firstName,
                last_name: lastName,
                password: password,
                role: 'CLIENT'
            })
        }).then(response => response.json())
            .then(data => {
                if (data.error) {
                    alert(data.error);
                } else {
                    localStorage.setItem('token', data.token);
                    window.location.href = '/';
                }
            }).catch((error) => {
                console.error('Error:', error);
            });
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
                        label="First Name"
                        name="firstName"
                        variant="outlined"
                        onChange={(e) => setFirstName(e.target.value)}
                        sx={{mb: 2}}
                    />
                    <TextField
                        label="Last Name"
                        name="lastName"
                        variant="outlined"
                        onChange={(e) => setLastName(e.target.value)}
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
                    <TextField
                        label="Confirm Password"
                        name="confirmPassword"
                        type="password"
                        variant="outlined"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        sx={{mb: 2}}
                    />
                    <Button variant="contained" color="secondary" sx={{mb: 2} } onClick={handleRegister}>
                        Register
                    </Button>
                </Box>
            </div>
        </div>
    );
}

export default RegisterPage;
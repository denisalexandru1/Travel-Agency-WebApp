import React, {useEffect, useState} from "react";
import {Box, Typography, TextField, Button, Switch, FormControlLabel} from '@mui/material';


function EditDestination() {
    const destinationId = window.location.pathname.split("/edit/")[1];

    const [editedDestination, setEditedDestination] = useState({});

    useEffect(() => {
        setEditedDestination(JSON.parse(localStorage.getItem('editDestination')));
    }, []);

    const handleChange = (e) => {
        setEditedDestination({
            ...editedDestination,
            [e.target.name]: e.target.value
        });
    }

    const handleUpdate = () => {
        fetch('http://localhost:5000/destination/update/' + destinationId, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(editedDestination)
        }).then(() => {
            alert('Destination updated successfully');
            window.location.href = '/agent';
        });
    }

    return (
        <div style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh',
            display: "flex",
            flexDirection: "column",
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
                <Typography variant="h4" style={{ textAlign: 'center', marginBottom: '20px' }}>
                    Edit destination
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '400px' }}>
                    <TextField
                        label="Name"
                        name="name"
                        variant="outlined"
                        value={editedDestination.name}
                        onChange={handleChange}
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        label="Location"
                        name="location"
                        variant="outlined"
                        value={editedDestination.location}
                        onChange={handleChange}
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        label="Description"
                        name="description"
                        variant="outlined"
                        value={editedDestination.description}
                        onChange={handleChange}
                        multiline
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        label="Image"
                        name="image"
                        variant="outlined"
                        value={editedDestination.image}
                        onChange={handleChange}
                        multiline
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        label="Slots"
                        name="slots"
                        variant="outlined"
                        value={editedDestination.slots}
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        label="Price"
                        name="price"
                        variant="outlined"
                        value={editedDestination.price}
                        onChange={handleChange}
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        label="Special Price"
                        name="specailprice"
                        variant="outlined"
                        value={editedDestination.special_price}
                        onChange={handleChange}
                        sx={{ mb: 2 }}
                    />
                    <FormControlLabel
                        control={
                            <Switch
                                name="isSpecial"
                                checked={editedDestination.is_special_offer}
                                onChange={(e) => setEditedDestination({
                                    ...editedDestination,
                                    is_special_offer: e.target.checked
                                })}
                            />}
                        label={"Special Offer"}
                        sx={{ mb: 2, display: 'flex', alignItems: 'center' }}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleUpdate}
                        sx={{ mb: 2 }}
                    >
                        Update
                    </Button>
                </Box>
            </div>
        </div>
    );
}

export default EditDestination;
import React, {useEffect, useState} from "react";
import {Box, Typography, TextField, Button, Switch, FormControlLabel} from '@mui/material';


function AddDestination() {

    const [name, setName] = React.useState('');
    const [location, setLocation] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [image, setImage] = React.useState('');
    const [slots, setSlots] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [is_special_offer, setIs_Special_Offer] = React.useState(false);
    const [specialPrice, setSpecial_Price] = React.useState('');

    const handleAdd = () => {
        fetch('https://localhost:5000/destination/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                location: location,
                description: description,
                image: image,
                slots: slots,
                price: price,
                is_special_offer: is_special_offer,
                special_price: specialPrice
            })
        })
            .then(() => {
                alert('Destination added successfully');
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
                    Add a new destination
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '400px' }}>
                    <TextField
                        label="Name"
                        name="name"
                        variant="outlined"
                        onChange={(e) => setName(e.target.value)}
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        label="Location"
                        name="location"
                        variant="outlined"
                        onChange={(e) => setLocation(e.target.value)}
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        label="Description"
                        name="description"
                        variant="outlined"
                        onChange={(e) => setDescription(e.target.value)}
                        multiline
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        label="Image"
                        name="image"
                        variant="outlined"
                        onChange={(e) => setImage(e.target.value)}
                        multiline
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        label="Slots"
                        name="slots"
                        variant="outlined"
                        onChange={(e) => setSlots(e.target.value)}
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        label="Price"
                        name="price"
                        variant="outlined"
                        onChange={(e) => setPrice(e.target.value)}
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        label="Special Price"
                        name="specailprice"
                        variant="outlined"
                        onChange={(e) => setSpecial_Price(e.target.value)}
                        sx={{ mb: 2 }}
                    />
                    <FormControlLabel
                        control={
                            <Switch
                                name="isSpecial"
                                checked={is_special_offer}
                                onChange={(e) => setIs_Special_Offer(e.target.checked)}
                            />}
                        label={"Special Offer"}
                        sx={{ mb: 2, display: 'flex', alignItems: 'center' }}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleAdd}
                        sx={{ mb: 2 }}
                    >
                        Add
                    </Button>
                </Box>
            </div>
        </div>
    );
}

export default AddDestination;
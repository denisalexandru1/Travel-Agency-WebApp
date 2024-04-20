import React, { useState, useEffect } from 'react';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function AgentView() {
    const [destinations, setDestinations] = useState([]);

    const user = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        fetch('http://localhost:5000/destination/get')
            .then(response => response.json())
            .then(data => setDestinations(data));
    }, []);

    const handleDelete = (id) => {
        fetch('http://localhost:5000/destination/delete/' + id, {
            method: 'DELETE'
        }).then(() => {
            fetch('http://localhost:5000/destination/get')
                .then(response => response.json())
                .then(data => setDestinations(data));
        }).then(() => {
            alert('Destination deleted successfully');
        });
    };

    const handleEdit = (id) => {
        fetch('http://localhost:5000/destination/get/' + id)
            .then(response => response.json())
            .then(data => {
                localStorage.setItem('editDestination', JSON.stringify(data));
            })
        window.location.href = '/edit/' + id;
    };

    const handleAdd = () => {
        window.location.href = '/add';
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
            <h1>Welcome Agent {user.first_name}!</h1>
            <h2>List of destinations</h2>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Destination</TableCell>
                            <TableCell>Location</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Is special offer?</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {destinations.map((destination) => (
                            <TableRow key={destination.id}>
                                <TableCell>{destination.id}</TableCell>
                                <TableCell>{destination.name}</TableCell>
                                <TableCell>{destination.location}</TableCell>
                                <TableCell>{destination.price}</TableCell>
                                <TableCell>{destination.is_special_offer ? 'Yes' : 'No'}</TableCell>
                                <TableCell>
                                    <Button variant="contained" color="primary"
                                            onClick={() => handleEdit(destination.id)}>Edit</Button>
                                    <Button variant="contained" color="secondary"
                                            onClick={() => handleDelete(destination.id)}>Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Button
                variant="contained"
                color="secondary"
                style={{ marginTop: '20px' }}
                onClick={() => handleAdd()}
            >
                Add a new destination
            </Button>
        </div>
    );
}

export default AgentView;
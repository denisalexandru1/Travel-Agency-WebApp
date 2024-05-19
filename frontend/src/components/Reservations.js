import React, {useEffect, useState} from "react";
import {Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import ReservationCalendar from "./ReservationCalendar";
import ReservationChart from "./ReservationChart";

function Reservations() {
    const [reservations, setReservations] = useState([]);

    const locationId = window.location.pathname.split("/reservations/")[1];

    useEffect(() => {
        setReservations(JSON.parse(localStorage.getItem('reservations')));
    }
    , []);

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
            <h1>These are the reservations for location {locationId}</h1>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>User ID</TableCell>
                            <TableCell>Destination ID</TableCell>
                            <TableCell>Creation Date</TableCell>
                            <TableCell>Start Date</TableCell>
                            <TableCell>End Date</TableCell>
                            <TableCell>Total Price</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {reservations.map((reservation) => (
                            <TableRow key={reservation.id}>
                                <TableCell>{reservation.id}</TableCell>
                                <TableCell>{reservation.user_id}</TableCell>
                                <TableCell>{reservation.destination_id}</TableCell>
                                <TableCell>{reservation.creation_date}</TableCell>
                                <TableCell>{reservation.start_date}</TableCell>
                                <TableCell>{reservation.end_date}</TableCell>
                                <TableCell>{reservation.total_price}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <br></br>
            <ReservationCalendar reservations={reservations} />

            <Box sx = {{ width: '800px', height: '100%' }}>
                <ReservationChart reservations={reservations} />
            </Box>
        </div>
    );
}

export default Reservations;
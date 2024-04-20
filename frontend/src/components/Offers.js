import React, {useEffect}  from "react";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DatePicker } from '@mui/x-date-pickers';
import { Button, Typography } from '@mui/material';

function Offers() {
    const [startDate, setStartDate] = React.useState(null);
    const [endDate, setEndDate] = React.useState(null);
    const [destinationsArray, setDestinationsArray] = React.useState([]);

    const handleStartDateChange = (date) => {
        setStartDate(date);
        if (endDate && date > endDate) {
            setEndDate(date);
        }
    };

    const handleEndDateChange = (date) => {
        setEndDate(date);
        if (startDate && date < startDate) {
            setStartDate(date);
        }
    };

    useEffect(() => {
        fetch("http://localhost:5000/destination/get/special-offers")
            .then((response) => response.json())
            .then((data) => {
                setDestinationsArray(data);
            })
    }, []);

    return (
        <div>
            <Grid container direction="row" justifyContent="space-evenly" alignItems="center" style={{ marginTop: "20px" }}>
                <div style={{ display: "flex", justifyContent: "flex-start", marginTop: "20px", width: 345 }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker']}>
                            <DatePicker label="Pick your start date" value={startDate} onChange={handleStartDateChange} />
                        </DemoContainer>
                    </LocalizationProvider>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-start", marginTop: "20px", width: 345 }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker']}>
                            <DatePicker label="Pick your end date" value={endDate} onChange={handleEndDateChange} />
                        </DemoContainer>
                    </LocalizationProvider>
                </div>
            </Grid>
            <Grid container direction="row" justifyContent="space-evenly" alignItems="center">
                {destinationsArray.map((destination) => (
                    <Card sx={{ width: 345, height: 450, marginTop: "20px" }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={destination.image}
                                alt={destination.name}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {destination.name}, {destination.location}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {destination.description}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Price: {destination.price}$
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Free spots: {destination.slots}
                                </Typography>
                                {destination.is_special_offer ?
                                    <>
                                        <Typography color="red" fontSize="20px">
                                            Special offer!
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Book now for the special price: {destination.special_price}$
                                        </Typography>
                                    </>
                                    : null
                                }
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))}
            </Grid>
        </div>
    );
}

export default Offers;
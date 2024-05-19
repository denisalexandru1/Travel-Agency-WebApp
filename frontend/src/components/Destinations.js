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

function Destinations() {
    const [startDate, setStartDate] = React.useState(null);
    const [endDate, setEndDate] = React.useState(null);
    const [destinationsArray, setDestinationsArray] = React.useState([]);
    const [destinationAvailabilityMap] = React.useState({});
    const [dateDaysDifference, setDateDaysDifference] = React.useState(0);
    const [user, setUser] = React.useState(JSON.parse(localStorage.getItem('user')));

    const handleStartDateChange = (date) => {
        setStartDate(date);
        console.log("start: " + startDate)
        if (endDate && date > endDate) {
            setEndDate(date);
        }
    };

    const handleEndDateChange = (date) => {
        setEndDate(date);
        console.log("end: " + endDate);
        if (startDate && date < startDate) {
            setStartDate(date);
        }
    };

    const handleCheckAvailability = () => {
        destinationsArray.forEach((destination) => {
            fetch('https://localhost:5000/destination/check-availability', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    destination_id: destination.id,
                    start_date: startDate.toISOString().split('T')[0],
                    end_date: endDate.toISOString().split('T')[0]
                })
            })
                .then(response => response.json())
                .then(data => {
                    destinationAvailabilityMap[destination.id] = data["is_available"]
                });
        });
        setDateDaysDifference(endDate.diff(startDate, 'days'));
        console.log(dateDaysDifference);
        console.log(destinationAvailabilityMap);
    }

    const handleBook = (destinationId, totalPrice) => {
        if (user == null) {
            alert("You need to be logged in to book a destination");
            window.location.href = "/login";
        }

        return () => {
            fetch('https://localhost:5000/reservation/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    destination_id: destinationId,
                    user_id: user.id,
                    start_date: startDate.toISOString().split('T')[0],
                    end_date: endDate.toISOString().split('T')[0],
                    total_price: totalPrice
                })
            })
                .then(() => {
                    alert("Booking successful");
                    window.location.href = "/";
                });
        }
    }

    useEffect(() => {
        // check if the path ends in /destinations and if it doesn't, get the string after /destinations/
        // if the string is empty, set the searchValue to an empty string, otherwise set it to the string
        const destinationLocation = window.location.pathname.endsWith("/destinations") ? "" : window.location.pathname.split("/destinations/")[1];

        // get all the destinations from the database
        fetch("https://localhost:5000/destination/get/" + destinationLocation)
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
                <div style={{ display: "flex", justifyContent: "flex-start", marginTop: "20px", width: 690 }}>
                    <Button variant="contained" color="primary" onClick={handleCheckAvailability}>
                        Check availability
                    </Button>
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
                                    Price/night: {destination.price}$
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Total spots: {destination.slots}
                                </Typography>
                                {destination.is_special_offer ?
                                    <>
                                        <Typography color="red" fontSize="20px">
                                            Special offer!
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Special price/night: {destination.special_price}$
                                        </Typography>
                                    </>
                                    : null
                                }
                                {destinationAvailabilityMap[destination.id] &&
                                    (() => {
                                        const finalPrice = destination.is_special_offer ? (destination.special_price * dateDaysDifference) : (destination.price * dateDaysDifference);
                                        return (
                                            <Button variant="contained" color="primary" onClick={handleBook(destination.id, finalPrice)}>
                                                Book now for {finalPrice}$
                                            </Button>
                                        );
                                    })()
                                }
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))}
            </Grid>
        </div>
    );
}

export default Destinations;
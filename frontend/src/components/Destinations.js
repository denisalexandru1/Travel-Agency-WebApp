import React from "react";
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
                <Card sx={{ width: 345, height: 380, marginTop: "20px" }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/9f/90/6a/best-angle-of-the-castle.jpg?w=600&h=400&s=1"
                            alt="Peles"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Romania, Peles Castle
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Romania is a country located at the crossroads of Central, Eastern, and Southeastern Europe. It shares land borders with Bulgaria to the south, Ukraine to the north, Hungary to the west, Serbia to the southwest, and Moldova to the east and has its opening to the Black Sea.
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Price: 300$
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Free spots: 10
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{ width: 345, height: 380, marginTop: "20px" }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://mediacdn.libertatea.ro/unsafe/632x421/smart/filters:format(webp):contrast(8):quality(75)/https://static4.libertatea.ro/wp-content/uploads/2022/05/locuri-de-vizitat-in-milano.jpg"
                            alt="Milano"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Italy, Milano
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Italy is a European country consisting of a peninsula delimited by the Alps and several islands surrounding it, including Sicily and Sardinia. Italy is located in Southern Europe, and it is sometimes considered part of Western Europe.
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Price: 500$
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Free spots: 5
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{ width: 345, height: 380, marginTop: "20px" }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://images.squarespace-cdn.com/content/v1/622b658cdd9ec946eb401554/1650067996482-LOJ9X6UBQ00URODEVUX6/C31A6916bsmall.jpg"
                            alt="Dubrovnik"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Croatia, Dubrovnik
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Dubrovnik is a city on the Adriatic Sea in southern Croatia. It is one of the most prominent tourist destinations in the Mediterranean Sea, a seaport, and the center of Dubrovnik-Neretva County.
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Price: 400$
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Free spots: 8
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{ width: 345, height: 380, marginTop: "20px" }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://static.independent.co.uk/2023/07/12/14/iStock-1124556360.jpg"
                            alt="Lisbon"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Portugal, Lisbon
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lisbon is the capital and the largest city of Portugal. It is one of the oldest cities in the world and one of Europe's major economic centers.
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Price: 450$
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Free spots: 6
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{ width: 345, height: 380, marginTop: "20px" }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://www.telegraph.co.uk/content/dam/Travel/hotels/europe/denmark/copenhagen-things-to-do-nyhavn.jpg?imwidth=680"
                            alt="Copenhagen"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Denmark, Copenhagen
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Copenhagen is the capital and most populous city of Denmark. It is known for its beautiful architecture, historic sites, and vibrant cultural scene.
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Price: 550$
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Free spots: 4
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{ width: 345, height: 380, marginTop: "20px" }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://www.amsterdam.net/en/wp-content/uploads/sites/136/amsterdam-canals-bridges-hd.jpg"
                            alt="Amsterdam"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Netherlands, Amsterdam
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Amsterdam is the capital and most populous city of the Netherlands. It is known for its artistic heritage, elaborate canal system, and narrow houses with gabled facades.
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Price: 600$
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Free spots: 3
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
                <Button href="/destinations" variant="contained" color="secondary" size="large" style={{ width: "800px", height: "30px", borderRadius: "50px", boxShadow: "0 0 5px 0 #000" }}>
                    View more destinations
                </Button>
            </div>
        </div>
    );
}

export default Destinations;
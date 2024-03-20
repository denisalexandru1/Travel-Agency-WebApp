import React from "react";
import { Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Contact() {
    return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", background: "white"}}>
        <div style={{ flex: 1 }}>
            <Typography variant="h1" style={{ color: "purple", textAlign: "center", fontSize: "65px", fontWeight: "bold" }}>
                About us
            </Typography>
            <img src={require('../images/logo.png')} alt="Logo" style={{ display: "block", marginLeft: "auto", marginRight: "auto", width: "20%" }} />
            <Typography variant="h1" style={{ color: "purple", textAlign: "center", fontSize: "26px", fontWeight: "bold" }}>
                Online travel agency
            </Typography>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", marginTop: "20px", boxShadow: "0 0 5px 0 #000", borderRadius: "20px", padding: "20px", width: "100%" }}>
                <Typography variant="h1" style={{ color: "purple", textAlign: "center", fontSize: "26px", fontWeight: "bold" }}>
                    Fiscal information
                </Typography>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", marginTop: "20px" }}>
                    <Typography variant="h1" style={{ color: "purple", textAlign: "center", fontSize: "20px", fontWeight: "bold" }}>
                        Address: Str. Mihai Eminescu, nr. 1, Bucuresti, Romania <br />
                        Nr. Reg. Com.: J12/1062/2006 <br />
                        CUI: RO 19181488 <br />
                        <br/>
                        Bank account: RO 98 BTRL 0130 1205 4910 01XX <br />
                        Bank: Banca Transilvania <br />
                        <br/>
                        Email: office@zbb.ro <br />
                        Phone: 021 123 4567 <br />
                    </Typography>
                </div>
            </div>
            <Typography variant="h1" style={{ color: "purple", textAlign: "center", fontSize: "30px", fontWeight: "bold", marginTop: "20px" }}>
                Frequently Asked Questions
            </Typography>
            <Accordion style={{ width: "100%", marginTop: "20px", boxShadow: "0 0 5px 0 #000", backgroundColor: "purple", color: "white" }}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                >
                Who are we?
                </AccordionSummary>
                <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
            </Accordion>
            <Accordion style={{ width: "100%", marginTop: "10px", boxShadow: "0 0 5px 0 #000", backgroundColor: "purple", color: "white" }}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
                >
                What are the working hours?
                </AccordionSummary>
                <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
            </Accordion>
            <Accordion style={{ width: "100%", marginTop: "10px", boxShadow: "0 0 5px 0 #000", backgroundColor: "purple", color: "white" }}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
                >
                What are the payment methods?
                </AccordionSummary>
                <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
            </Accordion>

        </div>
    </div>
    );
}

export default Contact;
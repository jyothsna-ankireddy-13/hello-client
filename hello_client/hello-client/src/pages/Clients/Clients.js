import React from 'react';
import {Card, CardContent,Typography, CardActions, Button} from '@material-ui/core';
import './ClientCard.css';
import {Link} from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
const Clients = () => {
    return (
        <div className="clients">
            <div>
            <div className="clientname-heading">
              <Typography variant="h2">Clients</Typography>
            </div>
            <div className="client-main">
                <Typography variant="h5">Clients:X</Typography>
                <div className="client-content">
                    <div>
                        <Typography>Clients with Overdue Payments:XX</Typography>
                        <Typography>Upcoming renewals(next 30days):XXX</Typography>
                    </div>
                    <div>
                        <Typography>Payments Overdue Amounts:XXX</Typography>
                    </div>
                </div><hr/>
            </div>
            
        <div>
            
            <div className="cards">
                <Card className="card-container" >
                    <CardContent className="card-content">
                        <Typography gutterBottom  variant="h5">
                            Add Client
                        </Typography>
                        <Typography gutterBottom  variant="h5">
                            <FaIcons.FaPlus/>
                        </Typography>
                    </CardContent>
                    <CardActions className="cardActions">
                        {/* <CustomizedDialogs title="Create New Service">
                            <NewService/>
                        </CustomizedDialogs> */}   
                    </CardActions>
                    
                </Card>
                <Card className="service-card" id="service-card2">
                    <Typography gutterBottom  variant="h5">
                            Client Name
                    </Typography> 
                    <div className="card-display">
                        <CardContent className="card-content">
                            
                            <Typography>Services:X</Typography>
                            <Typography>Payments Overdue:X</Typography>
                            <Typography>Revenue:XXX</Typography>
                            <Typography>Profit:XXX</Typography>
                        </CardContent>
                        <CardContent className="card-content">
                        <Typography>Renewals in next 30d:X</Typography>
                        <Typography>Overdue Amount:XXXX</Typography>
                        <Typography>Cost:XXXX</Typography>
                    </CardContent>
                    </div>

                    <CardActions className="cardActions"> 
                        <Button className="remind-btn">Remind All</Button>
                        <Link className="remind-all" to="/manageclients">Manage</Link>   
                    </CardActions>
                    
                </Card>
            </div>
        </div>
        </div>
        
    </div>
    )
}

export default Clients;

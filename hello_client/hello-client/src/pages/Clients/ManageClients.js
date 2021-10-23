import React from 'react'
import * as FaIcons from 'react-icons/fa';
import {Card, CardContent,Typography, CardActions, Button} from '@material-ui/core';
import './ClientCard.css';
import {Link} from 'react-router-dom';
const ManageService = () => {
    return (
        <div className="clients"> 
        <div>
          <div className="clientname-heading">
              <Typography variant="h3">Client Name</Typography>
          </div>
          <div className="client-main">
          <div className="client-main">
            <Typography variant="h4">Client Full Name</Typography>
            <Typography>Client Description.The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. </Typography>
            
          </div>
          <div className="client-details">
              <div>
                <Typography>Contact Person:XXXXXX</Typography>
                <Typography>Phone:4750435496</Typography>
                <Typography>Email:contact@company.com</Typography>
                <Typography>Website:www.client.com</Typography>
              </div>
                <div>
                    <Typography>Address:</Typography>
                    <Typography>XXXXXXXXXXXXX</Typography>
                    <Typography>XXXXXXXXXXXXX</Typography>
                    <Typography>XXXXXXXXXXXXX</Typography>
                </div>
            </div><hr/>
                <div className="client-due">
                    <Typography>Payments Overdue Amounts:XXX</Typography>
                    <Typography>Next Renewal:dd month yyyy</Typography>
                </div>
            </div>
        <div>
            <Link to="/addexpense" className="remind-all">
                <FaIcons.FaPlus/> Add Expense
            </Link>
        </div>
        <div className="cards-wrap">
            <div className="cards">
                <Card className="card-container" >
                    <CardContent className="card-content">
                        <Typography gutterBottom  variant="h5">
                            Add Service
                        </Typography>
                    </CardContent>{/*
                    <CardActions className="cardActions">
                        <CustomizedDialogs title="Add Service">
                            <NewService/>
                        </CustomizedDialogs>    
                    </CardActions>*/}
                    
                </Card>
                <Card className="card-container" id="service-card2">
                <Typography gutterBottom  variant="h5">
                            Service Name
                </Typography>
                        
                <div className="card-display">
                    <CardContent className="card-content">
                       
                        <Typography>Service Category Name</Typography>
                        <Typography>Billing Cycle:dd mm yy(monthly)</Typography>
                        <Typography>Revenue:XXX</Typography>
                        <Typography>Overdue Amount:XXXX</Typography>
                    </CardContent>
                    </div>
                    <CardActions className="cardActions"> 
                        <Button className="remind-btn">Remind</Button>
                        <Button className="remind-all">Manage</Button>    
                    </CardActions>
                    
                </Card>
            </div>
            </div>
        </div>
        </div>
    )
}

export default ManageService;
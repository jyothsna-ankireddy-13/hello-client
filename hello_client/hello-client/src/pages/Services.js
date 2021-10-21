import React from 'react'

import {Card, CardContent,Typography, CardActions, IconButton} from '@material-ui/core';
import * as FaIcons from 'react-icons/fa';
import './Card.css';
import CustomizedDialogs from './Servicepopup';
import NewService from './NewService';
const Services = () => {
    return (
        <div className="services">
            <div>
                <Card className="card-container" >
                    <CardContent className="card-content">
                        <Typography gutterBottom  variant="h5">
                            Create New Service
                        </Typography>
                    </CardContent>
                    <CardActions className="cardActions">
                        <IconButton>
                            <FaIcons.FaPlus/>
                        </IconButton>
                        <CustomizedDialogs title="Create New Service">
                            <NewService/>
                        </CustomizedDialogs>    
                    </CardActions>
                    
                </Card>
            </div>
        </div>
    )
}

export default Services;

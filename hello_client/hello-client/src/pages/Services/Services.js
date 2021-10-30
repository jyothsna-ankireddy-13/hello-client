import React,{useState} from 'react'
import {Card, CardContent,Typography, CardActions, Button, InputBase,makeStyles} from '@material-ui/core';
import './Card.css';
import NewService from './NewService';
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import  Controls  from '../../components/controls/Controls';
import AddIcon from '@material-ui/icons/Add';
import Popup from '../../components/controls/Popup';

const useStyles = makeStyles(theme =>({
    pageContent:{
            padding:theme.spacing(5),
            margin:theme.spacing(3)
        
    },
    newButton:{
        position:'absolute'
    }
}))
const Services = () => {

    const classes=useStyles();
    const [openPopup,setOpenPopup] = useState(false);

    return (
        <div className="manage-service"> 
          <div className="servicename-heading">
              <Typography variant="h2">Services</Typography>
          </div>
          <div className="service-main">
                <div>
                    <Typography>Total Clients:XX</Typography><br/><br/>
                    <Typography>Clients with Overdue Payments:XX</Typography><br/><br/>
                    <Button className="remind-all">Remind All</Button>
                </div>
                <div>
                    <Typography>Payments Overdue Amounts:XXX</Typography><br/><br/>
                    <Typography>Upcoming Renewals(next 30 Days):XX</Typography><br/><br/>
                    <Button className="remind-all">Remind All</Button>
                </div>
            </div><br/>
            <div className="service-text2">
                <div>
                    <Typography>Total Clients:XX</Typography><br/><br/>
                    <Typography>Clients with Overdue Payments:XX</Typography><br/><br/>
                    <Button className="remind-all">Remind All</Button>
                </div>
                <div>
                    <Typography>Payments Overdue Amounts:XXX</Typography><br/><br/>
                    <Typography>Upcoming Renewals(next 30 Days):XX</Typography><br/><br/>
                    <Button className="remind-all">Remind All</Button>
                </div>
            </div> 
            <div className="search-input">
                <InputBase placeholder="Search" startAdornment={<SearchIcon/>}/>
            </div>
            <div>
                <div className="cards">
                    <Card className="card-container" >
                        <CardContent className="card-content">
                            <Typography gutterBottom  variant="h5">
                                Create New Service
                            </Typography>
                        </CardContent>
                        <CardActions className="cardActions">
                           { /* <CustomizedDialogs title="Create New Service">
                                <NewService/>
                            </CustomizedDialogs> */}
                            <Controls.ActionButton
                                /*text="Add"
                                variant="outlined" */
                                color='none'
                                startIcon={<AddIcon/>}
                                className={classes.newButton}
                                onClick={()=> setOpenPopup(true)}>
                                
                                </Controls.ActionButton>
                                <Popup
                                title="Add Service for Client Name"
                                openPopup={openPopup}
                                setOpenPopup={setOpenPopup}
                                >
                                    <NewService/>
                                </Popup>    
                        </CardActions>
                        
                    </Card>
                    <Card className="service-card" id="service-card2">
                        <Typography gutterBottom  variant="h5">
                                Service Category Name
                        </Typography> 
                        <div className="card-display">
                            <CardContent className="card-content">
                                
                                <Typography>Clients</Typography>
                                <Typography>Payments</Typography>
                                <Typography>Revenue</Typography>
                            </CardContent>
                            <CardContent className="card-content">
                             <Typography>Renewals in next 30d:X</Typography>
                            <Typography>Overdue Amount:XXXX</Typography>
                            <Typography>Cost:XXXX</Typography>
                        </CardContent>
                        </div>

                        <CardActions className="cardActions"> 
                            <Button className="remind-btn">Remind All</Button>
                            <Link className="remind-all" to="/manageservice">Manage</Link>   
                        </CardActions>
                        
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Services;

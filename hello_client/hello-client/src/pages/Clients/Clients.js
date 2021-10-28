import React,{useState} from 'react';
import {Card, CardContent,Typography, CardActions, Button,InputBase,makeStyles} from '@material-ui/core';
import './ClientCard.css';
import {Link} from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import SearchIcon from '@material-ui/icons/Search';
import AddClientForm from './AddClientForm';
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
const Clients = () => {

    const classes=useStyles();
    const [openPopup,setOpenPopup] = useState(false);

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
            <div className="search-input">
                <InputBase placeholder="Search" startAdornment={<SearchIcon/>}/>
            </div>  
        <div>
             <div className="cards">
                <Card className="card-container" >
                    <CardContent className="card-content">
                        <Typography gutterBottom  variant="h5">
                            Add a New Client
                        </Typography>
                    </CardContent>
                    <CardActions className="cardActions">
                        {/* <CustomizedDialogs title="Create New Service">
                            <NewService/>
                        </CustomizedDialogs> */}
                        
                                        
                            <Controls.ActionButton
                            startIcon={<AddIcon/>}
                            className={classes.newButton}
                            onClick={()=> setOpenPopup(true)}>
                            </Controls.ActionButton>
                            <Popup
                            title="Add Client"
                            openPopup={openPopup}
                            setOpenPopup={setOpenPopup}
                            ><AddClientForm/>
                            </Popup>
                          
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

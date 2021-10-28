import React,{useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import {Card, CardContent,Typography, CardActions, Button,InputBase, Paper,makeStyles} from '@material-ui/core';
import './ClientCard.css';
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import AddServicetoClientForm from './AddServicetoClientForm';
import  Controls  from '../../components/controls/Controls';
import AddIcon from '@material-ui/icons/Add';
import Popup from '../../components/controls/Popup';
import Expenses from './Expenses';


const useStyles = makeStyles(theme =>({
    pageContent:{
            padding:theme.spacing(5),
            margin:theme.spacing(3)
        
    },
    newButton:{
        position:'absolute'
    }
}))

const ManageService = () => {

    const classes=useStyles();
    const [openPopup,setOpenPopup] = useState(false);
    const [toggleState,setToggleState] = useState(1);
    const toggleTab = (index) =>{
        setToggleState(index);
    }

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
            <div className="search-input">
                <InputBase placeholder="Search" startAdornment={<SearchIcon/>}/>
            </div>
            <div>
               <Expenses/>
                
            </div>
        <div className="container">
            <div className="bloc-tabs">
                <div className= { toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>Clients</div>
                <div className={ toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>Expenses</div>
            </div>
            <div className="content-tabs">
                < div className={ toggleState === 1 ? "content active-content" : "content"}>
                    <div className="cards-wrap">
                        <div className="cards">
                            <Card className="card-container" >
                                <CardContent className="card-content">
                                    <Typography gutterBottom  variant="h5">
                                        Add Service to this client
                                    </Typography>
                                </CardContent>
                                <CardActions className="cardActions">
                                    {/*<CustomizedDialogs title="Add Service">
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
                                    ><AddServicetoClientForm/>
                                    </Popup>
                                </CardActions>
                                
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
                                <div >
                                    <CardActions className="cardActions"> 
                                        <Button className="remind-btn">Remind</Button>
                                        <Button className="remind-all">Manage</Button>    
                                    </CardActions>
                                </div>
                    
                            </Card>
                                </div>
                            </div>
                        </div>
                    <div className={ toggleState === 2 ? "content active-content" : "content"}>
                        <p>Expenses Tab</p>
                    </div>
                </div>
               </div>
            </div>
        </div>
    )
}

export default ManageService;
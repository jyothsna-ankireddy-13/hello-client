import React,{useState} from 'react';
import {Card, CardContent,Typography, CardActions, Button,InputBase,makeStyles} from '@material-ui/core';
import './Card.css';
import SearchIcon from '@material-ui/icons/Search';
import AddClientToServiceForm from './AddClientToServiceForm';
import  Controls  from '../../components/controls/Controls';
import AddIcon from '@material-ui/icons/Add';
import Popup from '../../components/controls/Popup';
import Expenses from '../Clients/Expenses';

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
        <div className="manage-service"> 
          <div className="servicename-heading">
              <Typography variant="h3">Service Category Name</Typography>
          </div>
          <div className="service-description">
            <Typography variant="h4">Service Name</Typography>
            <Typography>Service Description.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. </Typography><br/>
            <Typography>Tax Rate 18%</Typography>
          </div><br/>
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
                {/*<Link to="/addexpense" className="remind-all">
                    <FaIcons.FaPlus/> Add Expense
                </Link> */}
                <Expenses/>
            </div>
        <div className="container">
            <div className="bloc-tabs">
                <div className= { toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>Clients</div>
                <div className={ toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>Expenses</div>
            </div>
            <div className="content-tabs">
                <div className={ toggleState === 1 ? "content active-content" : "content"}>
                    <div className="cards-wrap">
                        <div className="cards">
                            <Card className="card-container" >
                                <CardContent className="card-content">
                                    <Typography gutterBottom  variant="h5">
                                        Add Client
                                    </Typography>
                                </CardContent>
                                <CardActions className="cardActions">
                                        
                                        <Controls.ActionButton
                                            /*text="Add"
                                            
                                              variant="outlined" */
                                            startIcon={<AddIcon/>} 
                                            color='none' 
                                            className={classes.newButton}
                                            onClick={()=> setOpenPopup(true)}
                                        ></Controls.ActionButton>
                                        <Popup
                                        title="Add Client to Service Category"
                                        openPopup={openPopup}
                                        setOpenPopup={setOpenPopup}
                                        ><AddClientToServiceForm/>
                                        </Popup> 
                                </CardActions>
                                
                            </Card>
                            <Card className="card-container" id="service-card2">
                            <Typography gutterBottom  variant="h5">
                                        Client Name
                            </Typography>
                                    
                            <div className="card-display">
                                <CardContent className="card-content">
                                
                                    <Typography>Services:X</Typography>
                                    <Typography>Payment overdue:X</Typography>
                                    <Typography>Revenue:XXX</Typography>
                                </CardContent>
                                <CardContent className="card-content">
                                    <Typography>Renewals in next 30d:X</Typography>
                                    <Typography>Overdue Amount:XXXX</Typography>
                                    <Typography>Cost:XXXX</Typography>
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
                <div className={ toggleState === 2 ? "content active-content" : "content"}>
                    <p>Expenses Tab</p>
                </div>
                
            </div>
        </div>
    </div>
    )
}

export default ManageService;
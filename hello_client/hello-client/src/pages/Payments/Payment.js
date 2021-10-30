import React,{useState} from 'react'
import AddPaymentForm from '../../components/controls/AddPaymentForm';
import  Controls  from '../../components/controls/Controls';
import { makeStyles } from '@material-ui/core';
import Popup from '../../components/controls/Popup';
import * as FaIcons from 'react-icons/fa';

const useStyles = makeStyles(theme =>({
    pageContent:{
            padding:theme.spacing(5),
            margin:theme.spacing(3)
        
    },
    newButton:{
        position:'absolute'
    },
    payText:{
        color: '#80C667'
    }
}))
export default function Payment() {
    const classes=useStyles();
    const [openPopup,setOpenPopup] = useState(false);
    return (
        <div className={classes.payText}>
            <Controls.ActionButton
                                /*text="Add"
                                variant="outlined" */
                                color='none'
                                className={classes.newButton}
                                onClick={()=> setOpenPopup(true)}>
                                
                                </Controls.ActionButton>
                                <Popup
                                title="Add Payment for client name"
                                openPopup={openPopup}
                                setOpenPopup={setOpenPopup}
                                >
                                    <AddPaymentForm/>
                                </Popup> 
                                <FaIcons.FaPlus/> Add Payment        
        </div>
    )
}

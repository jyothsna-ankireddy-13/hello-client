import React,{useState} from 'react'
import  Controls  from '../../components/controls/Controls';
import { makeStyles } from '@material-ui/core';
import Popup from '../../components/controls/Popup';
import ManageServiceofClientForm from './ManageServiceofClientForm';

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
export default function ManageServiceofClient() {
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
                                title="Service Name"
                                openPopup={openPopup}
                                setOpenPopup={setOpenPopup}
                                >
                                    <ManageServiceofClientForm/>
                                </Popup> 
                                 Manage        
        </div>
    )
}

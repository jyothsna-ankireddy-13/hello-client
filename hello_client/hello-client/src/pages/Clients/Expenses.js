import React,{useState} from 'react'
import AddExpenseForm from '../../components/controls/AddExpenseForm';
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
export default function Expenses() {
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
                                title="Add Expense"
                                openPopup={openPopup}
                                setOpenPopup={setOpenPopup}
                                >
                                    <AddExpenseForm/>
                                </Popup> 
                                <FaIcons.FaPlus/> Add Expense       
        </div>
    )
}

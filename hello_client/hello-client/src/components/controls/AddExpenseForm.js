import { Grid } from '@material-ui/core';
import React from 'react'
import {useForm,Form} from '../../components/useForm';
import Controls  from '../../components/controls/Controls';


const initialFValues = {
    id:0,
    expenseName:'',
    amount:'',
    clientRelatedTo:'',
    serviceRelatedTo:''
}
const AddExpenseForm = () => {

    const validate=(fieldValues = values)=>{
        let temp={...errors}
        if('expenseName' in fieldValues)
            temp.expenseName=fieldValues.expenseName?" ": "This field is required."
        if('amount' in fieldValues)
            temp.amount=fieldValues.amount?" ": "This field is required."
        if('serviceRelatedTo' in fieldValues)
            temp.serviceRelatedTo= fieldValues.serviceRelatedTo?" ": "This field is required."

        setErrors({
            ...temp
        })
        if(fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }
    const {
        values,
        setValues,
        errors,
        setErrors,
        resetForm,
        handleInputChange}= useForm(initialFValues,true,validate);
    const handleSubmit = e =>{
        e.preventDefault()
        if(validate())
            window.alert('testing...')
    }

    return (
            <Form onSubmit={handleSubmit}>
                <Grid>
                    <Grid item>
                        <Controls.Input 
                            name="expenseName"
                            label="Expense Name"
                            value={values.expenseName}
                            onChange={handleInputChange}
                            error={errors.expenseName}
                        />
                        <Controls.Input
                            label="Amount"
                            name="amount"
                            value={values.amount}
                            onChange={handleInputChange}
                            error={errors.amount}
                        />
                        <Controls.Input
                            label="Client Related to(optional)"
                            name="clientRelatedTo"
                            value={values.clientRelatedTo}
                            onChange={handleInputChange}
                        />
                        <Controls.Input
                            label="Service Related To"
                            name="serviceRelatedTo"
                            value={values.serviceRelatedTo}
                            onChange={handleInputChange}
                            error={errors.serviceRelatedTo}
                        />
                        
                        <div>
                            <Controls.Button
                                type="submit"
                                text="Create"
                            />
                            <Controls.Button
                                color="default"
                                text="Cancel"
                                onClick={resetForm}
                            />
                        </div>
                         
                    </Grid>
                </Grid>
            </Form>           
    )
}

export default AddExpenseForm;

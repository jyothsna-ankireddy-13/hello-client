import { Grid } from '@material-ui/core';
import React from 'react'
import {useForm,Form} from '../../components/useForm';
import Controls  from '../../components/controls/Controls';

const payCycleItems = [
    {id:'cash',title:'Cash'},
    {id:'blood',title:'Blood'},
    {id:'bankTransfer',title:'Bank Transfer'}
]
const initialFValues = {
    id:0,
    service:'',
    amountPaid:'',
    amountPending:'',
    payCycle:'blood',
}
const AddPaymentForm = () => {

    const validate=(fieldValues = values)=>{
        let temp={...errors}
        if('service' in fieldValues)
            temp.service=fieldValues.service?" ": "This field is required."
        if('amountPaid' in fieldValues)
            temp.amountPaid=fieldValues.amountPaid?" ": "This field is required."
        if('amountPending' in fieldValues)
            temp.amountPending= fieldValues.amountPending?" ": "This field is required."

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
                        <Controls.RadioGroup
                            name="payCycle"
                            label="PayCycle"
                            value={values.payCycle}
                            onChange={handleInputChange}
                            items={payCycleItems}
                        />
                        <Controls.Input 
                            name="service"
                            label="Service"
                            value={values.service}
                            onChange={handleInputChange}
                            error={errors.service}
                        />
                        <Controls.Input
                            label="Amount Paid"
                            name="amountPaid"
                            value={values.amountPaid}
                            onChange={handleInputChange}
                            error={errors.amountPaid}
                        />
                        <Controls.Input
                            label="Amount Pending"
                            name="amountPending"
                            value={values.amountPending}
                            onChange={handleInputChange}
                            error={errors.amountPending}
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

export default AddPaymentForm;

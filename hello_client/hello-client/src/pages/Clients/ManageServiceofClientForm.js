import { Grid } from '@material-ui/core';
import React from 'react'
import {useForm,Form} from '../../components/useForm';
import Controls  from '../../components/controls/Controls';

const payCycleItems = [
    {id:'monthly',title:'Monthly'},
    {id:'quaterly',title:'Quaterly'},
    {id:'semi-anual',title:'Semi-Anual'},
    {id:'anual',title:'Anual'}
]
const initialFValues = {
    id:0,
    amountCharged:'',
    revenueEarned:'',
    payCycle:'quaterly'
}
const ManageServiceofClientForm = () => {

    const validate=(fieldValues = values)=>{
        let temp={...errors}
        if('revenueEarned' in fieldValues)
            temp.revenueEarned=fieldValues.revenueEarned?" ": "This field is required."
        if('amountCharged' in fieldValues)
        temp.amountCharged=fieldValues.amountCharged?" ": "This field is required."

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

                        <div>
                            <Controls.Button
                                text="Once"
                            />
                            <Controls.Button
                                text="Repeat"
                            />
                        </div>
                        
                        <Controls.RadioGroup
                            name="payCycle"
                            label="PayCycle"
                            value={values.payCycle}
                            onChange={handleInputChange}
                            items={payCycleItems}
                        />
                        <Controls.Input 
                            name="amountCharged"
                            label="Amount Charged"
                            value={values.amountCharged}
                            onChange={handleInputChange}
                            error={errors.amountCharged}
                        />
                        <Controls.Input 
                            name="revenueEarned"
                            label="Revenue Earned"
                            value={values.revenueEarned}
                            onChange={handleInputChange}
                            error={errors.revenueEarned}
                        />
                        <div>
                            <Controls.Button
                                type="submit"
                                text="Update"
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

export default ManageServiceofClientForm;

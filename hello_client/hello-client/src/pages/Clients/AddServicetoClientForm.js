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
    serviceCategory:'',
    serviceName:'',
    serviceTags:'',
    amountCharged:'',
    costtoClient:'',
    payCycle:'quaterly',
    startDate: new Date()
}
const AddServicetoClientForm = () => {

    const validate=(fieldValues = values)=>{
        let temp={...errors}
        if('serviceCategory' in fieldValues)
            temp.serviceCategory=fieldValues.serviceCategory?" ": "This field is required."
        if('serviceName' in fieldValues)
            temp.serviceName=fieldValues.serviceName?" ": "This field is required."
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
                        <Controls.Input 
                            name="serviceCategory"
                            label="Service Category"
                            value={values.serviceCategory}
                            onChange={handleInputChange}
                            error={errors.serviceCategory}
                        />
                        <Controls.Input
                            label="Service Name"
                            name="serviceName"
                            value={values.serviceName}
                            onChange={handleInputChange}
                            error={errors.serviceName}
                        />
                        <Controls.Input
                            label="Service related Tags"
                            name="serviceTags"
                            value={values.serviceTags}
                            onChange={handleInputChange}
                        /> 
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

                        <Controls.DatePicker
                            name="startDate"
                            label="Start"
                            value={values.startDate}
                            onChange={handleInputChange}
                        />
                        <Controls.Input
                            label="Amount Charged"
                            name="amountCharged"
                            value={values.amountCharged}
                            onChange={handleInputChange}
                            error={errors.amountCharged}
                        />
                        <Controls.Input
                            label="Cost of service to the client"
                            name="costtoClient"
                            value={values.costtoClient}
                            onChange={handleInputChange}
                        />
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

export default AddServicetoClientForm

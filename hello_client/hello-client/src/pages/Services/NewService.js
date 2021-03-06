import { Grid } from '@material-ui/core';
import React from 'react'
import {useForm,Form} from '../../components/useForm';
import Controls  from '../../components/controls/Controls';


const initialFValues = {
    id:0,
    serviceName:'',
    serviceDescription:'',
    taxRate:''
}
const NewService = () => {

    const validate=(fieldValues = values)=>{
        let temp={...errors}
        if('serviceName' in fieldValues)
            temp.serviceName=fieldValues.serviceName?" ": "This field is required."
        if('serviceDescription' in fieldValues)
            temp.serviceDescription=fieldValues.serviceDescription?" ": "This field is required."
        if('taxRate' in fieldValues)
            temp.taxRate= fieldValues.taxRate?" ": "This field is required."

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
                            name="serviceName"
                            label="Service Name"
                            value={values.serviceName}
                            onChange={handleInputChange}
                            error={errors.serviceName}
                        />
                        <Controls.Input
                            label="Service Description"
                            name="serviceDescription"
                            value={values.serviceDescription}
                            onChange={handleInputChange}
                            error={errors.serviceDescription}
                        />
                        <Controls.Input
                            label="Tax Rate(%)"
                            name="taxRate"
                            value={values.taxRate}
                            onChange={handleInputChange}
                            error={errors.taxRate}
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

export default NewService;

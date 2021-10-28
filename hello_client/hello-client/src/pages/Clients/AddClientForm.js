import { Grid } from '@material-ui/core';
import React from 'react'
import {useForm,Form} from '../../components/useForm';
import Controls  from '../../components/controls/Controls';


const initialFValues = {
    id:0,
    clientName:'',
    about:'',
    contactPerson:'',
    phoneNumber:'',
    email:'',
    Address:'',
    website: ''
}
const AddClientForm = () => {

    const validate=(fieldValues = values)=>{
        let temp={...errors}
        if('clientName' in fieldValues)
            temp.clientName=fieldValues.clientName?" ": "This field is required."
        if('contactPerson' in fieldValues)
            temp.contactPerson=fieldValues.contactPerson?" ": "This field is required."
        if('phoneNumber' in fieldValues)
            temp.phoneNumber= fieldValues.phoneNumber.length > 9?" ": "This field is required."
        if('email' in fieldValues)
            temp.email=(/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."

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
                            name="clientName"
                            label="Client Name"
                            value={values.clientName}
                            onChange={handleInputChange}
                            error={errors.clientName}
                        />
                        <Controls.Input
                            label="About"
                            name="about"
                            value={values.about}
                            onChange={handleInputChange}
                        />
                        <Controls.Input
                            label="Contact Person"
                            name="contactPerson"
                            value={values.contactPerson}
                            onChange={handleInputChange}
                            error={errors.contactPerson}
                        />
                        <Controls.Input
                            label="Phone Number"
                            name="phoneNumber"
                            value={values.serviceTags}
                            onChange={handleInputChange}
                            error={errors.phoneNumber}
                        /> 
                        <Controls.Input
                            label="Email"
                            name="email"
                            value={values.email}
                            onChange={handleInputChange}
                            error={errors.email}
                        />
                        <Controls.Input
                            label="Address"
                            name="address"
                            value={values.address}
                            onChange={handleInputChange}
                            error={errors.address}
                        />
                        <Controls.Input
                            label="Website"
                            name="website"
                            value={values.website}
                            onChange={handleInputChange}
                            error={errors.website}
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

export default AddClientForm;

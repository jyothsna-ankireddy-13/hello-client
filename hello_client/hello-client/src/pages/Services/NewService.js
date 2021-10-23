import { Grid,TextField ,Button} from '@material-ui/core'
import React from 'react';
import {Formik,Form,Field} from 'formik';
const NewService = () => {

    
    return (
        <Grid>
            <Formik>
                <Form >
                    <label>Service Name</label><br/>
                    <Field as={TextField} name='Service Name' label='Enter' required/><br/>
                    <label>Service Description</label><br/>
                    <Field as={TextField} name='Service Description' label='Enter' required/><br/><br/>
                    <label>Tax Rate</label><br/>
                    <Field as={TextField} name='TaxRate(%)' label='Enter' required/><br/><br/>
                    <Button type='submit' variant="outlined" color='primary'>Save</Button>
                </Form>
            </Formik>
        </Grid>
    )
}

export default NewService;

import React, {Component} from 'react';
import { Form, Formik, ErrorMessage} from 'formik'
import {Button} from '@chakra-ui/react'

import InputComponent from "./InputComponent";

const CalculatorForm = () => {
        return (
            <Formik 
                initialValues={{year: '', loan: '', error: null}} 
                onSubmit={(values) => {console.log(values)}}>
                
                {({handleSubmit, errors}) => (
                    <Form className="ui form" onSubmit={handleSubmit}>
                        <InputComponent 
                            name='year' 
                            placeholder='Number of years' 
                            type='number'
                            label='Pay back time in years'
                        />
                        <InputComponent
                            name='loan'
                            placeholder='Loan amount'
                            type='number'
                            label='How much would you like to barrow'
                        />
                        <Button
                            colorScheme="brand"
                            type="submit"
                            style={{ marginTop: '10px' }}
                        >
                            Calculate
                        </Button>
                    </Form>
                )}
            </Formik>
        );
}

export default CalculatorForm;
import React, {useState} from 'react';
import {Form, Formik} from 'formik'
import {Button} from '@chakra-ui/react'

import InputComponent from "./InputComponent";
import SelectComponent from "./SelectComponent";
import {ILoan} from "../models/Loan";
import agent from "../api/agent";

interface Props {
    data: ILoan [] | undefined
    onSubmitHandler: Function
    onSelect : Function
}

const CalculatorForm: React.FC<Props> = ({data,onSubmitHandler, onSelect}) => {

    
    return (
        <Formik
            initialValues={{Years: '', Loan: '', SelectedLoan: '', InterestRate: 3.5}}
            onSubmit={(values) => {
                onSubmitHandler(values)
            }}>

            {({handleSubmit, errors}) => (
                <Form className="ui form" onSubmit={handleSubmit}>
                    <SelectComponent onSelect={(value: any) => {
                        onSelect(value)
                    }} data={data}/>
                    <InputComponent
                        name='Years'
                        placeholder='Number of years'
                        type='number'
                        label='Pay back time in years'
                    />
                    <InputComponent
                        name='Loan'
                        placeholder='Loan amount'
                        type='number'
                        label='How much would you like to barrow'
                    />

                    <InputComponent
                        name='InterestRate'
                        placeholder='Interest Rate'
                        type='number'
                        label='Set a interest rate in %'
                    />

                    <Button
                        colorScheme="blue"
                        type="submit"
                        style={{marginTop: '10px'}}
                    >
                        Calculate
                    </Button>
                </Form>
            )}
        </Formik>
    );
}

export default CalculatorForm;
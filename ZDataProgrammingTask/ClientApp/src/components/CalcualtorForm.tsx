import React from 'react';
import {Form, Formik} from 'formik'
import {Button, Center} from '@chakra-ui/react'

import InputComponent from "./InputComponent";
import SelectComponent from "./SelectComponent";
import {ILoan} from "../models/Loan";

interface Props {
    data: ILoan [] | undefined
    onSubmitHandler: Function
    onSelect: Function
}

const CalculatorForm: React.FC<Props> = ({data, onSubmitHandler, onSelect}) => {


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
                    <Center>
                        <Button
                            colorScheme="blue"
                            type="submit"
                            style={{marginTop: '10px'}}
                        >
                            Calculate
                        </Button>
                    </Center>
                </Form>
            )}
        </Formik>
    );
}

export default CalculatorForm;
import React, {useEffect, useState} from 'react';
import {Center, Container, Divider, VStack} from "@chakra-ui/react";

import PageHeading from "./components/PageHeading";
import CalculatorForm from "./components/CalcualtorForm";
import agent from "./api/agent";
import PaymentPlanTable from "./components/PaymentPlanTable";
import {IPaymentPlanItem} from "./models/paymentPlanItem";

const App = () => {
    const [loanTypes, setLoanTypes] = useState([])
    const [selectedLoan, setSelectedLoan] = useState()
    const [paymentPlan, setPaymentPlan] = useState<IPaymentPlanItem[] | null>(null)

    useEffect(() => {
        getLoanTypes()
    }, [])
    
    const getLoanTypes = async () =>{
        try {
            setLoanTypes(await agent.Loan.getDifferentLoanTypes())
        }catch (e) {
            throw e
        }
    }

    const onSelect = (value: any) => {
        setSelectedLoan(value)
    }
    const onSubmitHandler = async (values: any) => {
        values.SelectedLoan = selectedLoan || 'Mortgage'
        try {
            const response = await agent.Loan.getPaymentPlan(values)
            setPaymentPlan(response)
        }catch (e){
            console.log('Can not fetch a payment plan')
            throw e
        }
    }
    
    return (
        <Container>
            <VStack>
                <Center style={{marginTop: '50px'}}>
                    <PageHeading
                        headingText={'Loan calculator'}/>
                </Center>
                <CalculatorForm data={loanTypes} onSubmitHandler={onSubmitHandler} onSelect={onSelect}/>
                <Divider orientation="horizontal" />
                {paymentPlan && <PaymentPlanTable paymentPlan={paymentPlan}/>}
                
            </VStack>
         
        </Container>
    );
}

export default App;

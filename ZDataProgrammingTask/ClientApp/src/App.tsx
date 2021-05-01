import React, {useEffect, useState} from 'react';
import {Center, Container, VStack} from "@chakra-ui/react";

import PageHeading from "./components/PageHeading";
import CalculatorForm from "./components/CalcualtorForm";
import agent from "./api/agent";

const App = () => {
    const [loanTypes, setLoanTypes] = useState([])
    
    const getLoanTypes = async () =>{
        try {
            setLoanTypes(await agent.Loan.getDifferentLoanTypes())
        }catch (e) {
            throw e
        }
    }
    
    const onSelect = (id: string) => {
        if (id) {
           
        }
    }
    useEffect(() => {
        getLoanTypes()
    }, [])
    
    return (
        <Container>
            <VStack>
                <Center style={{marginTop: '50px'}}>
                    <PageHeading
                        headingText={'Loan calculator'}/>
                </Center>
                <CalculatorForm data={loanTypes}/>
            </VStack>
         
        </Container>
    );
}

export default App;

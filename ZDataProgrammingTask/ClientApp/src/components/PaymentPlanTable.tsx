import React from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
} from "@chakra-ui/react"

import {IPaymentPlanItem} from "../models/paymentPlanItem";
import {AddIcon, MinusIcon} from "@chakra-ui/icons";

interface Props {
    paymentPlan: IPaymentPlanItem []
}

const PaymentPlanTable: React.FC<Props> = ({paymentPlan}) => {
    
    //hack to 
    const years = new Array(paymentPlan.length / 12).fill(1)
    
    return (
        <Table>
        <Accordion defaultIndex={[0]} allowMultiple>
            {years.map((placeholder:number,index:number) => (
                <AccordionItem key={index}>
                    {({ isExpanded }) => (
                        <React.Fragment>
                            <h2>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left">
                                        {`Year ${index + 1}`}
                                    </Box>
                                    {isExpanded ? (
                                        <MinusIcon fontSize="12px" />
                                    ) : (
                                        <AddIcon fontSize="12px" />
                                    )}
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Table variant="striped" colorScheme="teal">
                                    <Thead>
                                        <Tr>
                                            <Th isNumeric>Month #</Th>
                                            <Th isNumeric>Principal</Th>
                                            <Th isNumeric>Interest</Th>
                                            <Th isNumeric>Payment</Th>
                                            <Th isNumeric>Total Intrest Paid</Th>
                                            <Th isNumeric>Total Remaining Balance</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        {paymentPlan.slice((1+11) * index, (1 + index) * 12).map((item: IPaymentPlanItem) => (
                                            <Tr key={item.month}>
                                                <Td>{item.month}</Td>
                                                <Td>{item.principal}</Td>
                                                <Td>{item.interest}</Td>
                                                <Td>{item.payment}</Td>
                                                <Td>{item.totalInterestPaid}</Td>
                                                <Td>{item.balance}</Td>
                                            </Tr>
                                        ))}
                                    </Tbody>
                                </Table>
                            </AccordionPanel>
                        </React.Fragment>
                    )}
                </AccordionItem>
            ))}
        </Accordion>
        </Table>
    );
}

export default PaymentPlanTable;
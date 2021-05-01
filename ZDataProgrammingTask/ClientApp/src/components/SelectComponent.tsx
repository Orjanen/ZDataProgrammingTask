import React from 'react';
import {Select} from "@chakra-ui/react";
import {ILoan} from "../models/Loan";

interface Props {
    data: ILoan [] | undefined
    onSelect: Function

}

const SelectComponent: React.FC<Props> = ({data, onSelect}) => {
    return (
            <Select onChange={(e) => onSelect(e.target.value)}>
                {data!.map((loanType:ILoan) => (
                    <option key={loanType.loanName} value={loanType.Id} >
                        {loanType.loanName}
                    </option>
                ))}
            </Select>
    );
}

export default SelectComponent;
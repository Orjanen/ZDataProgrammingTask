import React from 'react';
import {Heading, Center} from '@chakra-ui/react'

interface Props {
    headingText: string
}

const PageHeading: React.FC<Props> = ({headingText}) => {
    return (
        <Center>
            <Heading>{headingText}</Heading>
        </Center>
    );
}
export default PageHeading;
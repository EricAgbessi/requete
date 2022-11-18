import React from 'react';
import { Wrap, WrapItem,Center } from '@chakra-ui/react'
import RequetesItem from './RequetesItem';

const RequeteGrid = () => {
    return (
        <Wrap spacing="8" padding="20px">
            <WrapItem w='280px' >
                <RequetesItem/>
            </WrapItem>
            <WrapItem w='280px' >
                <RequetesItem/>
            </WrapItem> 
            <WrapItem w='280px' >
                <RequetesItem/>
            </WrapItem> 
        </Wrap>
    );
};

export default RequeteGrid;
import { HStack,Text,Image } from '@chakra-ui/react';
import React from 'react';

import {IoMdNotificationsOutline} from 'react-icons/io'

const HomeHeader = () => {
    return (
        <HStack justifyContent="space-between" w="100%" boxShadow="0px 2px 9px 0px rgba(0,0,0,0.75);" padding="10px" bgColor="white"> 

            <Image
                w="100px"
                h="20px"
                src="/logo.png"
                alt='logo satis"'
            />

            <HStack w="15%" justifyContent="space-between">
                <IoMdNotificationsOutline size="20" />
                <HStack>
                    <Image
                        borderRadius='full'
                        boxSize='30px'
                        src='https://bit.ly/dan-abramov'
                        alt='Dan Abramov'
                    />
                    <Text>Eric Agbessi</Text>
                </HStack>   
            </HStack>
            
        </HStack>
    );
};

export default HomeHeader;
import { VStack ,Avatar, HStack, Text} from '@chakra-ui/react';
import { AiFillClockCircle} from 'react-icons/ai'
import { MdEmail} from 'react-icons/md'
import {HiLockClosed} from 'react-icons/hi'
import {IoMdNotificationsOutline} from 'react-icons/io'
import React from 'react';

const RequetesItem = () => {
    return (
        <HStack  w="100%"  justifyContent="space-between">

           
            <VStack borderRadius="5px" boxShadow="-1px 1px 7px 0px RGB(203, 205, 208)" color="#868686" bgColor="white" alignItems="flex-start" w="100%" h="100%" padding="15px">
                <HStack  w="100%" justifyContent="space-between">
                        <HStack>
                            <Avatar name='Agbessi Eric' />
                            <Text as="b" fontSize="10px">Agbessi Eric</Text>
                        </HStack>   
                        <HStack bgColor="#FA7C65" w="70px" position="relative" right="-30px">
                            <Text w="100%" textAlign="center" fontSize="10px" color="white" as="b" padding="5px">Archiver</Text> 
                        </HStack>
                 
                </HStack> 
                <VStack alignItems="flex-start">
                
                        <HStack>
                            <AiFillClockCircle />
                            <Text fontSize="12px">Tue Nov 15 2022 09:16:03</Text>
                        </HStack>

                        <HStack>
                            <MdEmail />
                            <Text fontSize="12px">agbessi558@gmail.com</Text>
                        </HStack>

                        <HStack>
                            <HiLockClosed />
                            <Text fontSize="12px">..........</Text>
                        </HStack>
                        
                </VStack>
            </VStack>

        </HStack>      
    );
};

export default RequetesItem;
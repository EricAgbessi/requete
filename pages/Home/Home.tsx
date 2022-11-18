import { VStack,Text, HStack, Button } from '@chakra-ui/react';
import React from 'react';
import HomeHeader from '../../Components/HomeHeader';
import {AiOutlinePlus} from 'react-icons/ai'
import RequeteGrid from '../../Components/RequeteGrid';
import RegisterForm from '../../Components/RegisterForm';

const Home = () => {
    return (
       <VStack h="100vh" bgColor="#F3F5F8">
            <HomeHeader />
            <VStack w="100%" padding="40px"  alignItems="flex-start">
                <VStack w="100%" alignItems="flex-start">
                    <Text fontSize="25px" as="b" color="#4285F4">Requetes</Text>
                    <Text fontSize="11px">Liste des requetes sur la platforme</Text>
                </VStack>

                <HStack w="100%" justifyContent="flex-end"> 
                    <RegisterForm />
                </HStack>
                <RequeteGrid/>
               
            </VStack>

            
            
       </VStack>
    );
};

export default Home;
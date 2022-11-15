import { VStack,Text, HStack, Button } from '@chakra-ui/react';
import React from 'react';
import HomeHeader from '../../Components/HomeHeader';
import {AiOutlinePlus} from 'react-icons/ai'

const Home = () => {
    return (
       <VStack h="100vh" bgColor="#F3F5F8">
            <HomeHeader />
            <VStack w="100%" padding="40px">
                <VStack w="100%" alignItems="flex-start">
                    <Text fontSize="25px" as="b" color="#4285F4">Requetes</Text>
                    <Text fontSize="11px">Liste des requetes sur la platforme</Text>
                </VStack>

                <HStack w="100%" justifyContent="flex-end"> 
                    <Button w="50px" h="50px" bgColor="#FA7C65" color="white"  borderRadius="50%" >
                        <AiOutlinePlus/>
                    </Button>
                </HStack>
            </VStack>
            
       </VStack>
    );
};

export default Home;
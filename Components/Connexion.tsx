import { HStack, VStack,Text,Box, FormControl, FormLabel, Input, Button,InputGroup,InputRightElement} from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineTwitter,AiFillLinkedin,AiOutlineEye,AiOutlineEyeInvisible,AiOutlineCheckCircle,AiOutlineGoogle} from 'react-icons/ai'
import {HiOutlineLockClosed,HiLockClosed} from "react-icons/hi"
import {loginCore} from '../core/login'



const Connexion = () => {

    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    const [user,setUser]=React.useState({
        email:"",
        password:""
    })
    const handleConnect=()=>{
        console.log(user)
        loginCore(user)
    }

    return (
        <HStack h="100%" w="100%">
            <VStack padding="20px"  alignItems="flex-start" justifyContent="space-between" h="100vh" w="30%" bgColor="#292B51" bgPosition="center" bgSize="cover"  >
                <HStack >
                    <Image 
                        src="/logo.png"
                        alt="logo satis"
                        width={100}
                        height={50}
                    />
                </HStack>
                <VStack  w="80%" h="50%" color="white" alignItems="flex-start" justifyContent="space-around">
                    <Box>
                        <Text fontSize='20px' as="b" >
                            Enregistrer et Obtenir des requetes
                        </Text>
                        <Text fontSize="12px">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, quidem ab repellendus debitis iure dolorum eum obcaecati sint .
                        </Text>
                    </Box>
                  
                    <HStack justifyContent="flex-start">
                        <Box w="30px" borderRadius="15px" h="5px" bgColor="white"></Box>
                        <Box w="30px" borderRadius="15px" h="5px" bgColor="rgba(255,255,255,50%)"></Box>
                        <Box w="30px" borderRadius="15px" h="5px" bgColor="rgba(255,255,255,50%)"></Box>
                    </HStack>

                    <HStack>
                        <FaFacebookF />
                        <AiOutlineTwitter />
                        <AiFillLinkedin />
                    </HStack>

                    <HStack fontSize="10px" w="100%"  justifyContent="space-around">
                        <Text>Privacy policy</Text>
                        <Text>Contact</Text>
                        <Text>2022 Requetes</Text>
                    </HStack>
                </VStack>
            </VStack>



            <VStack w="100%" h="100%">
                <VStack>
                    <Text as="b" fontSize="24px" color="#4285F4">Bienvenu dans requetes</Text>
                    <Text fontSize="12px">Connecter vous en entrant les information si dessous</Text>
                    <VStack  spacing="30">
                    
                        <FormControl>    
                            <FormLabel fontSize="12px">Adresse Email</FormLabel>      
                            <Input onChange={(ev)=>setUser({...user,email:ev.target.value})}  type="text"/>
                        </FormControl>

                        <FormControl>  

                           
                            <FormLabel fontSize="12px">Mot de passe</FormLabel> 
                            <InputGroup size='md'>
                                <Input
                                    onChange={(ev)=>{setUser({...user,password:ev.target.value})}}
                                    pr='4.5rem'
                                    type={show ? 'text' : 'password'}
                                    placeholder='Enter password'
                                />
                                <InputRightElement width='4.5rem'>
                                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                                    {show ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                                    </Button>
                                </InputRightElement>
                            </InputGroup> 
                            <HStack justifyContent="space-between" marginTop="10px">
                                <HStack> <AiOutlineCheckCircle /><Text fontSize="12px">Se rappeler de moi</Text> </HStack>
                                <HStack><Text fontSize="12px">Mot de passe oubliez</Text></HStack>
                            </HStack>
                        </FormControl>
                        
                        <Button onClick={handleConnect} w='100%' bgColor="#4285F4" color="white"><HiLockClosed/>SIGN IN</Button>


                        <HStack justifyContent="space-between" w="100%">
                            <Button bgColor="white" boxShadow="1px 1px 20px 0px rgba(0,0,0,0.75);"> 
                                <AiOutlineGoogle />
                                Login
                            </Button>

                            <Button bgColor="white" boxShadow="1px 1px 20px 0px rgba(0,0,0,0.75);">
                                <AiFillLinkedin />
                                Login
                            </Button>
                        </HStack>
                    </VStack >
                </VStack>
            </VStack>
        </HStack>
    );
};

export default Connexion;
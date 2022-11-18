import React from 'react';
import {
    Modal,FormControl,FormLabel,Input,InputRightElement,InputGroup,Textarea,
    Button,
    Text,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
  } from '@chakra-ui/react'
import {AiOutlinePlus,AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai'

const RegisterForm = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const Open=()=>{
        onOpen()
    }
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    return (
        <>
        <Button onClick={Open} w="50px" h="50px" bgColor="#FA7C65" color="white"  borderRadius="50%" >
            <AiOutlinePlus/>
        </Button>

        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>Enregistrer une requetes</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <FormControl>    
                    <FormLabel fontSize="12px">Nom</FormLabel>      
                    <Input type="text"/>
                </FormControl>

                <FormControl>    
                    <FormLabel fontSize="12px">Le titre</FormLabel>      
                    <Input type="text"/>
                </FormControl>

                <FormControl>    
                    <FormLabel fontSize="12px">Le contenu</FormLabel>      
                    <Textarea  placeholder='Ecrivez le contenu de votre requette' />
                </FormControl>

                

                
            </ModalBody>

            <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={onClose}>
                    Fermer
                </Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
    </>
    );
};

export default RegisterForm;
import { VStack } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import Connexion from '../Components/Connexion'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <VStack>
        <Connexion />
    </VStack>
  )
}

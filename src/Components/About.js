import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

export default function About() {
    return (
        <Box borderBottom="3px solid #76877D ">
        <Box w="90%" marginInline="auto" mt="4rem" color="#B9B9B9" pb="3rem" >
            <Heading className='heading' fontSize="6rem">Who Are <Text display="inline" color="#E042FE">We?</Text> </Heading>
            <Text fontSize={"2rem"} ml="14rem">write about arbits and what we do.</Text>
            <Text fontSize={"2rem"} ml="14rem">write about arbits and what we do.</Text>
            <Text fontSize={"2rem"} ml="14rem">write about arbits and what we do.</Text>
            <Text fontSize={"2rem"} ml="14rem">write about arbits and what we do.</Text>
            <Heading fontSize="4rem" ml="8rem" mt="4rem"><Text display="inline" color="#E042FE">Connect </Text>With Us </Heading>
            <Flex justifyContent="space-between" alignItems="flex-end">
                <Box>
                <Text mt="3rem" fontSize={"2rem"} ml="14rem">Person 1: +910000000000</Text>
            <Text fontSize={"2rem"} ml="14rem">Person 1: +910000000000</Text>
                </Box>
                <Flex justifyContent = "space-between" w = "10%"> 
                    <FaFacebook fontSize="2rem"/>
                    <FaInstagram fontSize="2rem"/>
                    <FaTwitter fontSize="2rem"/>
                </Flex>
            </Flex>
        </Box>
        </Box>
    )
}
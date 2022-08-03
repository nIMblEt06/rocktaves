import { Box, Flex, Heading, Text, Image } from '@chakra-ui/react'
import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

export default function About() {
    return (
        <Box borderBottom="3px solid #76877D " mt="6rem" position={"relative"}>
            <Image className="bgFloat" right="4rem" top="6rem" w="25rem" src = "../Images/guy.png"/>
        <Box w="90%" marginInline="auto" mt="4rem" color="#B9B9B9" pb="3rem" >
            <Heading className='heading' fontSize="6rem">Who Are <Text display="inline" color="#E042FE">We?</Text> </Heading>
            <Text lineHeight={"2.6rem"} fontSize={"1.4rem"} ml="10rem" w="60%">Rocktaves is organised by The Association Of Rock, BITS Pilani (ARBITS). We are a group dedicated to fostering the growth of the Indian music scene amongst our students and we aspire to uplift it in  any way possible. ARBITS began as a club with the initial purpose being to organize and conduct Rocktaves, the oldest semi-professional electro-band competition in India, and Rocktaves has been a great launch pad for budding talent in the past, with winners receiving cash prizes upwards of a lakh and a half. This year, we plan to return with better prizes and a better Rocktaves experience for every party involved. Stay Tuned!</Text>
            <Heading fontSize="4rem" ml="8rem" mt="4rem"><Text display="inline" color="#E042FE">Connect </Text>With Us </Heading>
            <Flex justifyContent="space-between" alignItems="flex-end">
                <Box>
                <Text mt="3rem" fontSize={"2rem"} ml="14rem">Mizaan : +91 98211 31821</Text>
            <Text fontSize={"2rem"} ml="14rem">Saksham : +91 83068 38151</Text>
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
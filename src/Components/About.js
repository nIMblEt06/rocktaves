import { Box, Flex, Heading, Link, Text, Image } from '@chakra-ui/react'
import React from 'react'
import { FaFacebook, FaInstagram, FaSpotify } from 'react-icons/fa'

export default function About() {
    return (
        <Box borderBottom="3px solid #76877D " mt="6rem" position={"relative"}>
            <Image className="bgFloat" right="4rem" top="6rem" w="25rem" src="../Images/guy.png" />
            <Box w="90%" marginInline="auto" mt="4rem" color="#B9B9B9" pb="3rem" >
                <Heading className='heading' fontSize="6rem"><Text display="inline" color="#E042FE">About Us</Text> </Heading>
                <Text className='textAbout' lineHeight={"2.6rem"} fontSize={"1.4rem"} ml="10rem" w="60%">Rocktaves is organised by The Association Of Rock, BITS Pilani (ARBITS). We are a group dedicated to fostering the growth of the Indian music scene amongst our students and we aspire to uplift it in  any way possible. ARBITS began as a club with the initial purpose being to organize and conduct Rocktaves, the oldest semi-professional electro-band competition in India, and Rocktaves has been a great launch pad for budding talent in the past, with winners receiving cash prizes upwards of a lakh and a half. This year, we plan to return with better prizes and a better Rocktaves experience for every party involved. Stay Tuned!</Text>
                <Heading className='subHeadAbout' fontSize="4rem" ml="8rem" mt="4rem"><Text display="inline" color="#E042FE">Connect </Text>With Us </Heading>
                <Flex className='footer' justifyContent="space-between" alignItems="flex-end">
                    <Box>
                        <Text className='contacts' mt="3rem" fontSize={"2rem"} ml="14rem">Ananth : +91 81228 76163</Text>
                        <Text className='contacts' fontSize={"2rem"} ml="14rem">Aryajeet : +91 98291 64499</Text>
                    </Box>
                    <Flex className='icons' justifyContent="space-between" w="10%">
                        <Link href="https://www.facebook.com/rocktaves"><FaFacebook fontSize="2rem" /></Link>
                        <Link href="https://open.spotify.com/user/31n22nt6v5hkfl4rytgxwjg7xbhq?si=aXyid_92R9SggJ1trRX9gg&utm_source=whatsapp"><FaSpotify fontSize="2rem" /></Link>
                        <Link href="https://www.instagram.com/rocktaves.bits/" ><FaInstagram fontSize="2rem" /></Link>
                    </Flex>
                </Flex>
            </Box>
        </Box>
    )
}
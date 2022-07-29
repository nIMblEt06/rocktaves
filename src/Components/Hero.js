import { Box, Heading, Text, Flex } from '@chakra-ui/react'
import React from 'react'
//E04F2E
//E042FE
export default function Hero(props) {
    return (
        <Box bg="url('./Images/bgHero.png')" bgPos={"center"} bgSize="cover" color={"white"}>
            <Box w="90%" marginInline="auto">
                <Heading letterSpacing="0.2rem"  fontSize="14rem" pt="11rem" textShadow={"-12px 6px 0px rgba(0, 0, 0, 0.9)"}><Text display="inline" color="#E042FE">ROCK</Text>TAVES</Heading>
                <Flex justifyContent="flex-end"><Box cursor="pointer" onClick={props.clickRegist} w="fit-content"  mt="20rem" p="0.2rem 3.5rem" bgColor="#E042FE" boxShadow="6px 7px 2px rgba(0, 0, 0, 0.8)" fontFamily="Hermona" fontSize="3rem" mb="8rem">REGISTER</Box></Flex>
            </Box>
        </Box>

    )
}
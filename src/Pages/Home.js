import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from "react-router-dom"

export default function Home() {
    const navigate = useNavigate()
    function clickRegist() {
        navigate('/register')
    }
    return (
        <Box>
            <Heading onClick={clickRegist} bgColor="#0F0F0F" color="white" p="2rem">Register!</Heading>
            <Box>Hey!</Box>
        </Box>
    )
}
import { Box} from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from "react-router-dom"
import About from '../Components/About'
import Hero from '../Components/Hero'
import PastWinners from '../Components/PastWinners'
import Rocktaves from '../Components/Rocktaves'
import Timeline from '../Components/Timeline'
import Cursor from '../Components/Cursor'

export default function Home() {

    const navigate = useNavigate()
    function clickRegist() {
        navigate('/register')
    }


    return (
        <Box bgColor="#0a0909">
            <Cursor/>
            <Hero
            clickRegist = {clickRegist}
            />
            <Rocktaves/>
            <Timeline/>
            <PastWinners/>
            <About/>
        </Box>
    )
}
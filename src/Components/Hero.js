import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import Video from "./bgVideo.mp4";
//E04F2E
//E042FE
export default function Hero(props) {
    React.useEffect(() => {
        const regist = document.querySelector('#register')
        document.addEventListener("scroll", () => {
            regist.style.transition = "0.5s all"
            if (window.pageYOffset !== 0) {
                regist.style.opacity = "0.5"
            }
            else {
                regist.style.opacity = "1"
            }
        })
    })
    return (
        <Box  bg="url('./Images/bgImage.jpg')" bgPos={"center"} bgSize="cover" color={"white"} h="100vh"  >
            <Box w="90%" marginInline="auto" position={"relative"}>
                <Heading className='glitch' letterSpacing="0.2rem" fontSize="14rem" pt="11rem" textShadow={"-12px 6px 0px rgba(0, 0, 0, 0.9)"}><Text  display="inline" color="#E042FE">ROCK</Text>TAVES</Heading>
                <Box id="register" zIndex="100" cursor="pointer" position={"fixed"} onClick={props.clickRegist} w="fit-content" p="0.2rem 3.5rem" bgColor="#E042FE" boxShadow="6px 7px 2px rgba(0, 0, 0, 0.8)" fontFamily="Hermona" right="4rem" bottom={"6rem"} fontSize="3rem" >REGISTER</Box>
            </Box>
        </Box>

    )
}
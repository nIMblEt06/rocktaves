import { Box, Heading, Text, Flex } from '@chakra-ui/react'
import React from 'react'

export default function PastWinners() {


    React.useEffect(() => {
        const checkpoint = 2600;
        let opacity;
        let power = 10;
        window.addEventListener("scroll", () => {
            console.log(window.pageY);
            let currentScroll = window.pageYOffset;
            if (currentScroll <= checkpoint) {
                opacity = Math.pow(currentScroll / checkpoint,power) ;
            } else {
                opacity = Math.pow((1 - (currentScroll / checkpoint - Math.floor((currentScroll/checkpoint)))),power);
            }
            document.querySelector(".fade").style.opacity = opacity;
        });
    })

    return (
        <Box mt="4rem" color="#B9B9B9" pb="2rem" >
            <Box w="90%" marginInline="auto">
                <Heading className='heading' fontSize="6rem">Who Are The <Text display="inline" color="#E042FE">Past Winners?</Text> </Heading>
            </Box>
            <Flex mt="4rem" flexDir={"column"} alignItems="center" justifyContent="center" color="white" className="fade" bg={"url(./Images/bgFade.png)"} bgPosition="center" bgSize="cover">
                <Text lineHeight={"10rem"} fontSize="4rem" mt="4rem">band name 1 </Text>
                <Text lineHeight={"10rem"} fontSize="4rem" >band name 2 </Text>
                <Text lineHeight={"10rem"} fontSize="4rem" >band name 3 </Text>
                <Text lineHeight={"10rem"} fontSize="4rem" >band name 4 </Text>
                <Text lineHeight={"10rem"} fontSize="4rem" >band name 5 </Text>
                <Text lineHeight={"10rem"} fontSize="4rem" mb="4rem" >band name 6 </Text>
            </Flex>
        </Box>
    )
}
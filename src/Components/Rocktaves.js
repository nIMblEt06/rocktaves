import { Box, Flex, Heading, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
//E04F2E
//E042FE
export default function Rocktaves() {

    React.useEffect(() => {
        const parallax = document.querySelector('.parallax')
    document.addEventListener('scroll', (e) =>{
        var scrolled = window.pageYOffset;
        var rate = (scrolled * 0.2 );
        
        function translate(){
            parallax.style.transform = 'translate3d(0px,' + rate + 'px,0px)';
        }
        window.requestAnimationFrame(translate)
    })
    })

    return (
        <Box w="90%" marginInline="auto" mt="4rem" color="#B9B9B9" pb="2rem" position="relative">
            <Heading className='heading' fontSize="6rem">What Is <Text display="inline" color="#E042FE">Rocktaves?</Text> </Heading>
            <Flex justifyContent="space-between">
                <Box fontSize="1.6rem" w="80%" pt="3rem" paddingRight="6rem" pl="4rem" borderRight={"6px solid #E042FE"} lineHeight="3.8rem">
                Rocktaves is one of the oldest semi-professional rock band competitions in India which has acted as a propeller for India’s premiere rock groups of the stature of Parikrama, Indian Ocean, Superfuzz, PRESTORIKA, Them Clones and Euphoria who have taken part in the competition at different points in its history.
                </Box>
                <Box className="parallax" mt="-8rem" ml="4rem" mr="-12rem">
                    <Image src="./Images/bass.png" w="70%"  />
                </Box>
            </Flex>
            <Text fontSize="1.6rem" ml="4rem" color="#E042FE" mt="4rem" >RULES:</Text>
            <VStack>
            <Box fontSize="1.6rem" w="80%" pt="2rem" >
                    <Text lineHeight={"3.6rem"}>1.) Bands must submit a link to a 3-5 minute live recording of one their works.</Text>
                    <Text lineHeight={"3.6rem"}>2.) Only original compositions are allowed as submissions.</Text>
                    <Text lineHeight={"3.6rem"}>3.) Bands based in cities where physical preliminary rounds are being hosted are not allowed to register for the online round.</Text>
                    <Text lineHeight={"3.6rem"}>3.) Separate communication regarding the additional submission for the online round will be relayed to those bands who will participate in the online preliminary round..</Text>
                </Box>
            </VStack>
        </Box>
    )
}
import { Box, Heading, Text, SimpleGrid, GridItem, Image } from '@chakra-ui/react'
import React from 'react'

export default function PastWinners() {


    React.useEffect(() => {
        const checkpoint = 2900;
        let opacity;
        let power = 6;
        const parallax = document.querySelector('.fade')
    document.addEventListener('scroll', (e) =>{
        var scrolled = window.pageYOffset;
        var rate = (scrolled * 0.15 ) -400;
        
        function translate(){
            parallax.style.transform = 'translate3d(0px,' + rate + 'px,0px)';
        }
        window.requestAnimationFrame(translate)
    })

        window.addEventListener("scroll", () => {
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
            <Box w="90%" marginInline="auto" position={"relative"}>
            <Image className="bgFloat" left="1rem" top="26rem" w="14rem" src = "../Images/bass.png"/>
                <Heading className='heading' fontSize="6rem"><Text display="inline" color="#E042FE">Past Winners?</Text> </Heading>
            </Box>
            <SimpleGrid mt="4rem" columns={2} columnGap={2} rowGap={4} w="90%" ml={"20rem"} color="white" className="fade">
                 <GridItem colSpan={1}> <Box  border={"3px solid white"} boxShadow="0px 0px 10px white" w="30rem" bg="url('../Images/indianocean.jpg')" bgPos={"center"} bgSize="cover" h="30rem"></Box>
                 <Box fontFamily={"Hermona"} fontSize={"3rem"} textAlign="left">Indian Ocean</Box></GridItem>
                 <GridItem colSpan={1}> <Box  border={"3px solid white"} boxShadow="0px 0px 10px white" w="30rem" bg="url('../Images/parikrama.jpg')" bgPos={"center"} bgSize="cover" h="30rem"></Box>
                 <Box fontFamily={"Hermona"} fontSize={"3rem"} textAlign="left">Parikrama</Box></GridItem>
                 <GridItem colSpan={1}> <Box  border={"3px solid white"} boxShadow="0px 0px 10px white" w="30rem" bg="url('../Images/prestorika.jpg')" bgPos={"center"} bgSize="cover" h="30rem"></Box>
                 <Box fontFamily={"Hermona"} fontSize={"3rem"} textAlign="left">Prestorika</Box></GridItem>
                 <GridItem colSpan={1}> <Box w="30rem" border={"3px solid white"} boxShadow="0px 0px 10px white"  bg="url('../Images/themclones.jpg')" bgPos={"center"} bgSize="cover" bgRepeat={"no-repeat"} h="30rem"></Box>
                 <Box fontFamily={"Hermona"} fontSize={"3rem"} textAlign="left">Them Clones</Box></GridItem>
            </SimpleGrid>
        </Box>
    )
}
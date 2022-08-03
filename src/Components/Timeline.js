import { Box, Text, Heading, Flex, Image } from '@chakra-ui/react'
import React from 'react'
export default function Timeline() {
    
    React.useEffect(() => {
        const container = document.querySelector('.caroCont')
        let index = 1;
    let counter = 1;
        const slider = document.getElementsByClassName('imgCont')
        const cursor = document.querySelector('.cursor')
        Array.from(slider).forEach(image => {
            image.addEventListener("mouseover",(e) =>{
                cursor.style.height = `3rem`;
                cursor.style.width = `3rem`;
            })
            image.addEventListener("mouseleave",(e) =>{
                cursor.style.height = `2rem`;
                cursor.style.width = `2rem`;
            })

            image.addEventListener("click", (e) => {
                counter = parseInt(e.target.id);
                if (index < counter) {
                    container.style.transform = 'translateX(' + -60 * index + 'rem)';
                    container.style.transition = "all 0.5s";
                    slider[counter - 2].style.display = "block";
                    index++;
                }
                else if (index > counter) {
                    container.style.transform = 'translateX(' + -60 * (index - 2) + 'rem)';
                    container.style.transition = "all 0.5s";
                    slider[counter].style.display = "block";
                    index--;
                }
            })
        })
    })


    return (
        <Box mt="4rem" color="#B9B9B9" pb="2rem" overflowX="hidden" >
            <Box w="90%" marginInline="auto" position={"relative"}>
            <Image className="bgFloat" left="-3rem" top="10rem" w="25rem" src = "../Images/triangle.png"/>
                <Heading className='heading' fontSize="6rem"><Text display="inline" color="#E042FE">Timeline</Text> </Heading>
            </Box>
            <Flex className='caroCont' w="300%" ml="30%" flexWrap="no-wrap" mt="4rem">
                <Box w='60rem' zIndex="3" id="1" className='imgCont' h="22rem" bg="url('../Images/bandPerforming.png')" bgPos="center" bgSize={"cover"}  mr="4rem">
                    
                </Box>
                <Box w='60rem' zIndex="3" id="2" className='imgCont' h="22rem" bg="url('../Images/bandPerforming2.png')" bgPos="center"  bgSize={"cover"} mr="4rem">
               
                </Box>
                <Box w='60rem' zIndex="3" id="3" className='imgCont' h="22rem" bg="url('../Images/bandPerforming3.png')" bgPos="center" bgSize={"cover"} >
                
                </Box>
            </Flex>
        </Box>
    )
}
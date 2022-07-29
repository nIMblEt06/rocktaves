import { Box, Text, Heading, Flex } from '@chakra-ui/react'
import React from 'react'

export default function Timeline() {
    const length = 3;
    let index = 1;
    let counter = 1;
    React.useEffect(() => {
        const container = document.querySelector('.caroCont')
        const slider = document.getElementsByClassName('imgCont')
        Array.from(slider).forEach(image => {
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
    }, [])


    return (
        <Box mt="4rem" color="#B9B9B9" pb="2rem" overflowX="hidden" >
            <Box w="90%" marginInline="auto">
                <Heading className='heading' fontSize="6rem">What Is The <Text display="inline" color="#E042FE">Timeline?</Text> </Heading>
            </Box>
            <Flex className='caroCont' w="300%" ml="30%" flexWrap="no-wrap" mt="4rem">
                <Box w='60rem' id="1" className='imgCont' h="20rem" bgColor="whatsapp.100" mr="4rem">
                </Box>
                <Box w='60rem' id="2" className='imgCont' h="20rem" bgColor="whatsapp.100" mr="4rem">
                </Box>
                <Box w='60rem' id="3" className='imgCont' h="20rem" bgColor="whatsapp.100">
                </Box>
            </Flex>
        </Box>
    )
}
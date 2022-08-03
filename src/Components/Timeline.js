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
                <Heading className='heading' fontSize="6rem">What Is The <Text display="inline" color="#E042FE">Timeline?</Text> </Heading>
            </Box>
            <Flex className='caroCont' w="300%" ml="30%" flexWrap="no-wrap" mt="4rem">
                <Box w='60rem' zIndex="3" id="1" className='imgCont' h="20rem" bg="url('../Images/bandPerforming.png')" bgPos="center" bgSize={"cover"}  mr="4rem">
                    <Text className="headCaro"><Text display="inline" color="#E042FE">Step 1:</Text> Registrations go live!</Text>
                    <Text className='bodyCaro'>Bands will register on the website and will be notified of the time and place of the venue and date of the preliminary round in their respective city. For online participants, the communication regarding the submission will be done separately.</Text>
                </Box>
                <Box w='60rem' zIndex="3" id="2" className='imgCont' h="20rem" bgColor="whatsapp.100" mr="4rem">
                <Text className="headCaro"><Text  display="inline" color="#E042FE">Step 2:</Text> Preliminary Rounds!</Text>
                <Text className='bodyCaro'>Each band will be expected for perform live for 15-20 minutes at their respective city’s venue. One winner from each city and one from each of the two online divisions will qualify for the final round which will be at BITS Pilani. There will be prizes for both the winner and runner up at each city preliminary round.</Text>
                </Box>
                <Box w='60rem' zIndex="3" id="3" className='imgCont' h="20rem" bgColor="whatsapp.100">
                <Text className="headCaro"><Text  display="inline" color="#E042FE">Step 3:</Text> Finals at OASIS '22!</Text>
                <Text className='bodyCaro'>The qualifying bands will be invited to play at OASIS, the cultural fest of BITS Pilani and the winning band will walk away with the title of the Rocktaves winner at the 50th OASIS along with the prizes which will be revealed shortly. The rules for the same will be shared in due time.</Text>
                </Box>
            </Flex>
        </Box>
    )
}
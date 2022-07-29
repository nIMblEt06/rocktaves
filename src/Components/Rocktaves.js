import { Box, Flex, Heading, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
//E04F2E
//E042FE
export default function Rocktaves() {

    React.useEffect(() => {
        const parallax = document.querySelector('.parallax')
    document.addEventListener('scroll', (e) =>{
        var scrolled = window.pageYOffset;
        var rate = (scrolled * 0.27 );
        
        function translate(){
            parallax.style.transform = 'translate3d(0px,' + rate + 'px,0px)';
        }
        window.requestAnimationFrame(translate)
    })
    })

    return (
        <Box w="90%" marginInline="auto" mt="4rem" color="#B9B9B9" pb="2rem">
            <Heading className='heading' fontSize="6rem">What Is <Text display="inline" color="#E042FE">Rocktaves?</Text> </Heading>
            <Flex justifyContent="space-between">
                <Box fontSize="1.6rem" w="60%" pt="3rem" paddingRight="6rem" pl="4rem" borderRight={"6px solid #E042FE"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nibh
                    aliquam amet duis nulla. Tristique rhoncus fringilla sit donec
                    faucibus mi. Suscipit ultricies volutpat, vulputate augue mi diam. Massa,
                    id dolor ipsum pharetra purus eleifend.
                    Massa,
                    id dolor ipsum pharetra purus eleifend.
                    Massa,
                    id dolor ipsum pharetra purus eleifend.
                </Box>
                <Box className="parallax">
                    <Image src="./Images/flameGuitar.png" w="70%" mt="-2rem"/>
                </Box>
            </Flex>
            <Text fontSize="1.6rem" ml="4rem" color="#E042FE">RULES:</Text>
            <VStack>
            <Box fontSize="1.6rem" w="80%" pt="2rem" >
                    <Text>1.) Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</Text>
                    <Text>2.) Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</Text>
                    <Text>3.) Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</Text>
                </Box>
            </VStack>
        </Box>
    )
}
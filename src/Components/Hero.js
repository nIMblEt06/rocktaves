import { Box, Heading, Text, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import ImageArray from '../Components/ImageArray'
//E04F2E
//E042FE
export default function Hero(props) {
    const [isSmallerThan800] = useMediaQuery('(max-width:800px)')
    const length = ImageArray().length;
    const [albumArt, setAlbumArt] = React.useState(ImageArray()[0].image)
    const [display, setDisplay] = React.useState(false)
    const [lateral, setLateral] = React.useState(0)
    const [vertical, setVertical] = React.useState(0)

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
    // React.useEffect(() => {
        function cursorChange(e) {
            setLateral(e.pageX)
            setVertical(e.pageY)
        }
    // }, [])

    function displayImage(){
        (isSmallerThan800 ? " " : setDisplay(true))
        let art = Math.floor(Math.random() * length)
        setAlbumArt(ImageArray()[art].image)
    }
    function hideImage(){
        setDisplay(false)
    }
    return (
        <Box  id="name"
         bg="url('./Images/bgImage.jpg')" 
         bgPos={"center"} 
         bgSize="cover" 
         position="relative"
         overflowX="hidden"
         color={"white"}
          h="100vh" 
        onMouseOver={displayImage}
        onMouseLeave = {hideImage}
        onMouseMove= {cursorChange} >
             <Box id="hoverImage" display={display ? "block" : "none"} left={`${lateral - 150}px`} top={`${vertical - 150}px`} bg={`url(${albumArt})`} bgPosition={"center"} bgSize="cover" position={"absolute"} w="240px" h="240px" overflowX="hidden"></Box>
            <Box w="90%" marginInline="auto" position={"relative"}>
                <Heading className='glitch' letterSpacing="0.2rem" fontSize="14rem" pt="11rem" textShadow={"-12px 6px 0px rgba(0, 0, 0, 0.9)"}><Text  display="inline" color="#E042FE" className="rock">ROCK</Text>TAVES</Heading>
                <Box id="register" zIndex="100" cursor="pointer" position={"fixed"} onClick={props.clickRegist} w="fit-content" p="0.2rem 3.5rem" bgColor="#E042FE" boxShadow="6px 7px 2px rgba(0, 0, 0, 0.8)" fontFamily="Hermona" right="4rem" bottom={"6rem"} fontSize="3rem" >REGISTER</Box>
            </Box>
        </Box>

    )
}
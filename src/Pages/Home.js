import { Box } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from "react-router-dom"
import About from '../Components/About'
import Hero from '../Components/Hero'
import PastWinners from '../Components/PastWinners'
import Rocktaves from '../Components/Rocktaves'
import Timeline from '../Components/Timeline'
import Cursor from '../Components/Cursor'
export default function Home() {

    // const headings = Array.from(document.getElementsByClassName('heading'))
    // const length = ImageArray().length;
    // const [albumArt, setAlbumArt] = React.useState(ImageArray()[0].image)
    // const [display, setDisplay] = React.useState(false)
    // const [lateral, setLateral] = React.useState(0)
    // const [vertical, setVertical] = React.useState(0)

    //     headings.forEach(heading => {
    //         heading.onmouseover = () => {
    //             setDisplay(true)
    //             let art = Math.floor(Math.random() * length)
    //             setAlbumArt(ImageArray()[art].image)
    //         }
    //         setInterval(() => {
    //         heading.onmouseout = () => {
    //             setDisplay(false)
    //         }
    //     }, 1);
    // })
     


    // React.useEffect(() => {
    //     document.addEventListener("mousemove", (element) => {
    //         setLateral(element.pageX)
    //         setVertical(element.pageY)
    //     })
    // }, [])

    const navigate = useNavigate()
    function clickRegist() {
        navigate('/register')
    }


    return (
        <Box bgColor="#0a0909" overflowX="hidden">
            <Cursor />
            {/* <Box id="hoverImage" display={display ? "block" : "none"} left={`${lateral - 150}px`} top={`${vertical - 150}px`} bg={`url(${albumArt})`} bgPosition={"center"} bgSize="cover" position={"absolute"} w="240px" h="240px"></Box> */}
            <Hero
                clickRegist={clickRegist}
            />
            <Rocktaves />
            <Timeline />
            <PastWinners />
            <About />
        </Box>
    )
}
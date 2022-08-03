import { Box} from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from "react-router-dom"
import About from '../Components/About'
import Hero from '../Components/Hero'
import PastWinners from '../Components/PastWinners'
import Rocktaves from '../Components/Rocktaves'
import Timeline from '../Components/Timeline'
import Cursor from '../Components/Cursor'

export default function Home() {

    // const playVideo = Array.from(document.getElementsByClassName('heading'))
    // const [mouse,setMouse] = React.useState(false)

    // setInterval(() => {
    //     playVideo.onmouseover = () => { setMouse(true) }
    //     playVideo.onmouseout = () => {setMouse(false)}
    // }, 1);
    
    // document.addEventListener("mousemove", (element) => {
    //     let lateral = element.pageX;
    //     let vertical = element.pageY;
    
    //     if (mouse) {
    //         bgVideo.style.left = lateral - 250 + "px";
    //         bgVideo.style.top = vertical - 150 + "px";
    //         bgVideo.style.display = "block";
    //         playVideo.style.cursor = "default";
    //     }
    
    //     else {
    //         bgVideo.style.display = "none";
    //     }
    // });
    

    const navigate = useNavigate()
    function clickRegist() {
        navigate('/register')
    }


    return (
        <Box bgColor="#0a0909" overflowX="hidden">
            <Cursor/>
            <Hero
            clickRegist = {clickRegist}
            />
            <Rocktaves/>
            <Timeline/>
            <PastWinners/>
            <About/>
        </Box>
    )
}
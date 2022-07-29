import React from 'react';
import {motion} from "framer-motion"

const Cursor = () => {
    const [mousePosition, setMousePosition] = React.useState({
        x:0,
        y:0
    });

    React.useEffect(() => {
        const mouseMove = e => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            })
        }
      window.addEventListener('mousemove', mouseMove)
    
      return () => {
        window.removeEventListener("mousemove", mouseMove)
      }
    }, [])
    

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            mixBlendMode: "difference"
        }
    }

    return (
        <motion.Box className='cursor' variants = {variants} animate = "default"></motion.Box>
    );
};

export default Cursor;
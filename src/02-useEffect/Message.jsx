import { useState } from "react";
import { useEffect } from "react"

export const Message = () =>{

    const [coord, setCoord] = useState({x:0,y:0});

    //obtine las cordenadas del mouse
    const onMouseMove = ({x ,y}) =>{
        const coords = {x, y};
        //console.log(coords);
        setCoord(coords);
    }

    useEffect(() =>{
        window.addEventListener('mousemove', onMouseMove );
        return () =>{
            window.removeEventListener('mousemove', onMouseMove );
        }
    },[])

    return(
        <>
            <h3>Usuario ya existente</h3>
            {JSON.stringify(coord)}
        
        </>
    )
}
import { useEffect } from "react"

export const Message = () =>{

    useEffect(() =>{
        console.log("message Mounted");
        return () =>{
            console.log("message unmounted");
        }
    },[])

    return(
        <>
            <h3>Usuario ya existente</h3>
        
        </>
    )
}
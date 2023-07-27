//import { useRef } from "react"
//import { useLayoutEffect } from "react"

export const Quot = ({forms,game_indices,front_default}) => {
    /*const pRef = useRef();
    useLayoutEffect(() => {
        console.log(pRef.current.getBoundingClientReact());
    },[forms]);*/

    return(
        <blockquote className="blockquote text-end" style={{display:"flex"}}>
            <img src={front_default} alt="" />
            <p className="mb-1">{forms[0].name}</p>
            <p className="mb-1">{game_indices[0].version.name}</p>
            <footer className="blockquote-footer">{game_indices[0].game_index}</footer>
        </blockquote>
    )
} 
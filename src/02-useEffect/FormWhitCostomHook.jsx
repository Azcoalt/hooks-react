import { useEffect } from "react";
import { useState } from "react"
import { Message } from "./Message";

export const FormWhitCostomHook = () =>{

    const [formState, setFormState] = useState({
        username:'azcoalt',
        email:'azc@gmail.com'
    });

    const {username,email} = formState;

    const onInputChange = ({target}) =>{
        const {name,value } = target
        setFormState({
            ...formState,
            [name]:value
        });
    }

    useEffect(() => {
        //console.log("useEfect call");
    },[]);

    useEffect(() => {
        //caundo cambie el formulario
        //console.log("formState change!");
    },[formState]);

    useEffect(() => {
        //cuando caombie el email
        //console.log("email change!");
    },[email]);

    return(
        <>
            <h1>Simple Form</h1>
            <hr />

            <input 
                type="text"
                className="form-control mt-2"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />

            <input 
                type="email"
                className="form-control mt-2"
                placeholder="example@gmail.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            {
                (username === 'azcoalt2') && <Message/>
            }
        </>
    )
}
import { useEffect } from "react";
import { useState } from "react"

export const SimpleForm = () =>{

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
        
    });
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
        </>
    )
}
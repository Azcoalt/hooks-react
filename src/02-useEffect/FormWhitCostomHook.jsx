import { useEffect } from "react";
import { useForm } from "../hooks/useForm";
import { Message } from "./Message";

export const FormWhitCostomHook = () =>{

    const {formState,onInputChange,onResetForm} = useForm({
        username:'',
        email:'',
        password:''
    });

    const {username,email,password} = formState;
       
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

            <input 
                type="password"
                className="form-control mt-2"
                placeholder="contraceña"
                name="password"
                value={password}
                onChange={onInputChange}
            />

            <button onClick={onResetForm} className="btn btn-primary mt-2">Borrar</button>
        </>
    )
}
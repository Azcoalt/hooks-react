import { useState } from "react";

export const useCounter = (initialValue = 10) =>{
    const [counter, setCounter] = useState(initialValue);
    
    //incrementa mas uno 
    const increment = () =>{
        setCounter(counter +1);
    }

    //decrementa en menos uno
    const decrement = () =>{
        if(counter === 0) return;
        setCounter(counter -1);
    }

    //reinicia el contador
    const reset = () =>{
        setCounter(initialValue);
    }

    return{
        counter,
        increment,
        decrement,
        reset,
    }
}
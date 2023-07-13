import { useState } from "react";

export const useCounter = (initialValue = 10) =>{
    const [counter, setCounter] = useState(initialValue);
    
    //incrementa mas uno 
    const increment = (value = 1) =>{
        setCounter(counter + value);
    }

    //decrementa en menos uno
    const decrement = (value = 1) =>{
        if(counter === 0) return;
        setCounter(counter - value);
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
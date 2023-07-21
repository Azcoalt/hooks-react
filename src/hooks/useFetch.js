import { useEffect, useState } from "react";

export const useFetch = (url) => {
    //va estar almacenando los datos 
    const [state, setState] = useState({
        data: null,
        isloading: true,
        hasError: null
    })

    //hace la peticion al url
    const getFetch = async () => {

        setState({
            ...state,
            isloading:true
        });

        const resp = await fetch(url);
        const data = await resp.json()

        setState({
            data,
            isloading:false,
            hasError:null
        })
        
    }

    //usa el efecto cuando hace el cambio de la url
    useEffect(() => {
        getFetch();
    },[url]);

    return {
        data: state.data,
        isloading: state.isloading,
        hasError: state.hasError
    };
}
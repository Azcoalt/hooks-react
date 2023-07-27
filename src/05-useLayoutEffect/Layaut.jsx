import { useFetch } from "../hooks/useFetch"
import { Loading } from "../03-examples/Loading";
import { Quot } from "../03-examples/Quot";

export const Layaut = () => {

    const {data,isloading,hasError} = useFetch('https://pokeapi.co/api/v2/pokemon/ditto');

    //console.log({data,isloading,hasError});

    const {forms,game_indices,sprites} = !!data && data;

    const {front_default} = !!sprites && sprites

    //console.log({back_default});
    return(
        <>
            <h1>Pokemon Quotes</h1>
            <hr />

            {
                isloading
                    ? <Loading/>
                    : <Quot forms={forms} game_indices={game_indices} front_default={front_default}/>
            }
            <button className="btn btn-primary">
                next Pokemon
            </button>
        </>
    )
}
import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const LogingPage = () => {
    const {User, setUser} = useContext(UserContext);
  return (
    <>
        <h1>Login</h1>
        <hr />

        <pre>
            {JSON.stringify(User,null,3)}
        </pre>

        <button 
            className="btn btn-primary"
            onClick={ () => setUser({id:1234, name:"Fernando", email:"fernando@gmail.com"})}
        >
            Establecer Usuario
        </button>
    </>
  )
}

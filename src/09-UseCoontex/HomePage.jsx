import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const HomePage = () => {

    const {User} = useContext(UserContext);
  return (
    <>
        <h1>Home Page <small>{User?.name}</small></h1>
        <hr />
        <pre>
            {JSON.stringify(User,null,3)}
        </pre>
    </>
  )
}

import { useState } from "react"
import { UserContext } from "./UserContext"

// const user = {
//     id: 1234,
//     name:"Fernando Herrera",
//     email:"fernandoherrera@gmail.com"
// }

export const UseProvider = ({children}) => {
    const [User, setUser] = useState({});
  return (
    <UserContext.Provider value={{User,setUser}}>
        {children}
    </UserContext.Provider>
  )
}

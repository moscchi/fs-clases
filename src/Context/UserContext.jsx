import { createContext, useState } from "react";

export const UserContext = createContext()

const UserProvider = ({children}) => {
    const [user, setUser] = useState({})

    const login = (username) => setUser({username: username})
    const logout = () => setUser({})

    const data = { user, login, logout}

    return <UserContext.Provider value={data}>{children}</UserContext.Provider>
}

export default UserProvider;
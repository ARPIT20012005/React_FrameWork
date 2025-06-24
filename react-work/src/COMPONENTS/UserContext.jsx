import React from 'react'
import { createContext, useState } from 'react'

const UserContext = createContext();

const UserProvider = ({children}) => {
    
    const [user, setUser] = useState ({ name: "Arpit" });



    const updateUser = (newName) => {
        setUser({name: newUpdate})

    }



    return (
         <UserContext.Provider value = {{ user, updateUser }}>
        
        {children}

    </UserContext.Provider>

    );
};

export { UserContext, UserProvider};
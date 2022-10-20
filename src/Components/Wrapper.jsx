import React,{useState} from 'react'

import UserContext from "../contexts/UserContext";

const Wrapper = ({ children }) => {


  const [name,setName] = useState(" John Doe ")


  return (

    <UserContext.Provider
    value={{
      name,
      setName
    }}>
    <div>{children}</div>
    </UserContext.Provider>
  )
}

export default Wrapper
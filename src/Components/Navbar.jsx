import React,{useContext} from 'react'

import UserContext from '../contexts/UserContext'





const Navbar = () => {
  const {name} = useContext(UserContext)



  return (
    <div><hr></hr><p>This page changes dynamically because of UseContext</p><hr></hr>Hi {name}<hr></hr></div>
  )
}
export default Navbar
import React, { useContext } from 'react'

import UserContext from '../contexts/UserContext'

const Form = () => {

  const {name,setName} = useContext(UserContext)



  return (
    <div>
    <form>
        <label>Your Name:
            <input type="text" onChange={e=>setName(e.target.value)} ></input>
        </label>
    </form>


    </div>
  )
}

export default Form
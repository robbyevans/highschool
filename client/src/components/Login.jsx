import React from 'react'
import {useState,useEffect} from "react"

function Login() {
  // [username,setUsername]=useState(null)
  // [password,setPassword]=useState(null)
  return (
    <div>
      <h1>Please Login</h1>
      <div className="signup">
      <form className='form-control'>
        <input 
        type="text"
        placeholder='username'
        // value={username}
        // onChange={handleChange}
        >
        </input>

        <input 
        type="password"
        placeholder='password'
        // value={password}
        // onChange={handleChange}
        >
        </input>
        <button type='submit'>Log in</button>
      </form>
      </div>
      </div>
  )
}

export default Login
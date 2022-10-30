import React from 'react'

function Signup() {
  return (
    <div>
      <h1>Welcome Signup</h1>
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
          <input
          type="password"
          placeholder='confirm password'
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

export default Signup
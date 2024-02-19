import React from 'react';
import Navbar from '../components/common/Navbar/main';

const SignUp = () => {
  return (
    <>
      <Navbar />
      <form onSubmit={(event) => event.preventDefault()}>
            <label htmlFor='username' >Enter your name</label>
            <input name='username' type='text' placeholder='username' />
            <br />
            <label htmlFor='email'>Enter your email address</label>
            <input name='email' type='email' placeholder='name@example.com' />
            <br />
            <label htmlFor='password'>Enter your password</label>
            <input name='password' type='text' placeholder='**********' />
            <br />
            <label htmlFor='role'>Your Role</label>
            <input type='radio' value="Student"/> 
            <input type='radio' value="Teacher"/>
            <input type='radio' value="Both of them"/>
            <button type='submit'>Register</button>
      </form>

    </>
  )
}

export default SignUp;
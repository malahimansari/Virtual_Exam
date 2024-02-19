import React from 'react';
import Navbar from '../components/common/Navbar/main';

const SignUp = () => {
  return (
    <>
      <Navbar />
      <form onSubmit={(event) => event.preventDefault()}>
            <label htmlFor='username' >Enter your name</label>
            <br />
            <input name='username' type='text' placeholder='username' />
            <br />
            <label htmlFor='email'>Enter your email address</label>
            <br />
            <input name='email' type='email' placeholder='name@example.com' />
            <br />
            <label htmlFor='password'>Enter your password</label>
            <br />
            <input name='password' type='text' placeholder='**********' />
            <br />
            <label htmlFor='role'>Your Role</label>
            <br />
            <input type='radio' name="role" value="Student"/> Student 
            <br />
            <input type='radio' name="role" value="Teacher"/> Teacher
            <br />
            <input type='radio' name="role" value="Both"/> Both of them
            <br />
            <button type='submit'>Register</button>
      </form>

    </>
  )
}

export default SignUp;
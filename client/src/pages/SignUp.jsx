import React from 'react';
import Navbar from '../components/common/Navbar/main';
import styles from '../styles/signup.module.css';
const SignUp = () => {
  
  return (
    <>
      <Navbar />
      <div className={styles.container}>
      <form id={styles.form} onSubmit={(event) => event.preventDefault()}>
        <h1>Create your account <i class="bi bi-pencil-square"></i></h1>
            <label htmlFor='username' >User name</label>
            <br />
            <input name='username' type='text' placeholder='username' />
            <br />
            <label htmlFor='email'>Email address</label>
            <br />
            <input name='email' type='email' placeholder='name@example.com' />
            <br />
            <label htmlFor='password'>Password</label>
            <br />
            <input name='password' type='text' placeholder='password' />
            <br />
            <button className={styles.btnSubmit} type="submit">Register <i class="bi bi-box-arrow-in-right"></i></button>
      </form>
      </div>
     

    </>
  )
}

export default SignUp;
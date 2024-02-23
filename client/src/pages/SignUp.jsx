import React from 'react';
import Navbar from '../components/common/Navbar/main';
import styles from '../styles/signup.module.css';
import { Link, useNavigate } from 'react-router-dom';
const SignUp = () => {

  const navigateTo = useNavigate();
  
  const homepageNavigator = () => {
    navigateTo('/');
  }
  return (
    <>
      <Navbar />
      <div className={styles.container}>
      <form id={styles.form} onSubmit={(event) => event.preventDefault()}>
        <button type='button' className={styles.btnBack} onClick={homepageNavigator}>Back <i className="bi bi-arrow-left-circle"></i></button>
        <h1>Create your account <i className="bi bi-pencil-square"></i></h1>
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
            <button className={styles.btnSubmit} type="submit">Register <i className="bi bi-box-arrow-in-right"></i></button>
            <span>Already have account, then <Link style={{
              color: "darkcyan",
            }}to='/login'>Sign In</Link></span>
      </form>
      </div>
     

    </>
  )
}

export default SignUp;
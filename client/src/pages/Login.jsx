import React from 'react'
import styles from '../styles/signup.module.css'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/common/Navbar/main';
const Login = () => {
  const navigateTo = useNavigate();
  const signuppageNavigator = () => {
    navigateTo('/signup');
  }

  return (
    <>
    <Navbar />
    <div className={styles.container}>
    <form id={styles.form} onSubmit={(event) => event.preventDefault()}>
      <button type='button' className={styles.btnBack} onClick={signuppageNavigator}>Back <i className="bi bi-arrow-left-circle"></i></button>
      <h1>Login <i className="bi bi-key"></i></h1>
          <label htmlFor='email'>Email address</label>
          <br />
          <input name='email' type='email' placeholder='name@example.com' />
          <br />
          <label htmlFor='password'>Password</label>
          <br />
          <input name='password' type='text' placeholder='password' />
          <br />
          <button className={styles.btnSubmit} type="submit">Login <i className="bi bi-box-arrow-in-right"></i></button>
    </form>
    </div>
    </>
  )
}

export default Login
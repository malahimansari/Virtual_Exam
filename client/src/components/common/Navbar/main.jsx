import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import styles from './navbar.module.css';
function Navbar() {
  const navigateTo = useNavigate();

  const navigatorHome = () => {
    navigateTo('/');
  }
  
  return (
    <>
        <header>
            <nav>
                <div className={styles.container}>
                    <div className={styles.logo} onClick={navigatorHome}><i className="bi bi-backpack2-fill"></i> Quizify</div>
                    <ul>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/help'>Help</Link></li>
                        <li><Link to='/signup'>SignUp</Link></li>
                    </ul>
                    <button id={styles.btn}><i className="bi bi-list-nested"></i></button>
                </div>
            </nav>
        </header>
    </>
  )
}

export default Navbar;
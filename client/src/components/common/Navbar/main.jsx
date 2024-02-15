import React from 'react';
import styles from './navbar.module.css';
function Navbar() {
  return (
    <>
        <header>
            <nav>
                <div className={styles.container}>
                    <div className={styles.logo}><i className="bi bi-backpack2-fill"></i> Quizify</div>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Get Help?</a></li>
                        <li><a href="#">Sign-Up</a></li>
                    </ul>
                    <button id={styles.btn}><i className="bi bi-list-nested"></i></button>
                </div>
            </nav>
        </header>
    </>
  )
}

export default Navbar;
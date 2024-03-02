import React from 'react';
import styles from './secone.module.css';
import PopUpStickyNoteLogo from '../../../assets/Pop-up-Sticky-note-Logo-313.jpg'
import ETextSummarization from '../../../assets/extractive-text-summarization.jpg'

import Navbar from '../../common/Navbar/main';
function Main() {
  return (
    <>
    {/* <Navbar /> */}
    <main>
        <div className={styles.container}>
          <section>
            <div className={styles.containersm}>
              <div className={styles.sectiontitle}>Take your classes, exams, quizzes online, <span className={styles.color}> for students,faculty and admins</span></div>
              <div className={styles.picture}></div>
            </div>
          </section>
  
          <section>
            <div className={styles.containersecond}>
            <div className={styles.picture2}></div>
            <div className={styles.sectiontitle}>Tight Security, plagiarism enabled <span className={styles.color}> and provides cheating-free assessment</span></div>
            </div>
          </section>
  
          <section>
            <div className={styles.containersm}>
              <div className={styles.sectiontitle}>Used by millions people worldwide <span className={styles.color}> online from anywhere</span></div>
              <div className={styles.picture3}></div>
            </div>
          </section>

          
          <div className={styles.container}>
          <section>
            <div className={styles.containersm}>
              {/* Use the imported image here */}
              <div className={styles.PopUpStickyNoteLogo}>
                <img src={PopUpStickyNoteLogo} alt="Pop-up Sticky Note Logo" />
              </div>
              <div className={styles.sectiontitle}>
                Now introducing <span className={styles.color}> Pop-up sticky notes</span>, which allows users to search across the web, copy and make custom notes.
              </div>
            </div>
          </section>

          <section>
            <div className={styles.containersm}>
              <div className={styles.sectiontitle}>
                As well as <span className={styles.color}> Text Summarizer and Rephraser</span>, which allows users to summarize and rephrase difficult definitions to create ease.
              </div>
              {/* Use the imported image here */}
              <div className={styles.ETextSummarization}>
                <img src={ETextSummarization} alt="Pop-up Sticky Note Logo" />
              </div>
            </div>
          </section>
        </div>
   
          <section>
            <div className={styles.containerlast}>
              <div className={styles.sectionlasttitle}>Take assessments or join online assessments</div>
              <button id={styles.btn}>Get Started </button>
            </div>
          </section>
        </div>
    </main>
    </>
  )
}

// Add strict protection mode and highlight and Add suggestions or questions, explain more with drawing, pictures and flowcharts. Reminders, 

//Instant note taker and hidden feature to allow students to explain difficult terms and keeping the text material clean and breathable.

// Text summarizer and rephrasizer to allow students to better understand their study material and developing more motivation.
export default Main;
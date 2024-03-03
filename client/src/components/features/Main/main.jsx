import React from "react";
import styles from "./secone.module.css";
import Navbar from "../../common/Navbar/main";
import { useNavigate } from "react-router-dom";
function Main() {
  let navigateTo = useNavigate();
  return (
    <>
      <Navbar />
      <main>
        <div className={styles.container}>
          <section>
            <div className={styles.containersm}>
              <div className={styles.sectiontitle}>
                Online Examination, is now possible!! Provide Hassle free
                examination for students
              </div>
              <div className={styles.picture}></div>
            </div>
          </section>

          <section>
            <div className={styles.containersecond}>
              <div className={styles.picture2}></div>
              <div className={styles.sectiontitle}>
                Real Time Monitoring enabled, cheaters can be easily detected by
                our security systems implemented by us
              </div>
            </div>
          </section>

          <section>
            <div className={styles.containersm}>
              <div className={styles.sectiontitle}>
                Used by millions people worldwide{" "}
                <span className={styles.color}> online from anywhere</span>
              </div>
              <div className={styles.picture3}></div>
            </div>
          </section>

          <section>
            <div className={styles.containerlast}>
              <div className={styles.sectionlasttitle}>
                Take assessments or join online assessments
              </div>
              <button id={styles.btn} onClick={() => navigateTo("/signup")}>
                Get Started{" "}
              </button>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

// Add strict protection mode and highlight and Add suggestions or questions, explain more with drawing, pictures and flowcharts. Reminders,

//Instant note taker and hidden feature to allow students to explain difficult terms and keeping the text material clean and breathable.

// Text summarizer and rephrasizer to allow students to better understand their study material and developing more motivation.
export default Main;

import React from 'react'
import styles from '../styles/quiz.module.css';
const Quiz = () => {

  const dummyQuestions = [{
    text: "What is the colour of Mango?",
    options: ["Yellow", "Orange", "Red"],
    correctAnswer: "Yellow"
  },
  {
    text: "What is the colour of Orange?",
    options: ["Yellow", "Orange", "Red"],
    correctAnswer: "Orange"
  },
  {
    text: "What is the colour of Strawberry?",
    options: ["Yellow", "Orange", "Red"],
    correctAnswer: "Red"
  },
  {
    text: "What is the colour of Strawberry?",
    options: ["Yellow", "Orange", "Red"],
    correctAnswer: "Red"
  },
  {
    text: "What is the colour of Strawberry?",
    options: ["Yellow", "Orange", "Red"],
    correctAnswer: "Red"
  }]
  return (
    <div className={styles.container}>
        <div className={styles.card}>
          <h1>Select appropriate answers as required</h1>
          {dummyQuestions.map((data) => {
            return (
              <>
                <h3>{data.text}</h3>
          <br />
          <button>{data.options[0]}</button>
          <br />
          <button>{data.options[1]}</button>
          <br />
          <button>{data.options[2]}</button>
          <br />
              </>
            )
          })}
          
        </div>
    </div>
  )
}

export default Quiz
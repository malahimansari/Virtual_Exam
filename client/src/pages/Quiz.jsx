import React, { useEffect, useState } from "react";
import styles from "../styles/quiz.module.css";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const getQuizData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/v1/questions/`,
          {
            method: "GET",
          }
        );
        const data = await response.json();
        setQuestions(data);
        // Initialize answers array with empty objects for each question
        setAnswers(Array(data.length).fill({ option: "", correctAnswer: "" }));
      } catch (error) {
        console.log(error);
      }
    };

    getQuizData();
  }, []);

  const optionClickHandler = (
    event,
    questionIndex,
    optionIndex,
    correctAnswer
  ) => {
    console.log(answers);
    const selectedOption = event.target.textContent;
    // Update the answers state array with the selected option and correct answer
    setAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[questionIndex] = {
        option: selectedOption,
        correctAnswer: correctAnswer,
      };
      return newAnswers;
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>Select appropriate answers as required</h1>
        {questions.map((question, questionIndex) => (
          <div key={questionIndex}>
            <h3>{question.text}</h3>
            <br />
            {question.options.map((option, optionIndex) => (
              <div key={optionIndex}>
                <br />
                <button
                  onClick={(event) =>
                    optionClickHandler(
                      event,
                      questionIndex,
                      optionIndex,
                      question.correctAnswer
                    )
                  }
                >
                  {option}
                </button>
              </div>
            ))}
            <br />
          </div>
        ))}
        <button onClick={submitHandler}></button>
      </div>
    </div>
  );
};

export default Quiz;

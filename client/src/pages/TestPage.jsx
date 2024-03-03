import React, { useState } from "react";
import "../styles/forms.css";
import { useAuth } from "../store/auth";

const Test = () => {
  const { token } = useAuth();
  const [formData, setFormData] = useState({
    title: "",
    options: ["", "", ""],
    isCorrect: "",
  });
  const [formList, setFormList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...formData.options];
    newOptions[index] = value;
    setFormData((prevData) => ({
      ...prevData,
      options: newOptions,
    }));
  };

  const handleCorrectOption = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      isCorrect: value,
    }));
  };

  const handleSubmit = async (e) => {
    let id = 47;
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:8080/api/v1/question/${id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to add question");
      }

      const data = await response.json();
      console.log("Question added successfully:", data);

      setFormList((prevList) => [...prevList, formData]);
      setFormData({
        title: "",
        options: ["", "", ""],
        isCorrect: "",
      });
    } catch (error) {
      console.error("Error adding question:", error.message);
    }
  };

  return (
    <div className="container">
      <h1>Create Test</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Your Question"
          value={formData.title}
          onChange={handleChange}
        />
        <h3>Choose Options</h3>
        <div className="container-radio">
          {formData.options.map((option, index) => (
            <input
              key={index}
              type="text"
              placeholder={`Option ${index + 1}`}
              value={option}
              onChange={(e) => handleOptionChange(index, e.target.value)}
            />
          ))}
          <input
            type="text"
            placeholder="Correct Option"
            value={formData.isCorrect}
            onChange={(e) => handleCorrectOption(e.target.value)}
          />
        </div>
        <button type="submit">Add Question</button>
      </form>

      <h1>Preview Form</h1>
      <ul>
        {formList.map((item, index) => (
          <li key={index}>
            <p>{item.title}</p>
            {item.options.map((option, idx) => (
              <p key={idx}>{option}</p>
            ))}
            <p>Correct Option: {item.isCorrect}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Test;

import React, { useState } from "react";
import styles from "./CreateRoom.module.css";

export const CreateRoom = () => {
  const [formData, setFormData] = useState({
    name: "",
    teachers: [],
    students: [],
    code: "",
    capacity: 0,
    scheduledExams: [],
    isAvailable: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/v1/room`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      console.log("Data posted successfully");
      // Reset the form after successful submission
      setFormData({
        name: "",
        teachers: [],
        students: [],
        code: "",
        capacity: 0,
        scheduledExams: [],
        isAvailable: true,
      });
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formGroup}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="code">Code:</label>
        <input
          type="text"
          id="code"
          name="code"
          value={formData.code}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="capacity">Capacity:</label>
        <input
          type="number"
          id="capacity"
          name="capacity"
          value={formData.capacity}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="isAvailable">Is Available:</label>
        <select
          id="isAvailable"
          name="isAvailable"
          value={formData.isAvailable}
          onChange={handleChange}
          required
        >
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
      </div>
      {/* Input for teachers array */}
      <div className={styles.formGroup}>
        <label htmlFor="teachers">Teachers:</label>
        <input
          type="text"
          id="teachers"
          name="teachers"
          value={formData.teachers}
          onChange={handleChange}
        />
      </div>
      {/* Input for students array */}
      <div className={styles.formGroup}>
        <label htmlFor="students">Students:</label>
        <input
          type="text"
          id="students"
          name="students"
          value={formData.students}
          onChange={handleChange}
        />
      </div>
      {/* Input for scheduledExams array */}
      <div className={styles.formGroup}>
        <label htmlFor="scheduledExams">Scheduled Exams:</label>
        <input
          type="text"
          id="scheduledExams"
          name="scheduledExams"
          value={formData.scheduledExams}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className={styles.submitButton}>
        Submit
      </button>
    </form>
  );
};

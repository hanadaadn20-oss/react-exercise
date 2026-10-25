
import React, { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [grade, setGrade] = useState("");
  const [subjects, setSubjects] = useState([]);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  function handleSubject(subject) {
    setSubjects((prev) =>
      prev.includes(subject)
        ? prev.filter((item) => item !== subject)
        : [...prev, subject]
    );
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.com$/i.test(email.trim())) {
      newErrors.email = "Enter a valid email ending in .com";
    }

    if (!grade) {
      newErrors.grade = "Please select a grade";
    }

    if (subjects.length === 0) {
      newErrors.subjects = "Select at least one subject";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setSuccess(false);
      return;
    }

    setSuccess(true);
  }

  const inputStyle = {
    width: "100%",
    padding: "12px",
    border: "1px solid #999",
    borderRadius: "5px",
    boxSizing: "border-box",
    fontSize: "16px",
    marginTop: "8px",
  };

  const errorStyle = {
    color: "#b42318",
    fontSize: "14px",
    marginTop: "6px",
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#f5f5f5",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px",
      boxSizing: "border-box",
      fontFamily: "Arial, sans-serif",
    }}>
      <div style={{
        background: "white",
        padding: "30px",
        borderRadius: "10px",
        boxShadow: "0 2px 12px #00000015",
        width: "100%",
        maxWidth: "480px",
      }}>
        {success ? (
          <div>
            <h2 style={{ color: "green" }}>
              Registration Successful!
            </h2>

            <p>Your registration has been completed successfully.</p>

            <hr />

            <p><strong>Student Name:</strong> {name}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Grade Level:</strong> {grade}</p>
            <p><strong>Subjects:</strong> {subjects.join(", ")}</p>

            <button
              onClick={() => {
                setName("");
                setEmail("");
                setGrade("");
                setSubjects([]);
                setErrors({});
                setSuccess(false);
              }}
              style={{
                ...inputStyle,
                background: "#d9362b",
                color: "white",
                border: "none",
                cursor: "pointer",
              }}
            >
              Register Another Student
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <h2 style={{ marginTop: 0 }}>
              Student Registration
            </h2>

            <label htmlFor="name"><strong>Student Name</strong></label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={inputStyle}
              aria-invalid={!!errors.name}
            />
            {errors.name && <p style={errorStyle}>{errors.name}</p>}

            <div style={{ marginTop: "22px" }}>
              <label htmlFor="email"><strong>Email</strong></label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={inputStyle}
                aria-invalid={!!errors.email}
              />
              {errors.email && (
                <p style={errorStyle}>{errors.email}</p>
              )}
            </div>

            <div style={{ marginTop: "22px" }}>
              <label htmlFor="grade"><strong>Grade Level</strong></label>
              <select
                id="grade"
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
                style={inputStyle}
                aria-invalid={!!errors.grade}
              >
                <option value="">Select Grade</option>
                <option value="Grade 9">Grade 9</option>
                <option value="Grade 10">Grade 10</option>
                <option value="Grade 11">Grade 11</option>
                <option value="Grade 12">Grade 12</option>
              </select>
              {errors.grade && (
                <p style={errorStyle}>{errors.grade}</p>
              )}
            </div>

            <div style={{ marginTop: "22px" }}>
              <strong>Subjects Interest</strong>

              {["Mathematics", "Science", "English"].map((subject) => (
                <label
                  key={subject}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginTop: "12px",
                    cursor: "pointer",
                  }}
                >
                  <input
                    type="checkbox"
                    checked={subjects.includes(subject)}
                    onChange={() => handleSubject(subject)}
                  />
                  {subject}
                </label>
              ))}

              {errors.subjects && (
                <p style={errorStyle}>{errors.subjects}</p>
              )}
            </div>

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "14px",
                marginTop: "25px",
                background: "#d9362b",
                color: "white",
                border: "none",
                borderRadius: "5px",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Register
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

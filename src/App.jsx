import React, { useState } from "react";

function App() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    role: "",
    experience: "",
    skills: [],
    terms: false,
    notifications: false,
  });

  const skills = [
    "React",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Python",
    "Java",
    "UI Design",
    "API Development",
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSkill = (skill) => {
    if (form.skills.includes(skill)) {
      setForm({
        ...form,
        skills: form.skills.filter((item) => item !== skill),
      });
    } else {
      setForm({
        ...form,
        skills: [...form.skills, skill],
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.terms) {
      alert("Please agree to the terms and conditions.");
      return;
    }

    alert("Application submitted successfully!");
    console.log(form);
  };

  return (
    <div style={styles.page}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <h1 style={styles.title}>Developer Application Form</h1>

        {/* Full Name */}
        <label style={styles.label}>Full Name</label>
        <input
          type="text"
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
          style={styles.input}
        />

        {/* Email */}
        <label style={styles.label}>Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          style={styles.input}
        />

        {/* Role */}
        <label style={styles.label}>Role</label>
        <select
          name="role"
          value={form.role}
          onChange={handleChange}
          style={styles.input}
        >
          <option value="">Select a role</option>
          <option value="Frontend Developer">Frontend Developer</option>
          <option value="Backend Developer">Backend Developer</option>
          <option value="Full Stack Developer">
            Full Stack Developer
          </option>
          <option value="UI Designer">UI Designer</option>
        </select>

        {/* Experience */}
        <label style={styles.label}>Years of Experience</label>
        <input
          type="number"
          name="experience"
          value={form.experience}
          onChange={handleChange}
          style={styles.input}
        />

        {/* Skills */}
        <label style={styles.label}>Skills</label>

        <div style={styles.skills}>
          {skills.map((skill) => (
            <label key={skill} style={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={form.skills.includes(skill)}
                onChange={() => handleSkill(skill)}
              />
              {skill}
            </label>
          ))}
        </div>

        {/* Terms */}
        <label style={styles.checkboxLabel}>
          <input
            type="checkbox"
            name="terms"
            checked={form.terms}
            onChange={handleChange}
          />
          I agree to the terms and conditions
        </label>

        {/* Notifications */}
        <label style={styles.checkboxLabel}>
          <input
            type="checkbox"
            name="notifications"
            checked={form.notifications}
            onChange={handleChange}
          />
          Receive notifications about new opportunities
        </label>

        {/* Submit */}
        <button type="submit" style={styles.button}>
          Submit Application
        </button>
      </form>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#f5f5f5",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "30px 15px",
    fontFamily: "Arial, sans-serif",
    boxSizing: "border-box",
  },

  form: {
    width: "100%",
    maxWidth: "600px",
    backgroundColor: "white",
    padding: "35px",
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
    boxSizing: "border-box",
  },

  title: {
    textAlign: "center",
    fontSize: "25px",
    marginBottom: "35px",
    color: "#222",
  },

  label: {
    display: "block",
    fontWeight: "600",
    marginBottom: "8px",
    marginTop: "20px",
    color: "#333",
  },

  input: {
    width: "100%",
    height: "45px",
    padding: "0 12px",
    border: "1px solid #ddd",
    borderRadius: "7px",
    outline: "none",
    fontSize: "15px",
    boxSizing: "border-box",
    backgroundColor: "white",
  },

  skills: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "18px 30px",
    marginBottom: "25px",
  },

  checkboxLabel: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontSize: "15px",
    color: "#333",
    marginBottom: "18px",
  },

  button: {
    width: "100%",
    height: "48px",
    marginTop: "10px",
    border: "none",
    borderRadius: "7px",
    backgroundColor: "#e85b4f",
    color: "white",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
  },
};

export default App;
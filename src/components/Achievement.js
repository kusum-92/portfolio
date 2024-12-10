import React from "react";

const Achievements = () => {
  const styles = {
    section: {
      padding: "20px",
      borderBottom: "1px solid #ddd",
    },
    title: {
      color: "#007bff",
    },
    list: {
      listStyleType: "none",
      padding: 0,
    },
  };

  return (
    <section id="achievements" style={styles.section}>
      <h2 style={styles.title}>Achievements & Certifications</h2>
      <ul style={styles.list}>
        <li>Agile Project Management | Coursera (Google)</li>
        <li>Workshop on Full Stack web application Development | IEEE</li>
        <li>Emerging Technologies (AI & Cloud) | EDUNET FOUNDATION</li>
        <li>Introduction to Cyber Security | Vodafone Idea Foundation</li>
        <li>Machine Learning Fundamentals| Infosys Springboard</li>
      </ul>
    </section>
  );
};

export default Achievements;

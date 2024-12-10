import React from "react";

const Skills = () => {
  const styles = {
    section: {
      padding: "20px",
      borderBottom: "1px solid #ddd",
    },
    title: {
      color: "#007bff",
    },
    skillList: {
      listStyleType: "none",
      padding: 0,
    },
    skillProficiency: {
      margin: "10px 0",
    },
  };

  return (
    <section id="skills" style={styles.section}>
      <h2 style={styles.title}>Core Skills</h2>
      <ul style={styles.skillList}>
        <li>Programming Languages: Python, HTML, CSS,C, Java</li>
        <li>Project Management Approach: Agile Technology, Scrum
      </li>
        <li>Tools & Platforms: Git, Docker</li>
        <li>Database Management: MySQL, MongoDB</li>
      </ul>
      <div style={styles.skillProficiency}>
        <p>Python: ★★★★☆</p>
        <p>C   : ★★★★☆</p>
        <p>MySQL: ★★★★☆</p>
        <p>github: ★★★☆☆</p>
        <p>React: ★★★☆☆</p>
      </div>
    </section>
  );
};

export default Skills;

import React from "react";

const Experience = () => {
  const styles = {
    section: {
      padding: "20px",
      borderBottom: "1px solid #ddd",
    },
    title: {
      color: "#007bff",
      marginBottom: "10px",
    },
    timeline: {
      listStyleType: "none",
      padding: 0,
    },
    timelineItem: {
      marginBottom: "20px",
      padding: "15px",
      border: "1px solid #ddd",
      borderRadius: "5px",
      backgroundColor: "#fff",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    company: {
      fontSize: "18px",
      fontWeight: "bold",
      color: "#333",
    },
    role: {
      fontStyle: "italic",
      color: "#555",
      marginBottom: "5px",
    },
    dates: {
      fontSize: "14px",
      color: "#777",
      marginBottom: "10px",
    },
    responsibilities: {
      marginTop: "10px",
      lineHeight: "1.5",
    },
    bulletPoint: {
      marginLeft: "15px",
    },
  };

  return (
    <section id="experience" style={styles.section}>
      <h2 style={styles.title}>Experience Timeline</h2>
      <ul style={styles.timeline}>
        {/* Job 1 */}
        <li style={styles.timelineItem}>
          <p style={styles.company}>Edunet Foundation</p>
          <p style={styles.role}>Student Intern</p>
          <p style={styles.dates}>November 2023 - December 2023</p>
          <ul style={styles.responsibilities}>
            <li style={styles.bulletPoint}>
            Developed an interactive AI chatbot on IBM cloud using Watson Studio            </li>
            <li style={styles.bulletPoint}>
            Technology Stack- IBM cloud
            </li>
          </ul>
        </li>

        {/* Job 2 */}
        <li style={styles.timelineItem}>
          <p style={styles.company}>Ispirit</p>
          <p style={styles.role}>Intern</p>
          <p style={styles.dates}>April 2024 - Present</p>
          <ul style={styles.responsibilities}>
            <li style={styles.bulletPoint}>
            Assisting in the design, implementation of Frontend part of software.
            </li>
            <li style={styles.bulletPoint}>
            Writing code and implementing in react.
            </li>
            <li style={styles.bulletPoint}>
            Collaborating with the development team to ensure data integrity and security.
            </li>
          </ul>
        </li>

        
      </ul>
    </section>
  );
};

export default Experience;

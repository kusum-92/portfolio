import React from "react";
import resume from "./KUSUM.pdf";
const Contact = () => {
  const styles = {
    section: {
      padding: "20px",
      backgroundColor: "#f9f9f9",
      borderTop: "1px solid #ddd",
    },
    title: {
      color: "#007bff",
      marginBottom: "15px",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      maxWidth: "500px",
      margin: "0 auto",
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "5px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    input: {
      marginBottom: "15px",
      padding: "10px",
      border: "1px solid #ddd",
      borderRadius: "5px",
      fontSize: "16px",
    },
    textarea: {
      height: "100px",
      marginBottom: "15px",
      padding: "10px",
      border: "1px solid #ddd",
      borderRadius: "5px",
      fontSize: "16px",
    },
    button: {
      padding: "10px",
      border: "none",
      borderRadius: "5px",
      backgroundColor: "#007bff",
      color: "#fff",
      fontSize: "16px",
      cursor: "pointer",
    },
    socialLinks: {
      textAlign: "center",
      marginTop: "30px",
    },
    link: {
      margin: "0 10px",
      color: "#007bff",
      textDecoration: "none",
      fontSize: "18px",
    },
    resume: {
      textAlign: "center",
      marginTop: "20px",
    },
    resumeLink: {
      padding: "10px 20px",
      backgroundColor: "#007bff",
      color: "#fff",
      textDecoration: "none",
      borderRadius: "5px",
      fontSize: "16px",
    },
  };

  return (
    <section id="contact" style={styles.section}>
      <h2 style={styles.title}>Contact Me</h2>

      {/* Contact Form */}
      <form style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          style={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          style={styles.input}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          style={styles.textarea}
        ></textarea>
        <button type="submit" style={styles.button}>
          Send Message
        </button>
      </form>

      {/* Social Media Links */}
      <div style={styles.socialLinks}>
        <a
          href="www.linkedin.com/in/kusum-3724632b6"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/kusum-92"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          GitHub
        </a>
      </div>

      {/* Resume Download */}
      <div style={styles.resume}>
        <a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          style={styles.resumeLink}
          download
        >
          Download My Resume
        </a>
      </div>
    </section>
  );
};

export default Contact;

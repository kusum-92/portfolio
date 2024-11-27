import React from 'react';
import kusumImage from './WhatsApp Image 2024-10-16 at 18.08.59_2b83b613.jpg';

const Home = () => {
  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.logo}>KUSUM</div>
        <nav style={styles.nav}>
          <a href="#home" style={styles.navLink}>Home</a>
          <a href="#about" style={styles.navLink}>About</a>
          <a href="#projects" style={styles.navLink}>Projects</a>
          <a href="#contact" style={styles.navLink}>Contact</a>
        </nav>
      </header>

      {/* Main Content */}
      <section style={styles.main}>
        <div style={styles.textSection}>
          {/* <p style={styles.greeting}>HELLO</p> */}
          <h1 style={styles.name}>
            I'm <span style={styles.highlight}>Kusum</span>
            <br /> a Final Year Student
          </h1>
          <p style={styles.description}>
            I am a Full-Stack Developer with a passion for building scalable
            and innovative solutions. Currently pursuing my degree at Acharya
            Institute of Technology.
          </p>
          <div style={styles.links}>
            <a
              href="https://github.com/kusum-92"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
            >
              GitHub
            </a>
            <a
              href="mailto:gkusum922@gmail.com"
              style={styles.link}
            >
              Mail
            </a>
            <a
              href="www.linkedin.com/in/kusum-3724632b6"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div style={styles.imageSection}>
          <img
            src={kusumImage}
            alt="Kusum"
            style={styles.image}
          />
        </div>
      </section>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9f9f9',
    color: '#333',
    margin: 0,
    padding: 0,
    width: '100%',
    minHeight: '100vh',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#fff',
    borderBottom: '1px solid #ddd',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#007BFF',
  },
  nav: {
    display: 'flex',
    gap: '15px',
  },
  navLink: {
    textDecoration: 'none',
    color: '#007BFF',
    fontWeight: 'bold',
    fontSize: '16px',
  },
  main: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '50px 20px',
  },
  textSection: {
    flex: 1,
    maxWidth: '500px',
  },
  greeting: {
    fontSize: '16px',
    color: '#777',
    textTransform: 'uppercase',
    marginBottom: '10px',
  },
  name: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  highlight: {
    color: '#007BFF',
  },
  description: {
    fontSize: '18px',
    lineHeight: '1.6',
    marginBottom: '20px',
  },
  links: {
    display: 'flex',
    gap: '20px', // Spacing between links
  },
  link: {
    textDecoration: 'underline',
    color: '#007BFF',
    fontWeight: 'bold',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'color 0.3s ease',
  },
  imageSection: {
    flex: 1,
    textAlign: 'center',
  },
  image: {
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    objectFit: 'cover',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  },
};

export default Home;

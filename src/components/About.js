// import React from 'react';

// const About = () => {
//   return (
//     <section id="about" className="about-section">
//       <h2>About Me</h2>
//       <p>
//       A final-year engineering student specializing in Computer Science at Acharya Institute of Technology.
//       I am passionate about leveraging technology to solve real-world problems and have hands-on experience.
//       </p>
//     </section>
//   );
// };

// export default About;


import React from "react";

const About = () => {
  const styles = {
    section: {
      padding: "20px",
      borderBottom: "1px solid #ddd",
    },
    title: {
      color: "#007bff",
    },
    container: {
      display: "flex",
      alignItems: "center",
    },
    profilePic: {
      borderRadius: "50%",
      width: "150px",
      height: "150px",
      marginRight: "20px",
    },
  };

  return (
    <section id="about" style={styles.section}>
      <h2 style={styles.title}>About Me</h2>
      <div style={styles.container}>
        
        <p>
          I am a passionate Full-Stack Developer with expertise in building
          scalable and innovative solutions. With a strong foundation in
          software engineering and experience across diverse technologies, I
          thrive on delivering impactful projects. Currently pursuing a degree
          at Acharya Institute of Technology.
        </p>
      </div>
    </section>
  );
};

export default About;

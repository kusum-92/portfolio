// import React from 'react';

// const Projects = () => {
//   return (
//     <section id="projects" className="projects-section">
//         <body>
//       <h2>My Projects </h2></body>
//       <p>
//         Here are some of the projects that I have worked on, showcasing my skills and expertise.
//       </p>
//        <h3><a href="https://www.kaggle.com/code/kusum7/kusum-sentiment-analysis">SENTIMENT ANALYSIS</a></h3>
//        <p>
//        <span>- Load and preprocess the dataset, separate review text and sentiment, clean the data, and split it for validation.</span></p>
//        <p><span>- Train a logistic regression model and assess performance using accuracy and a confusion matrix.</span></p>
//        <p><span>-  Implemented a streamlined Pipeline with a Column Transformer for efficient preprocessing automated data transformation</span>
//     </p>
//     </section>
//   );
// };

// export default Projects;


import React from "react";

const Projects = () => {
  const styles = {
    section: {
      padding: "20px",
      borderBottom: "1px solid #ddd",
    },
    title: {
      color: "#007bff",
      marginBottom: "10px",
    },
    project: {
      marginBottom: "20px",
      padding: "15px",
      border: "1px solid #ddd",
      borderRadius: "5px",
      backgroundColor: "#fff",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    projectTitle: {
      fontSize: "18px",
      fontWeight: "bold",
      color: "black",
      marginBottom: "5px",
    },
    projectDescription: {
      marginBottom: "10px",
      lineHeight: "1.5",
    },
    techStack: {
      fontStyle: "italic",
      color: "#555",
      marginBottom: "10px",
    },
    links: {
      display: "flex",
      gap: "10px",
    },
    link: {
      color: "#007bff",
      textDecoration: "none",
      fontWeight: "bold",
    },
    projectImage: {
      width: "100%",
      maxHeight: "200px",
      objectFit: "cover",
      borderRadius: "5px",
      marginBottom: "10px",
    },
  };

  return (
    <section id="projects" style={styles.section}>
      <h2 style={styles.title}>Featured Projects</h2>
      <p>Showcasing a selection of key projects highlighting my skills and experience.</p>

      {/* Project 1 */}
      <div style={styles.project}>
    
        <h3 style={styles.projectTitle}>Sentiment Analysis</h3>
        <p style={styles.projectDescription}>
          A project analyzing movie reviews using machine learning techniques to classify sentiments.
        </p>
        <p style={styles.techStack}>Tech Stack: Python, Logistic Regression, Pandas, Scikit-learn</p>
        <div style={styles.links}>
          <a
            href="https://www.kaggle.com/code/kusum7/kusum-sentiment-analysis"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            View Code
          </a>
        </div>
      </div>

      {/* Project 2
      <div style={styles.project}>
        <h3 style={styles.projectTitle}>Phishing Website Detection</h3>
        <p style={styles.projectDescription}>
          Developed a machine learning model to classify websites as phishing or legitimate.
        </p>
        <p style={styles.techStack}>Tech Stack: Python, Random Forest, Flask</p>
        <div style={styles.links}>
          <a
            href="https://github.com/your-username/phishing-detection"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            View Code
          </a>
          
        </div>
      </div> */}

      {/* Project 3 */}
      <div style={styles.project}>
      
        <h3 style={styles.projectTitle}>Twitter Sentiment Analysis</h3>
        <p style={styles.projectDescription}>
          Built a web app providing real-time sentiment insights on trending topics using Twitter data.
        </p>
        <p style={styles.techStack}>Tech Stack: React, Django, NLP, Docker</p>
        <div style={styles.links}>
          <a
            href="https://github.com/your-username/twitter-sentiment"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            View Code
          </a>
          
        </div>
      </div>
    </section>
  );
};

export default Projects;

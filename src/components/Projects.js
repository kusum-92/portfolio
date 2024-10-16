import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
        <body>
      <h2>My Projects </h2></body>
      <p>
        Here are some of the projects that I have worked on, showcasing my skills and expertise.
      </p>
       <h3><a href="https://www.kaggle.com/code/kusum7/kusum-sentiment-analysis">SENTIMENT ANALYSIS</a></h3>
       <p>
       <span>- Load and preprocess the dataset, separate review text and sentiment, clean the data, and split it for validation.</span></p>
       <p><span>- Train a logistic regression model and assess performance using accuracy and a confusion matrix.</span></p>
       <p><span>-  Implemented a streamlined Pipeline with a Column Transformer for efficient preprocessing automated data transformation</span>
    </p>
    </section>
  );
};

export default Projects;

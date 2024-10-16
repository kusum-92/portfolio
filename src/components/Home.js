import React from 'react';
import kusumImage from './WhatsApp Image 2024-10-16 at 18.08.59_2b83b613.jpg';

const Home = () => {
  return (
    <div className="profile-section">
    <div className="profile-content">
      <div className="profile-picture">
      <img src={kusumImage} alt="KUSUM" />
      </div>
      <div className="profile-text">
        <h1>
          Hi, I'm <span>KUSUM</span>
          <br /> a Final Year Student
        </h1>
      <p>Acharya Institute Of Technology</p>
      
    </div>
    </div>
      </div>
  
  );
};

export default Home;

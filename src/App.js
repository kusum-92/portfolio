import React from 'react';
import './index.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import CollegeDetails from './components/CollegeDetails';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <About />
        <Projects />
        <CollegeDetails />
      </main>
    </div>
  );
}

export default App;

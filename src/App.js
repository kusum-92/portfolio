// 

import React from "react";
// import Header from "./components/Header";
import About from "./components/About";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Achievement from "./components/Achievement";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";


// import Contact from "./components/Contact";

function App() {
  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f9f9f9",
      color: "#333",
      margin: 0,
      padding: 0,
      width: "100%",
      minHeight: "100vh",
    },
  };

  return (
    <div style={styles.container}>
      <main>
        <Home/>
        <About />
        <Skills />
        <Achievement />
        <Projects/>
        <Experience />
        <Contact/>
        {/* <Contact /> */}
      </main>
    </div>
  );
}

export default App;

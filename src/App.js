import React from 'react';
import Header from './Comp/Header';
import Homework from './Comp/Homework';
import About from './Comp/About';
import Agent from './Comp/Agent';
import Property from './Comp/Property';
import Contact from './Comp/Contact';

function App() {
  return (
    <div className="App">
      <Header/>
      <Homework/>
      <About/>
      <Agent/>
      <Property/>
      <Contact/>
    </div>
  );
}

export default App;

import './App.css';
import Header from './componets/Header';
import Project from './componets/Project'
import Footer from './componets/Footer';
import React, { useState } from 'react';

function App() {
  const [selected, setSelected] = useState('AboutMe');

  return (
    <div className="App">
      <Header setSelected={setSelected}/>
      <Project selected={selected}/>
      <Footer />
    </div>
  );
}

export default App;
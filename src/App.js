import React from 'react';
import './App.css';
import NavBar from './Components/NavBar'
import Schedule from './Components/Schedule'
import Page from './Components/Page'

function App() {
  return (
    <div>
      <NavBar/>
      
      <Schedule/>
      <Page/>
    </div>
  );
}

export default App;

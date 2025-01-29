import Alumno from './AlumnoJS.js'
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const response = async () => {
    fetch("alumnos.json")
  }

  useEffect(() => {
    response();
  },[])

  return (
    <div className="App">
      <div className='alumnos'>
      </div>
    </div>
  );
}

export default App;

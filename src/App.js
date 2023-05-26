import React from 'react';
import './App.css';
import Header from './components/Header/header';
import Side from './components/First-SideBar/Side';
import Side1 from './components/Second-Side/Side1';
import Side2 from './components/Third-Side/Side2';
import Mixed from './components/mixed';

function App() {
  return (
    <div className="App">

      <Side />
      <Side1 />
      <Mixed />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Header from './components/Header/header';
import Side from './components/First-SideBar/Side';
import Side1 from './components/Second-Side/Side1';

function App() {
  return (
    <div className="App">

      <Side />
      <Side1 />
      <Header />
    </div>
  );
}

export default App;

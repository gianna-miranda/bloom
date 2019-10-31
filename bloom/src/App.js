import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const getMentor = () =>{
    fetch('/test')
      .then(res => res.json())
      .then(res => console.table(res))
      .catch(err => console.log(err))
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={ () => getMentor() }>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a>
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

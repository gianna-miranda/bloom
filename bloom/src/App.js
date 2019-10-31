import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import "./App.css";

import Navbar from "./components/navbar.component"

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
      <Route path="/"  />
      <Route path="/"/>
      <Route path="/" />
      <Route path="/" />
      </div>
    </Router>
  );
}

export default App;

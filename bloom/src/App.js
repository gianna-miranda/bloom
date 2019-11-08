import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import "./main.scss";

import Navbar from "./Components/NavBar/Navbar"
import Home from "./pages/Home/Home"
import Mentor from "./pages/Mentor/Mentor"
import About from "./pages/AboutUs/AboutUs"


function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
      <Route path="/" exact component={Home} />
      <Route path="/Mentor" exact component={Mentor}/>
      <Route path="/About" exact component={About}/>
      {/* <Route path="/" />
      <Route path="/" /> */}
      </div>
    </Router>
  );
}

export default App;

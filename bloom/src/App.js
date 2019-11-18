import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import "./main.scss";

import Navbar from "./Components/NavBar/Navbar"
import Home from "./pages/Home/Home"
import Mentor from "./pages/Mentor/Mentor"
import Student from "./pages/Student/Student"
import About from "./pages/About/About"
import NotFound from "./pages/NotFound/NotFound"

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/mentors" exact component={Mentor}/>
        <Route path="/student" exact component={Student}/>
        <Route path="/about" exact component={About}/>
        <Route path="/404" component={NotFound}/>
        <Redirect to="/404" />
      </Switch>
      </div>
    </Router>
  );
}

export default App;

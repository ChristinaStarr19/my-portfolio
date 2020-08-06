import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Aboutme from "./components/Aboutme";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Aboutme} />
        </Switch>

        <p>Hello World</p>
      </div>
    </Router>
  );
}

export default App;

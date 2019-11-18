import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
      <div>
        <div className="wrapper">
          <Router>
            {/* <Navbar /> */}
            {/* <Switch>
              <Route exact path="/" component={Calendly} />
            
              <Route component={NoMatch} />
            </Switch> */}
          </Router>
        </div>
        <Footer />
      </div>
  );
}

export default App;

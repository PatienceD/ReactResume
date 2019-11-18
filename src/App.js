import React from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Body from "./components/Body"
import Footer from "./components/Footer";

function App() {
  return (
      <div>
        <div className="wrapper">
          <Router>
            <Navbar />
            <Body />
          </Router>
        </div>
        <Footer />
      </div>
  );
}

export default App;

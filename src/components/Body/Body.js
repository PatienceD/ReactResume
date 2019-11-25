import React from "react";
import "./Body.css";
import logo from "../Images/laptop.jpg";

function Body() {
  return (
    <div>
      <div className="row">
        <div className='frame'>
          <img src={logo} className="head-image" alt="Responsive image"></img>
          <div className="intro">
            <p>Patience Deaton</p>
            <hr></hr>
            <h1>Full Stack Developer</h1>
          </div>
        </div>
      </div>
      
    </div>
  );
}
export default Body;

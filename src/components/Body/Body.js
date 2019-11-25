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
      <div className="row" id="about-me">
        <div className="col-sm-8">
          <h1>Who Am I?</h1>
          <p>Velit eiusmod velit magna voluptate ex ad ullamco cillum amet. Amet quis in voluptate enim tempor cillum deserunt tempor fugiat cupidatat aliqua duis sint.
            Velit deserunt culpa laborum sint nostrud reprehenderit cillum do reprehenderit qui. Minim nulla ad labore sint commodo enim elit nisi pariatur tempor velit
            ad exercitation. Elit ut culpa nulla ea tempor ullamco cupidatat dolor veniam laboris fugiat pariatur nisi.</p>
          <p>Velit eiusmod velit magna voluptate ex ad ullamco cillum amet. Amet quis in voluptate enim tempor cillum deserunt tempor fugiat cupidatat aliqua duis sint.
          Velit deserunt culpa laborum sint nostrud reprehenderit cillum do reprehenderit qui. Minim nulla ad labore sint commodo enim elit nisi pariatur tempor velit
            ad exercitation. Elit ut culpa nulla ea tempor ullamco cupidatat dolor veniam laboris fugiat pariatur nisi.</p><br></br>
        </div>
        <div className="col-md-4">
          <img src="http://via.placeholder.com/350"></img>
        </div>
      </div>
      <div className="row" id="ucf">
        <div className="col-sm-3">
          <img src="http://via.placeholder.com/350"></img>
        </div>
        <div className="col-lg-8">
          <br></br>
          <h1>UCF Coding BootCamp</h1>
          <p>Velit eiusmod velit magna voluptate ex ad ullamco cillum amet. Amet quis in voluptate enim tempor cillum deserunt tempor fugiat cupidatat aliqua duis sint.
          Velit deserunt culpa laborum sint nostrud reprehenderit cillum do reprehenderit qui. Minim nulla ad labore sint commodo enim elit nisi pariatur tempor velit
            ad exercitation. Elit ut culpa nulla ea tempor ullamco cupidatat dolor veniam laboris fugiat pariatur nisi.</p>
            <p>Hours: 250</p>
            <p>Grade Average: A+</p>
            <p>Dates: February 2019 - August 2019</p><br></br>
        </div>
      </div>
      {/* <div className="row" id='know-me'>
        <h1>My Social Media</h1>
      </div> */}
    </div>
  );
}
export default Body;

import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="row">
                <div className="col-md-4">
                    <h3>Social Media</h3>
                    <hr></hr>
                    <ul id="social-media">
                        <li>Linkedin <i className="fab fa-linkedin"></i></li>
                        <li>GitHub <i className="fab fa-github-square"></i></li>
                        <li>FaceBook <i className="fab fa-facebook-square"></i></li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <h3>Get in Touch with Me</h3>
                    <hr></hr>
                    <ul id="contact-info">
                        <li>Orlando, FL</li>
                        <li>Email: patience.deaton2@outlook.com</li>
                        <li>(603)921-1506</li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <h3>Navigation</h3>
                    <hr></hr>
                    <ul id="footer-nav">
                        <li>About Me</li>
                        <li>Skills</li>
                        <li>Projects</li>
                        <li>Testimonials</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </div>

    );
}
export default Footer;
/* This component renders the footer */

import React from "react";

const Footer = () => {
  return(
    <footer>
        <div className="social-media-icons">
          <p>Let me know how you get on:</p>
            <ul className="social-ul">
							<li className="social-box" onClick={() => window.open('https://github.com/shaquillemayers')}>
									<div className="icon" href="">
											<i className="fa fa-github" aria-hidden="true"></i>
									</div>
                  <p id="icon-font">GitHub</p>
							</li>  
							<li className="social-box" onClick={() => window.open('https://www.linkedin.com/in/shaquillemayers')}>
									<div className="icon" href="">
											<i className="fa fa-linkedin" aria-hidden="true"></i> 
									</div>
                  <p id="icon-font">LinkedIn</p> 
							</li>
							<li className="social-box" onClick={() => window.open('https://twitter.com/ShaqCodes')}>
									<div className="icon" href="">
											<i className="fa fa-twitter" aria-hidden="true"></i>
									</div>
                  <p id="icon-font">Twitter</p>
							</li>  
							<li className="social-box" onClick={() => window.open('mailto:shaquillemayers@gmail.com')}>
									<div className="icon" href="">
											<i className="fa fa-envelope" aria-hidden="true"></i>
									</div>
                  <p id="icon-font">Email</p> 
							</li> 
            </ul> 
        </div>
    </footer>

  )
};

export default Footer;
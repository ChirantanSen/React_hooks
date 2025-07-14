import React from 'react'
import '../footer/footer_style.css';
import '../common_css/common.css'



function Footer() {
  return (
    <>
      <section className="footer space">
      <div className="container">
        <div className="row foot-row">
          <div className="col-25 foot-col">
            <div className="icon">
              <a href="index.html" className="foot-logo">BizLand<span>.</span></a>
            </div>
            <div className="foot-text">
              <h3>A108 Adam Street
                New York, NY 535022
                United States</h3>
                <p><span>Phone</span>:+1 5589 55488 55</p>
                <p><span>Email</span>: info@example.com</p>
            </div>
          </div>
          <div className="col-25 foot-col">
            <div className="links-text">
              <h3>Useful Links</h3>
              <ul className="serv-web">
                <li><a href="">Home</a></li>
                <li><a href="">About</a> Us</li>
                <li><a href="">Service</a></li>
                <li><a href="">Terms Of Service</a></li>
                <li><a href="">Privacy Policy</a></li>
              </ul>
            </div>
           
          </div>
          <div className="col-25 foot-col">
            <div className="links-text">
              <h3>Our Services</h3>
              <ul className="serv-web">
                <li><a href="">Web Design</a></li>
                <li><a href="">Web Development</a></li>
                <li><a href="">Product Management</a></li>
                <li><a href="">Marketing</a></li>
                <li><a href="">Graphic Design</a></li>
              </ul>
            </div>
          </div>
          <div className="col-25 foot-col">
                <h3>Our Social Networks</h3>
                <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>

                <div className="footer-icon-list">
                      <div className="ft-icon">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </div>
                      <div className="ft-icon">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </div>
                      <div className="ft-icon">
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                      </div>
                      <div className="ft-icon">
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                      </div>
                </div>
         
          </div>

        </div>
      </div>
    </section>
    </>
  )
}

export default Footer

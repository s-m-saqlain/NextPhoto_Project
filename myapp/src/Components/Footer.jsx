import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer style={{ marginTop: "95px" }}>
        <div className="row">
          <div className="col-md-2">
            <img
              src="assest/img/Group.png"
              className="img-fluid"
              alt="ResponsiveImage"
              style={{ maxWidth: 150 }}
            />
            <div className="row">
              <div className="col-md-8 col-8">
                <p style={{ marginTop: "12px" }}>Return to Top</p>
              </div>
              <div
                className="col-md-4 col-4"
                style={{ marginTop: "10px", marginLeft: "-28px" }}
              >
                <img src="assest/img/arrow.png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-1">
            <h4 style={{ color: "white" }}>Social</h4><br />
            <img src="assest/img/music.png" alt="" />
            <span style={{ color: "white", marginLeft: "8px"}}>Tiktok</span>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-2">
          <h4 style={{ color: "white" }}>Quick links</h4><br />
          <Link to='/' style={{textDecoration:'none'}}><p style={{ color: "white"}}>Home</p></Link>
          <p style={{ color: "white" }}>Reviews</p>
          <Link to='/work' style={{textDecoration:'none'}}><p style={{ color: "white" }}>How It Works</p></Link>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-2">
          <h4 style={{ color: "white" }}>Legal</h4><br />
          <p style={{ color: "white" }}>Terms & Conditions</p>
          <p style={{ color: "white" }}>Privacy Policy</p>
          </div>
          <div className="col-md-1"></div>
        </div>
        <hr style={{color:'white'}}/>
        <p style={{color:'white', textAlign:'center'}}>© 2023 THENEXTPHOTO.COM All rights reserved.</p>
        <br />
      </footer>
    </>
  );
};

export default Footer;

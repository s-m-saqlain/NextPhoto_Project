import React from "react";

const Description = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <h1 style={{ color: "white" }}>Why choose us?</h1>
          <p style={{ fontSize: 11 }} className="text-light">
            Craft top-tier professional portraits to suit all your needs, from a{" "}
            <br /> polished business headshot to compelling content marketing{" "}
            <br /> and even impressive offline collateral.
          </p>
          <br />
          <div className="row">
            <div className="col-md-1 col-1">
              <img src="assest/img/camera.png" style={{ width: 20 }} alt="" />
            </div>
            <div className="col-md-11 col-11">
              <h5 className="text-light">No more photoshoots</h5>
              <p style={{ fontSize: 11 }} className="text-light">
                Save an expensive photographers, Explore our <br />
                hyper-realistic AI photos and elevate your visuals.
              </p>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-1 col-1">
              <img
                src="assest/img/fileemail.png"
                style={{ width: 50, height: 50, marginLeft: "-12px" }}
                alt=""
              />
            </div>
            <div className="col-md-11 col-11">
              <h5 className="text-light">Download your photo's</h5>
              <p style={{ fontSize: 11 }} className="text-light">
                Handpick and download favorites from your private <br />
                album.
              </p>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-1 col-1">
              <img src="assest/img/Vector.png" style={{ width: 20 }} alt="" />
            </div>
            <div className="col-md-11 col-11">
              <h5 className="text-light">The best AI results in seconds</h5>
              <p style={{ fontSize: 11 }} className="text-light">
                Custom AI model created just for you based on your
                <br /> uploaded images.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <br />
          <br />
          <br />
          <img
            src="assest/img/human.png"
            style={{ height: "85%" }}
            className="img-fluid"
            alt="Image1"
          />
        </div>
      </div>
      <br />
      <br />
    </>
  );
};

export default Description;

import React from "react";

const Testimonial = () => {
  return (
    <>
      <p style={{ color: "white", textAlign: "center" }}>As seen on</p>
      <br />
      <div className="row">
        <div className="col-md-2" />
        <div className="col-md-2 col-3">
          <img
            src="assest/img/instagram.png"
            className="img-fluid"
            alt="Instagram"
            style={{ width: 100 }}
          />
        </div>
        <div className="col-md-2 col-3">
          <img
            src="assest/img/tiktok.png"
            className="img-fluid"
            alt="TikTok"
            style={{ width: 100 }}
          />
        </div>
        <div className="col-md-2 col-3">
          <img
            src="assest/img/linkedin.png"
            className="img-fluid"
            alt="LinkedIn"
            style={{ width: 100 }}
          />
        </div>
        <div className="col-md-2 col-3">
          <img
            src="assest/img/tinder.png"
            className="img-fluid"
            alt="Tinder"
            style={{ width: 100 }}
          />
        </div>
        <div className="col-md-3" />
      </div>
      <div className="row">
        <div className="col-md-6">
          <br />
          <br />
          <br />
          <img
            src="assest/img/img.png"
            style={{ height: "85%" }}
            className="img-fluid"
            alt="Image3"
          />
        </div>
        <div className="col-md-6">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <h1 style={{ color: "white" }}>
            Upgrade your
            <br /> Profile with 100 AI <br /> headshots for $15
          </h1>
          <p style={{ fontSize: 11 }} className="text-light">
            An all-inclusive solution for elevating your professional LinkedIn{" "}
            <br /> profiles, captivating visuals on your personal social media{" "}
            <br />
            accounts, and everthing in between!
          </p>
          {/* <button type="button" class="btn btncss12 btn-lg p-3 w-50">CREATE YOURS NOW</button> */}
          <button
            type="button"
            className="btn btncss12 btn-lg p-3 p-lg-3 w-80 w-lg-50"
          >
            CREATE YOURS NOW
          </button>
        </div>
      </div>
    </>
  );
};

export default Testimonial;

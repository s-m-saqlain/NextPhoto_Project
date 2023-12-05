import React from "react";

const Banner = () => {
  return (
    <>
      <div
        className="baneer pt-3"
        style={{ borderRadius: "25px", marginTop: "100px" }}
      >
        <h1 className="mt-5" style={{ color: "white", textAlign: "center" }}>
          Elevate your profile with 100 AI <br /> headshots for just $15
        </h1>
        <p style={{ fontSize: 11, color: "white", textAlign: "center" }}>
          Level Up Your Profile with AI Magic! Reinvent Yourself and Shine with
          AI-Powered Headshots!
        </p>
        <br />
        <div className="row">
          <div className="col-md-5"></div>
          <div className="col-md-2">
            <button
              type="button"
              class="btn bg-white btn-lg p-2 w-100"
              style={{ color: "red", fontSize: "18px" }}
            >
              <b>LEARN MORE</b>
            </button>
          </div>
          <div className="col-md-5"></div>
        </div>
        <img
          src="assest/img/Mask group.png"
          alt=""
          style={{ width: "100%", marginTop: "0" }}
        />
      </div>
    </>
  );
};

export default Banner;

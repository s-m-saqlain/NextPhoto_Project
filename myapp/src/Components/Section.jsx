import React from "react";

const Section = () => {
  return (
    <>
      <div className="row">
        {/* <div className="col-md-4">
          <br />
          <br />
          <br />
          <br />
          <br />
          <div>
            <div
              style={{
                borderRadius: "1000px",
                opacity: 0.24,
                background:
                  "var(--1, linear-gradient(98deg, #FC4A1A 0%, #F7B733 100%))",
                filter: "blur(120px)",
                width: "485px",
                height: "485px",
              }}
            ></div>
            <div style={{ position: "absolute", top: "160px"}}>
              <h1 style={{ color: "white" }}>
                THE BEST
                <br /> AI-POWERED <br /> HEADSHOT FOR <br /> EVERYONE
              </h1>
              <p style={{ color: "white" }}>
                Click, create, and delight in the magic
              </p>

              <button
                type="button"
                className="btn btncss12 btn-lg p-3 p-lg-3 w-80 w-lg-50"
              >
                CREATE YOURS NOW
              </button>
            </div>
          </div>
        </div> */}
        <div className="col-md-4">
          <br />
          <br />
          <br />
          <br />
          <br />
          <div style={{ position: "relative" }}>
            <div
              style={{
                borderRadius: "50%", // Circular shape
                opacity: 0.5,
                background:
                  "var(--1, linear-gradient(98deg, #FC4A1A 0%, #F7B733 100%))",
                filter: "blur(120px)",
                width: "100%", // Full width
                paddingTop: "100%", // 1:1 aspect ratio (width:height)
                position: "relative",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                top: "60%", // Adjust vertical position
                transform: "translateY(-50%)", // Center vertically
                width: "90%", // Adjust width for smaller screens
                left: "10%", // Center horizontally
                // transform: "translateX(-50%)", // Center horizontally
              }}
            >
              <h1 style={{ color: "white" }}>
                THE BEST
                <br /> AI-POWERED <br /> HEADSHOT FOR <br /> EVERYONE
              </h1>
              <p style={{ color: "white" }}>
                Click, create, and delight in the magic
              </p>
              <button
                type="button"
                className="btn btncss12 btn-lg p-3 p-lg-3 w-100" // Full width on smaller screens
              >
                CREATE YOURS NOW
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-1" />
        <div className="col-md-7 mt-md-5">
          <br />
          <br />
          <div style={{ position: "relative" }}>
            <div
              style={{
                borderRadius: "50%", // Circular shape
                opacity: 0.24,
                background: "#009FE3",
                filter: "blur(120px)",
                width: "100%", // Full width
                paddingTop: "100%", // 1:1 aspect ratio (width:height)
                position: "relative",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                top: "45%", // Adjust vertical position
                transform: "translateY(-50%)", // Center vertically
                width: "90%", // Adjust width for smaller screens
                left: "10%", // Center horizontally
                // transform: "translateX(-50%)", // Center horizontally
              }}
            >
              <img
                src="assest/img/Imgs.png"
                style={{ height: "95%" }}
                className="img-fluid"
                alt="Image2"
              />
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Section;

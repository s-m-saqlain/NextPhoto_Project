import React from "react";

const Sectioncards = () => {
  return (
    <>
      
      <h1 style={{ color: "white", textAlign: "center" }}>How it works</h1>
      <p style={{ fontSize: 11, textAlign: "center" }} className="text-light">
        Capture professional hyper-realistic portrait photos, ideal for your
        LinkedIn or other socials. <br /> marketting or simply for private use.
      </p>
      <div className="row flex-md-nowrap" style={{ gap: 15 }}>
        <div
          className="col-md-4"
          style={{
            borderTop: "1px solid yellow",
            borderRight: "1px solid lightgreen",
            borderBottom: "1px solid lightgreen",
            borderLeft: "1px solid red",
            borderRadius: 25,
            paddingTop: 12,
          }}
        >
          <img src="assest/img/TV3.png" style={{ width: "100%" }} alt=""/>
          <h5
            className="text-light"
            style={{ textAlign: "center", marginTop: 23 }}
          >
            Upload your selfies
          </h5>
          <p
            style={{ fontSize: 11, textAlign: "center" }}
            className="text-light"
          >
            Upload at least 20 images of your <br /> face.
          </p>
        </div>
        <div
          className="col-md-4"
          style={{
            borderTop: "1px solid yellow",
            borderRight: "1px solid lightgreen",
            borderBottom: "1px solid lightgreen",
            borderLeft: "1px solid red",
            borderRadius: 25,
            paddingTop: 12,
          }}
        >
          <img src="assest/img/TV1.png" style={{ width: "100%" }} alt=""/>
          <h5
            className="text-light"
            style={{ textAlign: "center", marginTop: 23 }}
          >
            Let AI works its magic
          </h5>
          <p
            style={{ fontSize: 11, textAlign: "center" }}
            className="text-light"
          >
            We create custom AI headshots within 5 <br /> minutes.
          </p>
        </div>
        <div
          className="col-md-4"
          style={{
            borderTop: "1px solid yellow",
            borderRight: "1px solid lightgreen",
            borderBottom: "1px solid lightgreen",
            borderLeft: "1px solid red",
            borderRadius: 25,
            paddingTop: 12,
          }}
        >
          <img src="assest/img/TV2.png" style={{ width: "100%" }} alt=""/>
          <h5
            className="text-light"
            style={{ textAlign: "center", marginTop: 23 }}
          >
            Download AI headshots
          </h5>
          <p
            style={{ fontSize: 11, textAlign: "center" }}
            className="text-light"
          >
            Review and download your favourite <br /> headshots from a
            collection of 100+.
          </p>
        </div>
      </div>
    </>
  );
};

export default Sectioncards;

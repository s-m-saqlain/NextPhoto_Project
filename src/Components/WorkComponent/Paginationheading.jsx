import React from "react";

const Paginationheading = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <h1 className="mt-5" style={{ color: "white", textAlign: "center" }}>
        Latest articles about <br /> headshot photography
      </h1>
      <p style={{ color: "white", textAlign: "center", fontSize: "11px" }}>
        Insights, ideas, and inspiration for headshot photography.
      </p>
      <div className="row">
        <div className="col-md-5"></div>
        <div className="col-md-2">
          <button
            type="button"
            className="btn btncss12 btn-lg p-2 p-lg-2 w-100 w-lg-100 w-md-100 w-sm-100"
            style={{ fontSize: "15px" }}
          >
            CREATE YOURS NOW
          </button>
        </div>
        <div className="col-md-5"></div>
      </div>
    </>
  );
};

export default Paginationheading;

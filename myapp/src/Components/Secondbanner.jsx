import React from 'react'

const Secondbanner = () => {
  return (
    <>
      <div
        className="baneer pt-3"
        style={{ borderRadius: "25px", marginTop: "100px",paddingBottom:'85px' }}
      >
        <h1 className="mt-5" style={{ color: "white", textAlign: "center" }}>
        Get your headshots today!
        </h1>
        <p style={{ fontSize: 11, color: "white", textAlign: "center" }}>
        Your professional corporate business headshots are just a few clicks away. Don't miss out on <br /> the opportunity to showcase your team's best image - get your AI generated headshots now!
        </p>
        <br />
        <div className="row">
          <div className="col-md-5"></div>
          <div className="col-md-2">
            <button
              type="button"
              class="btn bg-white btn-lg p-3 w-100"
              style={{ color: "orange", fontSize: "13px" }}
            >
              <b>CREATE YOURS NOW</b>
            </button>
          </div>
          <div className="col-md-5"></div>
        </div>
      </div>
    </>
  )
}

export default Secondbanner

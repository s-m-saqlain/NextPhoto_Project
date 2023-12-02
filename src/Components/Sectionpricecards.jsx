import React from "react";

const Sectionpricecards = () => {
  return (
    <>
      <h1 className="mt-5" style={{ color: "white", textAlign:'center' }}>
      High-quality headshots, no <br /> premium price.
      </h1>
      <p style={{fontSize: 11, color:'white', textAlign:'center'}}>Upgrade your LinkedIn presence, supercharge job applications, or elevate your company's <br /> website with our tailored headshot packages.</p>
      <div className="row flex-md-nowrap" style={{ gap: 15 }}>
        <div
          className="col-md-4"
          style={{
            border:'0.1rem solid black',
            borderRadius: 25,
            paddingTop: 12,
          }}
        >
          {/* <img src="assest/img/TV3.png" style={{ width: "100%" }} alt=""/> */}
          <p
            className="text-light"
            style={{ marginTop: 3, fontSize:'14px' }}
          >
            STARTER
          </p>
          <h3
            // style={{ fontSize: 11}}
            className="text-light"
          >
            €15
          </h3>
          <p style={{fontSize: 11, color:'white'}}>All features are included for the perfect <br /> headshot</p>
          <img src="assest/img/icon.png" style={{width:'15px'}} alt=""/><span style={{color:'white', fontSize:'11px', marginLeft:'10px'}}>100 ultra-realistic headshots</span><br />
          <img src="assest/img/icon.png" style={{width:'15px'}} alt=""/><span style={{color:'white', fontSize:'11px', marginLeft:'10px'}}>Unlimited styles</span><br />
          <img src="assest/img/icon.png" style={{width:'15px'}} alt=""/><span style={{color:'white', fontSize:'11px', marginLeft:'10px'}}>512x640 px</span><br />
          <img src="assest/img/icon.png" style={{width:'15px'}} alt=""/><span style={{color:'white', fontSize:'11px', marginLeft:'10px'}}>3 sec. turnaround time</span><br />
          <img src="assest/img/icon.png" style={{width:'15px'}} alt=""/><span style={{color:'white', fontSize:'11px', marginLeft:'10px'}}>Non-refundable</span><br />
          <img src="assest/img/cross.png" style={{width:'15px'}} alt=""/><span style={{color:'white', fontSize:'11px', marginLeft:'10px'}}>No human edits</span>
          <button
              type="button"
              style={{color:'white', borderRadius:'10px',border:'1px solid red'}}
              className="btn w-100 mt-2"
            >
              Create Yours Now
            </button>
        </div>
        <div
          className="col-md-4"
          style={{
            border:'3px solid yellow',
            borderRadius: 25,
            paddingTop: 12,
          }}
        >
          {/* <img src="assest/img/TV3.png" style={{ width: "100%" }} alt=""/> */}
          <p
            className="text-light"
            style={{ marginTop: 3, fontSize:'14px' }}
          >
            STARTER
          </p>
          <h3
            // style={{ fontSize: 11}}
            className="text-light"
          >
            €15
          </h3>
          <p style={{fontSize: 11, color:'white'}}>All features are included for the perfect <br /> headshot</p>
          <img src="assest/img/icon.png" style={{width:'15px'}} alt=""/><span style={{color:'white', fontSize:'11px', marginLeft:'10px'}}>200 ultra-realistic headshots</span><br />
          <img src="assest/img/icon.png" style={{width:'15px'}} alt=""/><span style={{color:'white', fontSize:'11px', marginLeft:'10px'}}>Unlimited styles</span><br />
          <img src="assest/img/icon.png" style={{width:'15px'}} alt=""/><span style={{color:'white', fontSize:'11px', marginLeft:'10px'}}>640x640 px</span><br />
          <img src="assest/img/icon.png" style={{width:'15px'}} alt=""/><span style={{color:'white', fontSize:'11px', marginLeft:'10px'}}>3 sec. turnaround time</span><br />
          <img src="assest/img/icon.png" style={{width:'15px'}} alt=""/><span style={{color:'white', fontSize:'11px', marginLeft:'10px'}}>Non-refundable</span><br />
          <img src="assest/img/cross.png" style={{width:'15px'}} alt=""/><span style={{color:'white', fontSize:'11px', marginLeft:'10px'}}>No human edits</span>
          <button
              type="button"
              style={{color:'white', borderRadius:'10px',border:'1px solid red'}}
              className="btn btncss12 w-100 mt-2"
            >
              Create Yours Now
            </button>
        </div>
        <div
          className="col-md-4"
          style={{
            border:'0.1rem solid black',
            borderRadius: 25,
            paddingTop: 12,
          }}
        >
          {/* <img src="assest/img/TV3.png" style={{ width: "100%" }} alt=""/> */}
          <p
            className="text-light"
            style={{ marginTop: 3, fontSize:'14px' }}
          >
            STARTER
          </p>
          <h3
            // style={{ fontSize: 11}}
            className="text-light"
          >
            €15
          </h3>
          <p style={{fontSize: 11, color:'white'}}>All features are included for the perfect <br /> headshot</p>
          <img src="assest/img/icon.png" style={{width:'15px'}} alt=""/><span style={{color:'white', fontSize:'11px', marginLeft:'10px'}}>300 ultra-realistic headshots</span><br />
          <img src="assest/img/icon.png" style={{width:'15px'}} alt=""/><span style={{color:'white', fontSize:'11px', marginLeft:'10px'}}>Unlimited styles</span><br />
          <img src="assest/img/icon.png" style={{width:'15px'}} alt=""/><span style={{color:'white', fontSize:'11px', marginLeft:'10px'}}>640x640 px</span><br />
          <img src="assest/img/icon.png" style={{width:'15px'}} alt=""/><span style={{color:'white', fontSize:'11px', marginLeft:'10px'}}>3 sec. turnaround time</span><br />
          <img src="assest/img/icon.png" style={{width:'15px'}} alt=""/><span style={{color:'white', fontSize:'11px', marginLeft:'10px'}}>Non-refundable</span><br />
          <img src="assest/img/icon.png" style={{width:'15px'}} alt=""/><span style={{color:'white', fontSize:'11px', marginLeft:'10px'}}>2 human edits</span>
          <button
              type="button"
              style={{color:'white', borderRadius:'10px',border:'1px solid red'}}
              className="btn w-100 mt-2"
            >
              Create Yours Now
            </button>
        </div>
      </div>
    </>
  );
};

export default Sectionpricecards;

import React from 'react'
import Sectionpricecards from '../Sectionpricecards'
import Adminnavbar from './Adminnavbar'

const Package = () => {
  return (
    <>
    <Adminnavbar /><br /><br /><br /><br /><br />
    <div className="row">
          <div className="col-md-2">
            <h6 style={{ color: "white" }}>MY PHOTOS</h6>
          </div>
          <div className="col-md-7"></div>
          <div className="col-md-3">
            <img src="assest/img/notification.png" alt="" />
            <button
              type="button"
              class="btn btn-sm"
              style={{ color: "white", backgroundColor: "black" }}
            >
              Product Update
            </button>
            <button
              type="button"
              class="btn btn-sm"
              style={{ color: "white", backgroundColor: "red" }}
            >
              Product Update
            </button>
          </div>
        </div>
    <Sectionpricecards />
    </>
  )
}

export default Package

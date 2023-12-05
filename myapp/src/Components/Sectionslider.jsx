import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../Styles/styles.css";

// import required modules
import { Pagination } from "swiper/modules";

const Sectionslider = () => {
  return (
    <>
      <div className="container" style={{ marginTop: "80px" }}>
        <div className="row">
          <div className="col-md-9">
            <h1 style={{ color: "white" }}>
              Review and download your favourite headshots from a collection of
              100+
            </h1>
            <p style={{ color: "white" }}>
              Explore the impact of new headshots an people's lives.
            </p>
          </div>
        </div>
      </div>
      <br />

      <Swiper
      slidesPerView={4}
      spaceBetween={10}
      pagination={{ clickable: true }}
      className="mySwiper mt-5"
    >
      {/* ... Swiper slides go here ... */}

      {/* Add media queries for responsiveness */}
      <style jsx>{`
        @media (min-width: 576px) {
          .mySwiper {
            slidesPerView: 2;
          }
        }

        @media (min-width: 768px) {
          .mySwiper {
            slidesPerView: 3;
          }
        }

        @media (min-width: 992px) {
          .mySwiper {
            slidesPerView: 4;
          }
        }

        @media (min-width: 1200px) {
          .mySwiper {
            slidesPerView: 5;
          }
        }
      `}</style>
    
          {/* Add media queries for responsiveness */}
      
        <SwiperSlide>
          <div
            style={{
              background: "rgba(255, 255, 255, 0.12)",
              padding: "12px",
              width: "100%",
              borderRadius: 10,
              paddingTop: 12,
            }}
          >
            {/* <img src="assest/img/TV3.png" style={{ width: "50%" }} alt="" /> */}
            <p
              className="text-light"
              style={{ marginTop: 3, fontSize: "11px" }}
            >
              <b>Great plate Form</b>
            </p>
            <div className="row">
              <div className="col-md-2">
                <img
                  src="assest/img/comma.png"
                  alt=""
                  style={{ width: "33px", height: "33px" }}
                />
              </div>
              <div className="col-md-10">
                <span
                  style={{ fontSize: 11, textAlign: "center" }}
                  className="text-light"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam
                </span>
                <hr style={{ color: "white" }} />
                <img
                  src="assest/img/profile.png"
                  alt=""
                  style={{ width: "100px", height: "33px" }}
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              background: "rgba(255, 255, 255, 0.12)",
              padding: "12px",
              width: "100%",
              borderRadius: 10,
              paddingTop: 12,
            }}
          >
            {/* <img src="assest/img/TV3.png" style={{ width: "50%" }} alt="" /> */}
            <p
              className="text-light"
              style={{ marginTop: 3, fontSize: "11px" }}
            >
              <b>Great plate Form</b>
            </p>
            <div className="row">
              <div className="col-md-2">
                <img
                  src="assest/img/comma.png"
                  alt=""
                  style={{ width: "33px", height: "33px" }}
                />
              </div>
              <div className="col-md-10">
                <span
                  style={{ fontSize: 11, textAlign: "center" }}
                  className="text-light"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam
                </span>
                <hr style={{ color: "white" }} />
                <img
                  src="assest/img/profile.png"
                  alt=""
                  style={{ width: "100px", height: "33px" }}
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              background: "rgba(255, 255, 255, 0.12)",
              padding: "12px",
              width: "100%",
              borderRadius: 10,
              paddingTop: 12,
            }}
          >
            {/* <img src="assest/img/TV3.png" style={{ width: "50%" }} alt="" /> */}
            <p
              className="text-light"
              style={{ marginTop: 3, fontSize: "11px" }}
            >
              <b>Great plate Form</b>
            </p>
            <div className="row">
              <div className="col-md-2">
                <img
                  src="assest/img/comma.png"
                  alt=""
                  style={{ width: "33px", height: "33px" }}
                />
              </div>
              <div className="col-md-10">
                <span
                  style={{ fontSize: 11, textAlign: "center" }}
                  className="text-light"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam
                </span>
                <hr style={{ color: "white" }} />
                <img
                  src="assest/img/profile.png"
                  alt=""
                  style={{ width: "100px", height: "33px" }}
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              background: "rgba(255, 255, 255, 0.12)",
              padding: "12px",
              width: "100%",
              borderRadius: 10,
              paddingTop: 12,
            }}
          >
            {/* <img src="assest/img/TV3.png" style={{ width: "50%" }} alt="" /> */}
            <p
              className="text-light"
              style={{ marginTop: 3, fontSize: "11px" }}
            >
              <b>Great plate Form</b>
            </p>
            <div className="row">
              <div className="col-md-2">
                <img
                  src="assest/img/comma.png"
                  alt=""
                  style={{ width: "33px", height: "33px" }}
                />
              </div>
              <div className="col-md-10">
                <span
                  style={{ fontSize: 11, textAlign: "center" }}
                  className="text-light"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam
                </span>
                <hr style={{ color: "white" }} />
                <img
                  src="assest/img/profile.png"
                  alt=""
                  style={{ width: "100px", height: "33px" }}
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              background: "rgba(255, 255, 255, 0.12)",
              padding: "12px",
              width: "100%",
              borderRadius: 10,
              paddingTop: 12,
            }}
          >
            {/* <img src="assest/img/TV3.png" style={{ width: "50%" }} alt="" /> */}
            <p
              className="text-light"
              style={{ marginTop: 3, fontSize: "11px" }}
            >
              <b>Great plate Form</b>
            </p>
            <div className="row">
              <div className="col-md-2">
                <img
                  src="assest/img/comma.png"
                  alt=""
                  style={{ width: "33px", height: "33px" }}
                />
              </div>
              <div className="col-md-10">
                <span
                  style={{ fontSize: 11, textAlign: "center" }}
                  className="text-light"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam
                </span>
                <hr style={{ color: "white" }} />
                <img
                  src="assest/img/profile.png"
                  alt=""
                  style={{ width: "100px", height: "33px" }}
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              background: "rgba(255, 255, 255, 0.12)",
              padding: "12px",
              width: "100%",
              borderRadius: 10,
              paddingTop: 12,
            }}
          >
            {/* <img src="assest/img/TV3.png" style={{ width: "50%" }} alt="" /> */}
            <p
              className="text-light"
              style={{ marginTop: 3, fontSize: "11px" }}
            >
              <b>Great plate Form</b>
            </p>
            <div className="row">
              <div className="col-md-2">
                <img
                  src="assest/img/comma.png"
                  alt=""
                  style={{ width: "33px", height: "33px" }}
                />
              </div>
              <div className="col-md-10">
                <span
                  style={{ fontSize: 11, textAlign: "center" }}
                  className="text-light"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam
                </span>
                <hr style={{ color: "white" }} />
                <img
                  src="assest/img/profile.png"
                  alt=""
                  style={{ width: "100px", height: "33px" }}
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              background: "rgba(255, 255, 255, 0.12)",
              padding: "12px",
              width: "100%",
              borderRadius: 10,
              paddingTop: 12,
            }}
          >
            {/* <img src="assest/img/TV3.png" style={{ width: "50%" }} alt="" /> */}
            <p
              className="text-light"
              style={{ marginTop: 3, fontSize: "11px" }}
            >
              <b>Great plate Form</b>
            </p>
            <div className="row">
              <div className="col-md-2">
                <img
                  src="assest/img/comma.png"
                  alt=""
                  style={{ width: "33px", height: "33px" }}
                />
              </div>
              <div className="col-md-10">
                <span
                  style={{ fontSize: 11, textAlign: "center" }}
                  className="text-light"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam
                </span>
                <hr style={{ color: "white" }} />
                <img
                  src="assest/img/profile.png"
                  alt=""
                  style={{ width: "100px", height: "33px" }}
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        
      </Swiper>
    </>
  );
};

export default Sectionslider;

import React from "react";
import Header from "../Components/Header";
import Secondbanner from "../Components/Secondbanner";
import Footer from "../Components/Footer";
import Paginationpage from "../Components/WorkComponent/Paginationpage";
import Paginationheading from "../Components/WorkComponent/Paginationheading";

const Works = () => {
  return (
    <>
      <div className="container">
        <Header />
        <Paginationheading />
        <Paginationpage />
        <Secondbanner />
        <Footer />
      </div>
    </>
  );
};

export default Works;

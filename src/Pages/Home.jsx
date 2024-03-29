import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "../Components/Header";
import Section from "../Components/Section";
import Testimonial from "../Components/Testimonial";
import Description from "../Components/Description";
import Sectioncards from "../Components/Sectioncards";
import Sectionslider from "../Components/Sectionslider";
import Sectionpricecards from "../Components/Sectionpricecards";
import Banner from "../Components/Banner";
import Secondbanner from "../Components/Secondbanner";
import Footer from "../Components/Footer";
import FAQ from "../Components/FAQ";

const Home = () => {
  return (
    <>
      <div className="container">
        <Header />
        <Section />
        <Testimonial />
        <Description />
        <Sectioncards />
      </div>
      <Sectionslider />

      <div className="container">
        <Sectionpricecards />
        <Banner />
        <FAQ />
        <Secondbanner />
        <Footer />
      </div>
    </>
  );
};

export default Home;

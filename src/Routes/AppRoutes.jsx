import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "../Layouts/Layout"

import Hero from "../Components/Hero/Hero";
import Services from "../Components/Services/Services";
import Portfolio from "../Components/Portfolio/Portfolio";
import Contact from "../Components/Contact/Contact";

const Approutes = () => {
  return (
    
      <Routes>

        <Route element={<Layout />}>

          <Route path="/" element={<Hero />} />

          <Route path="/services" element={<Services />} />

          <Route path="/portfolio" element={<Portfolio />} />

          <Route path="/contact" element={<Contact />} />

        </Route>

      </Routes>
    
  );
};

export default Approutes;
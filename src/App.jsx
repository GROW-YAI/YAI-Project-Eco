import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./components/About";
import InnovatorProfile from "./components/InnovatorProfile";
import Products from "./components/Products";
import TestimonialsSection from "./components/TestimonialsSection";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/innovator-profile" element={<InnovatorProfile />} />
        <Route path="/products" element={<Products />} />
        <Route path="/testimonials" element={<TestimonialsSection />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;

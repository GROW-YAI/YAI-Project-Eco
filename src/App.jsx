import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './components/About';
import InnovatorProfile from './components/InnovatorProfile';
import Products from './components/Products';
import Contact from './components/Contact';
import TestimonialsSection from './components/TestimonialsSection';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="innovator-profile" element={<InnovatorProfile />} />
        <Route path="products" element={<Products />} />
        <Route path="testimonials" element={<TestimonialsSection />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
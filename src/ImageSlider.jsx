import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import slide1 from "./images/slide1.jpeg";
import slide2 from "./images/slide2.jpeg";
import slide3 from "./images/slide3.jpeg";
// import slide4 from "../images/tote-bags-clothes.jpg";

const slides = [
  {
    url: slide2,
    // url: "https://res.cloudinary.com/dmxzxo1fk/image/upload/v1740249809/i_want_an_image_of_a_plastic_waste_dump_1_mrqb1b.jpg",
    title: "Innovation Starts Here",
    subtitle:
      "Reducing waste, creating impact—one repurposed product at a time",
  },
  {
    url:"https://res.cloudinary.com/dmxzxo1fk/image/upload/v1740248372/ik3_ngq9i8.png",
    // url: "https://res.cloudinary.com/dmxzxo1fk/image/upload/v1740250694/i_want_single_images_of_backpacks_made_from_plastic_waste_in_a_ghana_k1vqou.jpg",
    title: "Waste into Worth",
    subtitle:
      "Turning local waste into high-quality, sustainable products for everyday use",
  },
  {
    url: slide1,
    // url: "https://res.cloudinary.com/dmxzxo1fk/image/upload/v1740249875/i_want_an_image_of_a_pile_of_colorful_old_worn_out_clothes_1_l6xwx4.jpg",
    title: "Redefining Waste",
    subtitle:
      "Repurposing old worn-out garments into essentials that make a difference",
  },
  {
    url: "https://res.cloudinary.com/dmxzxo1fk/image/upload/v1740250814/i_want_single_images_of_tote_bags_made_from_worn_out_clothes_2_gme4zf.jpg",
    title: "Sustainable Fashion",
    subtitle: "Creating eco-friendly solutions for a better tomorrow",
  },
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full h-screen">
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative w-full h-full"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slides[currentIndex].url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center text-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold font-['Playfair_Display'] text-white mb-4"
              >
                {slides[currentIndex].title}
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl text-white font-['Playfair_Display']"
              >
                {slides[currentIndex].subtitle}
              </motion.p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentIndex
                ? "bg-white"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

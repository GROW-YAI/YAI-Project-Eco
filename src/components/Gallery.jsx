import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dmxzxo1fk/image/upload/v1742485999/UNDP_1_of_1_-12_rwwv4e.jpg",
    title: "Sustainable Bed Sheets",
    description:
      "Eco-friendly bed sheets crafted from recycled African fabrics",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dmxzxo1fk/image/upload/v1742486014/UNDP_1_of_1_-8_u5lu8l.jpg",
    title: "Raw Materials",
    description: "Collection of pre-loved garments ready for transformation",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dmxzxo1fk/image/upload/v1742486129/UNDP_1_of_1_-4_mh4yrt.jpg",
    title: "Innovation in Action",
    description: "Our team working on sustainable solutions",
  },

  {
    id: 4,
    src: "https://res.cloudinary.com/dmxzxo1fk/image/upload/v1742486040/UNDP_1_of_1_-11_rtz0st.jpg",
    title: "Quality Craftsmanship",
    description: "Attention to detail in every product",
  },
  {
    id: 5,
    src: "https://res.cloudinary.com/dmxzxo1fk/image/upload/v1742486056/UNDP_1_of_1_-6_c2e96b.jpg",
    title: "Eco-Friendly Products",
    description: "Our commitment to sustainability",
  },
  {
    id: 6,
    src: "https://res.cloudinary.com/dmxzxo1fk/image/upload/v1742486074/UNDP_1_of_1_-9_gmqois.jpg",
    title: "Modern Design",
    description: "Contemporary aesthetics meet sustainability",
  },
  {
    id: 7,
    src: "https://res.cloudinary.com/dmxzxo1fk/image/upload/v1742486093/UNDP_1_of_1_-5_lin8fx.jpg",
    title: "Circular Economy",
    description: "Closing the loop in fashion production",
  },
];

function Gallery() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-white" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title with border line */}
        <div className="flex items-center mb-12">
          <div className="h-[1px] bg-[#00A4AC] flex-grow"></div>
          <span className="px-4 text-[#00A4AC] font-['Playfair_Display'] font-medium tracking-wide">
            GALLERY
          </span>
          <div className="h-[1px] bg-[#00A4AC] flex-grow"></div>
        </div>

        {/* Slideshow Banner */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative w-full max-w-6xl mx-auto h-screen overflow-hidden rounded-lg shadow-xl"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
            >
              <img
                src={galleryImages[currentIndex].src}
                alt={galleryImages[currentIndex].title}
                className="w-full h-full object-cover"
              />

              {/* Overlay with title and description */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-3xl font-['Playfair_Display'] font-medium text-white mb-3">
                  {galleryImages[currentIndex].title}
                </h3>
                <p className="text-gray-200 text-lg max-w-2xl">
                  {galleryImages[currentIndex].description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slide indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-white" : "bg-white/50"
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Gallery;

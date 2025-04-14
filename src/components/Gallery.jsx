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

  const [selectedImage, setSelectedImage] = useState(null);
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

        {/* Featured Image */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative w-full max-w-6xl mx-auto h-[70vh] overflow-hidden rounded-lg shadow-xl mb-8"
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
                className="w-full h-full object-contain bg-gray-50"
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

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md"
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-contain bg-gray-50 transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white font-['Playfair_Display'] text-lg font-medium text-center px-4">
                  {image.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for full image view */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full bg-white rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X size={24} />
              </button>
              <div className="p-6">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[70vh] object-contain mx-auto"
                />
                <div className="mt-4 text-center">
                  <h3 className="text-2xl font-['Playfair_Display'] font-medium text-gray-900">
                    {selectedImage.title}
                  </h3>
                  <p className="mt-2 text-gray-600">
                    {selectedImage.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Gallery;

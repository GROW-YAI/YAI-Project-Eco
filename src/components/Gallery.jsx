import React, { useState } from "react";
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
    src: "https://res.cloudinary.com/dmxzxo1fk/image/upload/v1742486112/UNDP_1_of_1_-7_doezzz.jpg",
    title: "Quality Craftsmanship",
    description: "Attention to detail in every product",
  },
  {
    id: 5,
    src: "https://res.cloudinary.com/dmxzxo1fk/image/upload/v1742486040/UNDP_1_of_1_-11_rtz0st.jpg",
    title: "Sustainable Fashion",
    description: "Transforming waste into wearable art",
  },
  {
    id: 6,
    src: "https://res.cloudinary.com/dmxzxo1fk/image/upload/v1742486056/UNDP_1_of_1_-6_c2e96b.jpg",
    title: "Eco-Friendly Products",
    description: "Our commitment to sustainability",
  },
  {
    id: 7,
    src: "https://res.cloudinary.com/dmxzxo1fk/image/upload/v1742486074/UNDP_1_of_1_-9_gmqois.jpg",
    title: "Modern Design",
    description: "Contemporary aesthetics meet sustainability",
  },
  {
    id: 8,
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

  const handleImageClick = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    setSelectedImage(galleryImages[(currentIndex + 1) % galleryImages.length]);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );
    setSelectedImage(
      galleryImages[
        (currentIndex - 1 + galleryImages.length) % galleryImages.length
      ]
    );
  };

  return (
    <section className="py-16 bg-white" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Simple title */}
        <div className="flex items-center mb-12">
          <div className="h-[1px] bg-[#00A4AC] flex-grow"></div>
          <span className="px-4 text-[#00A4AC] font-['Playfair_Display'] font-medium tracking-wide">
            GALLERY
          </span>
          <div className="h-[1px] bg-[#00A4AC] flex-grow"></div>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative cursor-pointer bg-white rounded-lg shadow-md overflow-hidden ${
                // Create a pattern of different sizes
                index === 0
                  ? "md:col-span-2 md:row-span-2" // Large card
                  : index === 3
                  ? "md:col-span-2 md:row-span-2" // Second large card
                  : index === 4
                  ? "md:col-span-1 md:row-span-1" // Regular card
                  : index === 7
                  ? "md:col-span-2" // Wide card
                  : "" // Regular card
              }`}
              onClick={() => handleImageClick(image, index)}
            >
              {/* Image container */}
              <div className="relative overflow-hidden h-full">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-['Playfair_Display'] font-medium text-white mb-2">
                  {image.title}
                </h3>
                <p className="text-gray-200 text-sm">{image.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center p-4 z-50 bg-black/90"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
                aria-label="Close modal"
              >
                <X size={32} />
              </button>

              <div className="relative">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-[70vh] object-scale-down rounded-lg"
                />

                {/* Navigation buttons */}
                <button
                  onClick={handlePrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-sm transition-colors"
                >
                  <ChevronLeft size={24} className="text-white" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-sm transition-colors"
                >
                  <ChevronRight size={24} className="text-white" />
                </button>

                {/* Image info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-2xl font-['Playfair_Display'] font-medium text-white mb-2">
                    {selectedImage.title}
                  </h3>
                  <p className="text-gray-200">{selectedImage.description}</p>
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

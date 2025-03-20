import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Masonry from "react-masonry-css";

const galleryImages = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dmxzxo1fk/image/upload/v1742485999/UNDP_1_of_1_-12_rwwv4e.jpg",
    title: "Sustainable Bed Sheets",
    description:
      "Eco-friendly bed sheets crafted from recycled African fabrics",
    height: "tall", // This will be used to create varying heights
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dmxzxo1fk/image/upload/v1742486014/UNDP_1_of_1_-8_u5lu8l.jpg",
    title: "Raw Materials",
    description: "Collection of pre-loved garments ready for transformation",
    height: "medium",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dmxzxo1fk/image/upload/v1742486129/UNDP_1_of_1_-4_mh4yrt.jpg",
    title: "Innovation in Action",
    description: "Our team working on sustainable solutions",
    height: "short",
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/dmxzxo1fk/image/upload/v1742486112/UNDP_1_of_1_-7_doezzz.jpg",
    title: "Quality Craftsmanship",
    description: "Attention to detail in every product",
    height: "tall",
  },
  {
    id: 5,
    src: "https://res.cloudinary.com/dmxzxo1fk/image/upload/v1742486040/UNDP_1_of_1_-11_rtz0st.jpg",
    title: "Sustainable Fashion",
    description: "Transforming waste into wearable art",
    height: "medium",
  },
  {
    id: 6,
    src: "https://res.cloudinary.com/dmxzxo1fk/image/upload/v1742486056/UNDP_1_of_1_-6_c2e96b.jpg",
    title: "Eco-Friendly Products",
    description: "Our commitment to sustainability",
    height: "short",
  },
  {
    id: 7,
    src: "https://res.cloudinary.com/dmxzxo1fk/image/upload/v1742486074/UNDP_1_of_1_-9_gmqois.jpg",
    title: "Modern Design",
    description: "Contemporary aesthetics meet sustainability",
    height: "tall",
  },
  {
    id: 8,
    src: "https://res.cloudinary.com/dmxzxo1fk/image/upload/v1742486093/UNDP_1_of_1_-5_lin8fx.jpg",
    title: "Circular Economy",
    description: "Closing the loop in fashion production",
    height: "medium",
  },
];

function Gallery() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const breakpointColumns = {
    default: 3,
    1100: 2,
    700: 1,
  };

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

  useEffect(() => {
    // Simulate loading time for images
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 bg-white" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
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
        >
          <Masonry
            breakpointCols={breakpointColumns}
            className="flex -ml-4 w-auto"
            columnClassName="pl-4 bg-clip-padding"
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative cursor-pointer bg-white rounded-lg shadow-sm overflow-hidden mb-4 ${
                  image.height === "tall"
                    ? "h-[500px]"
                    : image.height === "medium"
                    ? "h-[400px]"
                    : "h-[300px]"
                }`}
                onClick={() => handleImageClick(image, index)}
              >
                {/* Image container */}
                <div className="relative overflow-hidden w-full h-full">
                  <motion.img
                    src={image.src}
                    alt={image.title}
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6"
                >
                  <h3 className="text-xl font-['Playfair_Display'] font-medium text-white mb-2">
                    {image.title}
                  </h3>
                  <p className="text-gray-200 text-sm">{image.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </Masonry>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center p-4 z-50 bg-black/95 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-6xl w-full mx-auto"
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
                <motion.img
                  key={selectedImage.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-[80vh] object-contain rounded-lg"
                />

                {/* Navigation buttons */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handlePrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-sm transition-colors"
                >
                  <ChevronLeft size={24} className="text-white" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-sm transition-colors"
                >
                  <ChevronRight size={24} className="text-white" />
                </motion.button>

                {/* Image info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg"
                >
                  <h3 className="text-2xl font-['Playfair_Display'] font-medium text-white mb-2">
                    {selectedImage.title}
                  </h3>
                  <p className="text-gray-200">{selectedImage.description}</p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Gallery;

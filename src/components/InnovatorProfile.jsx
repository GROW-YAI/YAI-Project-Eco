import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { X } from "lucide-react";
import side1 from '../images/side1.jpeg';

function InnovatorProfile() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [showModal, setShowModal] = useState(false);

  const fullBio = `Isaac Osei is a forward-thinking entrepreneur from Ejura, Ashanti Region, committed to transforming waste into valuable products. Driven by the growing challenges of improper waste disposal, limited recycling options, and inefficient waste collection in his community, Isaac saw an opportunity to turn discarded materials into sustainable solutions. Through his innovative approach, he repurposes waste rubbers and second-hand garments to create durable school bags for students and high-quality bed sheets for hotels. His work not only reduces environmental pollution but also promotes a circular economy, giving waste a second life while addressing critical social and economic needs. Operating in the Industrial sector, Isaac is on a mission to scale production, improve waste management systems, and expand his impact. With the right support, he aims to create a more sustainable future for his community and beyond, proving that waste can be a resource when innovation meets purpose.`;

  const truncatedBio = `Isaac Osei is a forward-thinking entrepreneur from Ejura, Ashanti Region, committed to transforming waste into valuable products. Driven by the growing challenges of improper waste disposal, limited recycling options, and inefficient waste collection in his community, Isaac saw an opportunity to turn discarded materials into sustainable solutions.`;

  return (
    <section className="py-16 bg-gray-50" id="innovator-profile">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title with border line */}
        <div className="flex items-center mb-12">
          <div className="h-[1px] bg-[#00A4AC] flex-grow"></div>
          <span className="px-4 text-[#00A4AC] font-['Playfair_Display']  font-medium tracking-wide">
            INNOVATOR PROFILE
          </span>
          <div className="h-[1px] bg-[#00A4AC] flex-grow"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-12">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 flex flex-col"
          >
            <div className="order-1">
              <h2 className="text-3xl font-['Playfair_Display']  font-bold text-gray-900 mb-6">
                The Architect of Change
              </h2>
              <p className="text-lg  text-gray-600 leading-relaxed mb-6">
                {truncatedBio}
              </p>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowModal(true)}
                className="bg-[#00A4AC] text-white px-6 py-3 rounded-lg font-['Playfair_Display'] font-medium hover:bg-[#00A4AC]/90 transition-colors mb-10"
              >
                Learn More
              </motion.button>
            </div>

            <div className="order-3 lg:order-2">
              {/* Transformation Images */}
              <div className="grid grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-[#1A959C]/10 transform -rotate-6 rounded-[20px] scale-105 group-hover:rotate-0 transition-transform duration-500"></div>
                  <div
                    className="relative overflow-hidden"
                    style={{
                      clipPath:
                        "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                    }}
                  >
                    <img
                      // src="https://res.cloudinary.com/dmxzxo1fk/image/upload/v1740249929/i_want_an_image_of_a_pile_of_old_worn_out_clothes_1_u17vjr.jpg"
                      src={side1}
                      alt="Plastic Waste"
                      className="w-full h-48 object-cover transform transition-transform group-hover:scale-110 duration-500"
                    />
                  </div>
                  <p className="text-center mt-4 font-['Playfair_Display']  text-gray-600">
                    The Problem
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-[#1A959C]/10 transform rotate-6 rounded-[20px] scale-105 group-hover:rotate-0 transition-transform duration-500"></div>
                  <div
                    className="relative overflow-hidden"
                    style={{
                      clipPath:
                        "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                    }}
                  >
                    <img
                      src="https://res.cloudinary.com/dmxzxo1fk/image/upload/v1740250726/i_want_single_images_of_bedsheets_made_from_worn_out_african_clothes_1_h6ogpo.jpg"
                      alt="Sustainable Product"
                      className="w-full h-48 object-cover transform transition-transform group-hover:scale-110 duration-500"
                    />
                  </div>
                  <p className="text-center mt-4 font-['Playfair_Display']  text-gray-600">
                    The Solution
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2 flex justify-center items-start pt-4"
          >
            <div className="relative w-[70%] max-w-sm">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-[#1A959C]/10 transform rotate-6 rounded-[30px] scale-105"></div>

              {/* Image container with unique shape */}
              <div
                className="relative overflow-hidden w-full"
                style={{
                  clipPath:
                    "polygon(0% 20%, 20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%)",
                  aspectRatio: "3/4",
                }}
              >
                <img
                  src="https://res.cloudinary.com/dmxzxo1fk/image/upload/v1741629137/WhatsApp_Image_2025-03-10_at_08.23.36_cc4vbb.jpg"
                  alt="Lead Innovator"
                  className="w-full h-full object-cover absolute inset-0 transform transition-transform hover:scale-105 duration-500"
                />
              </div>

              {/* Decorative dots */}
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#1A959C]/20 rounded-full"></div>
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-[#1A959C]/15 rounded-full"></div>

              {/* Name and Position */}
              <div className="text-center mt-6">
                <h3 className="text-2xl font-['Playfair_Display'] font-bold text-gray-900">
                  Isaac Osei
                </h3>
                <p className="text-[#1A959C] font-['Playfair_Display']  font-medium mt-1">
                  Chief Innovation Officer
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center p-4 z-50"
            onClick={() => setShowModal(false)}
          >
            {/* Background with innovator image and blur effect */}
            <div
              className="fixed inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(https://res.cloudinary.com/dmxzxo1fk/image/upload/v1741629137/WhatsApp_Image_2025-03-10_at_08.23.36_cc4vbb.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "blur(8px) brightness(0.7)",
              }}
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-white rounded-xl shadow-2xl max-w-4xl w-full p-8 overflow-y-auto max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <motion.div
                    className="relative w-full overflow-hidden rounded-lg"
                    style={{ aspectRatio: "3/4" }}
                  >
                    <img
                      src="https://res.cloudinary.com/dmxzxo1fk/image/upload/v1741629137/WhatsApp_Image_2025-03-10_at_08.23.36_cc4vbb.jpg"
                      alt="Lead Innovator"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>

                <div>
                  <h3 className="text-3xl font-['Playfair_Display'] font-bold text-gray-900 mb-4">
                    Isaac Osei
                  </h3>
                  <p className="text-[#1A959C] font-['Playfair_Display'] font-medium mb-6">
                    Chief Innovation Officer
                  </p>
                  <div className="prose prose-lg">
                    <p className="text-gray-600 leading-relaxed">{fullBio}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default InnovatorProfile;

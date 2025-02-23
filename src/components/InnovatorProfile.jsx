import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function InnovatorProfile() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="py-16 bg-gray-50" id="innovator">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title with border line */}
        <div className="flex items-center mb-12">
          <div className="h-[1px] bg-[#00A4AC] flex-grow"></div>
          <span className="px-4 text-[#00A4AC] font-[playfair display] font-medium tracking-wide">
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
            className="lg:w-1/2"
          >
            <h2 className="text-3xl font-[playfair display] font-bold text-gray-900 mb-6">
              The Architect of Change
            </h2>
            <p className="text-lg font-[playfair display] text-gray-600 leading-relaxed mb-10">
              Isaac Osei is a forward-thinking entrepreneur from Ejura, Ashanti
              Region, committed to transforming waste into valuable products.
              Driven by the growing challenges of improper waste disposal,
              limited recycling options, and inefficient waste collection in his
              community, Isaac saw an opportunity to turn discarded materials
              into sustainable solutions. Through his innovative approach, he
              repurposes waste rubbers and second-hand garments to create
              durable school bags for students and high-quality bed sheets for
              hotels. His work not only reduces environmental pollution but also
              promotes a circular economy, giving waste a second life while
              addressing critical social and economic needs. Operating in the
              Industrial sector, Isaac is on a mission to scale production,
              improve waste management systems, and expand his impact. With the
              right support, he aims to create a more sustainable future for his
              community and beyond, proving that waste can be a resource when
              innovation meets purpose.
            </p>

            {/* Transformation Images */}
            <div className="grid grid-cols-2 gap-6 mt-8">
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
                    src="https://res.cloudinary.com/dmxzxo1fk/image/upload/v1740249929/i_want_an_image_of_a_pile_of_old_worn_out_clothes_1_u17vjr.jpg"
                    alt="Plastic Waste"
                    className="w-full h-48 object-cover transform transition-transform group-hover:scale-110 duration-500"
                  />
                </div>
                <p className="text-center mt-4 font-[playfair display] text-gray-600">
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
                <p className="text-center mt-4 font-[playfair display] text-gray-600">
                  The Solution
                </p>
              </motion.div>
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
                className="relative overflow-hidden"
                style={{
                  clipPath:
                    "polygon(0% 20%, 20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%)",
                }}
              >
                <img
                  src="https://res.cloudinary.com/dmxzxo1fk/image/upload/v1740311724/ik_o_rigd4i.webp"
                  alt="Lead Innovator"
                  className="w-full h-auto object-cover transform transition-transform hover:scale-105 duration-500"
                />
              </div>

              {/* Decorative dots */}
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#1A959C]/20 rounded-full"></div>
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-[#1A959C]/15 rounded-full"></div>

              {/* Name and Position */}
              <div className="text-center mt-6">
                <h3 className="text-2xl font-[playfair display] font-bold text-gray-900">
                  Isaac Osei
                </h3>
                <p className="text-[#1A959C] font-[playfair display] font-medium mt-1">
                  Chief Innovation Officer
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default InnovatorProfile;

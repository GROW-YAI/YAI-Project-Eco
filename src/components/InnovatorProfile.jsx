import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function InnovatorProfile() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <section className="py-16 bg-gray-50" id="innovator">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title with border line */}
        <div className="flex items-center mb-12">
          <div className="h-[1px] bg-[#00A4AC] flex-grow"></div>
          <span className="px-4 text-[#00A4AC] font-[playfair display] font-medium tracking-wide">INNOVATOR PROFILE</span>
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
              Dr. Sarah Chen brings over 15 years of experience in technological innovation and leadership. Her vision drives our commitment to pushing the boundaries of what's possible in the digital realm. As a pioneering force in the tech industry, she has consistently demonstrated an exceptional ability to identify emerging trends and translate them into groundbreaking solutions. Her approach combines cutting-edge technical expertise with a deep understanding of market dynamics, enabling our team to deliver innovations that not only meet current needs but anticipate future challenges. Under her guidance, our organization has achieved numerous breakthroughs in artificial intelligence, cloud computing, and sustainable technology solutions.
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
                <div className="relative overflow-hidden" style={{
                  clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)"
                }}>
                  <img
                    src="https://images.unsplash.com/photo-1621451537084-482c73073a0f?auto=format&fit=crop&w=600&q=80"
                    alt="Plastic Waste"
                    className="w-full h-48 object-cover transform transition-transform group-hover:scale-110 duration-500"
                  />
                </div>
                <p className="text-center mt-4 font-[playfair display] text-gray-600">The Problem</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-[#1A959C]/10 transform rotate-6 rounded-[20px] scale-105 group-hover:rotate-0 transition-transform duration-500"></div>
                <div className="relative overflow-hidden" style={{
                  clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
                }}>
                  <img
                    src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80"
                    alt="Sustainable Product"
                    className="w-full h-48 object-cover transform transition-transform group-hover:scale-110 duration-500"
                  />
                </div>
                <p className="text-center mt-4 font-[playfair display] text-gray-600">The Solution</p>
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
              <div className="relative overflow-hidden" style={{
                clipPath: "polygon(0% 20%, 20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%)"
              }}>
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                  alt="Lead Innovator"
                  className="w-full h-auto object-cover transform transition-transform hover:scale-105 duration-500"
                />
              </div>
              
              {/* Decorative dots */}
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#1A959C]/20 rounded-full"></div>
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-[#1A959C]/15 rounded-full"></div>

              {/* Name and Position */}
              <div className="text-center mt-6">
                <h3 className="text-2xl font-[playfair display] font-bold text-gray-900">Dr. Sarah Chen</h3>
                <p className="text-[#1A959C] font-[playfair display] font-medium mt-1">Chief Innovation Officer</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default InnovatorProfile;
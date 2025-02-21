import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check } from 'lucide-react';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <section className="py-16 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Top border line with ABOUT US text */}
          <div className="flex items-center mb-8">
            <div className="h-[1px] bg-[#00A4AC] flex-grow"></div>
            <span className="px-4 text-[#00A4AC] font-['Playfair_Display'] font-medium tracking-wide">ABOUT US</span>
            <div className="h-[1px] bg-[#00A4AC] flex-grow"></div>
          </div>

          <div className="flex flex-col lg:flex-row gap-16">
            {/* Left side - Images */}
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2 relative"
            >
              <div className="relative pb-[60%] lg:pb-[65%]">
                {/* Top image with white border */}
                <div className="absolute inset-0 z-10 rounded-[2rem] overflow-hidden border-8 border-white shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1576764402988-7143f9cca90a?auto=format&fit=crop&w=1200&q=80"
                    alt="Beach cleanup volunteers"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Bottom image with navy border */}
                <div className="absolute bottom-[-10%] right-[-10%] w-[80%] z-0 rounded-[2rem] overflow-hidden border-8 border-[#139597] shadow-xl aspect-[4/3]">
                  <img
                    src="https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?auto=format&fit=crop&w=1200&q=80"
                    alt="Ocean cleanup"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
            
            {/* Right side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-1/2 space-y-8"
            >
              <h2 className="text-5xl font-['Playfair_Display'] font-bold text-black leading-[1.2] tracking-tight">
                Work Together to Clean The Ocean
              </h2>
              
              <p className="text-black/80 font-['Playfair_Display'] text-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur pulvinar dapibus leo Ut Ut elit tellus luctus nec ullamcorper elit tellus adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo Ut Ut elit tellus, luctus nec ullamcorper elit tellus, luctus nec ullamcorper
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Check className="text-[#00A4AC] w-6 h-6" />
                  <p className="text-lg text-[#00A4AC] font-['Playfair_Display']">
                    Sed do ei incididunt ut labore et dolore magna aliqua
                  </p>
                </div>
                
                <div className="flex items-center gap-4">
                  <Check className="text-[#00A4AC] w-6 h-6" />
                  <p className="text-lg text-[#00A4AC] font-['Playfair_Display']">
                    Ut enim ad minim veniam, quis nostrud exercitation
                  </p>
                </div>
                
                <div className="flex items-center gap-4">
                  <Check className="text-[#00A4AC] w-6 h-6" />
                  <p className="text-lg text-[#00A4AC] font-['Playfair_Display']">
                    Excepteur sint ocnon proident, sunt in culpa qui officia
                  </p>
                </div>
              </div>

              {/* <button className="bg-[#00A4AC] text-white px-8 py-3 rounded-lg font-['Playfair_Display'] font-medium hover:bg-[#00A4AC]/90 transition-colors">
                Contact Us
              </button> */}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
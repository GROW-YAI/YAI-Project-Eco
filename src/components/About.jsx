import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check } from 'lucide-react';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const puzzleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.5
      }
    })
  };

  return (
    <section className="py-16 bg-white overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Top border line with ABOUT US text */}
          <div className="flex items-center mb-12">
            <div className="h-[1px] bg-[#00A4AC] flex-grow"></div>
            <span className="px-4 text-[#00A4AC] font-['Playfair_Display'] font-medium tracking-wide">ABOUT US</span>
            <div className="h-[1px] bg-[#00A4AC] flex-grow"></div>
          </div>

          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Left side - Puzzle Images */}
            <motion.div
              ref={ref}
              className="lg:w-1/2 grid grid-cols-2 gap-4 px-4"
            >
              {/* Problem Images */}
              <motion.div
                custom={0}
                variants={puzzleVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="relative aspect-square rounded-tl-3xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300"
              >
                <img
                  src="https://res.cloudinary.com/dmxzxo1fk/image/upload/v1740249788/i_want_an_image_of_a_plastic_waste_dump_2_zuaayq.jpg"
                  alt="Plastic waste problem"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
              </motion.div>

              <motion.div
                custom={1}
                variants={puzzleVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="relative aspect-square rounded-tr-3xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300"
              >
                <img
                  src="https://res.cloudinary.com/dmxzxo1fk/image/upload/v1740249899/i_want_an_image_of_a_pile_of_colorful_old_worn_out_clothes_ddexnc.jpg"
                  alt="Textile waste problem"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
              </motion.div>

              {/* Solution Images */}
              <motion.div
                custom={2}
                variants={puzzleVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="relative aspect-square rounded-bl-3xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300"
              >
                <img
                  src="https://res.cloudinary.com/dmxzxo1fk/image/upload/v1740248459/ik7_hzqflc.png"
                  alt="Sustainable bags"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
              </motion.div>

              <motion.div
                custom={3}
                variants={puzzleVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="relative aspect-square rounded-br-3xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300"
              >
                <img
                  src="https://res.cloudinary.com/dmxzxo1fk/image/upload/v1740248372/ik3_ngq9i8.png"
                  alt="Sustainable fashion products"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
              </motion.div>
            </motion.div>
            
            {/* Right side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-1/2 space-y-8"
            >
              <h2 className="text-4xl sm:text-5xl font-['Playfair_Display'] font-bold text-black leading-[1.2] tracking-tight">
                Transforming Waste into Sustainable Fashion
              </h2>
              
              <p className="text-black/80 font-['Playfair_Display'] text-lg leading-relaxed">
                At Ike-Dian Fashion, we're revolutionizing the fashion industry by transforming environmental challenges into sustainable solutions. We collect plastic waste and worn-out textiles, giving them new life as beautiful, durable fashion items that make a difference.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Check className="text-[#00A4AC] w-6 h-6 mt-1 flex-shrink-0" />
                  <p className="text-lg text-[#00A4AC]  font-['Playfair_Display']">
                    Converting plastic waste into durable, stylish backpacks and tote bags
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <Check className="text-[#00A4AC] w-6 h-6 mt-1 flex-shrink-0" />
                  <p className="text-lg text-[#00A4AC] font-['Playfair_Display']">
                    Transforming old textiles into premium bedsheets and home accessories
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <Check className="text-[#00A4AC] w-6 h-6 mt-1 flex-shrink-0" />
                  <p className="text-lg text-[#00A4AC] font-['Playfair_Display']">
                    Reducing environmental impact while creating employment opportunities
                  </p>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="pt-4"
              >
                <p className="text-black/70 font-['Playfair_Display']  font-bold text-lg italic">
                  "Every piece tells a story of transformation and hope for a sustainable future."
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
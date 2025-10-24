import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const testimonials = [
  {
    id: 1,
    name: "Abena Nketsia",
    image: "https://res.cloudinary.com/dmxzxo1fk/image/upload/v1740248372/ik3_ngq9i8.png",

    text: "The eco-friendly backpack is amazing! Knowing it's made from recycled materials makes me feel great about my purchase. It's durable, stylish, and I love that each product helps reduce plastic waste.",
    rating: 5,
    product: "Eco-Friendly Backpack",
  },
  {
    id: 2,
    name: "Kofi Adu",
    image: "🤩",
    text: "These bedsheets are incredibly soft and comfortable. Hard to believe they're made from recycled materials! The quality is outstanding, and I sleep better knowing I'm supporting sustainable practices.",
    rating: 5,
    product: "Recycled Bedsheets",
  },
  {
    id: 3,
    name: "Yaw Mintah",
    image: "😃",
    text: "The sustainable backpack is perfect for my daily commute. It's spacious, water-resistant, and I've received so many compliments. Love that it's made from recycled plastic waste!",
    rating: 4,
    product: "Eco-Friendly Backpack",
  },
  {
    id: 4,
    name: "Sarah Boadi",
    image: "🥰",
    text: "The bedding set exceeded my expectations. They're not just eco-friendly, but genuinely luxurious. Washing well after months of use, and still feels like new. Great investment in sustainable living!",
    rating: 5,
    product: "Recycled Bedsheets",
  },
];

const TestimonialCard = ({ testimonial, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

   // Function to check if the image is a URL or emoji
  const renderImage = (image) => {
    if (image.startsWith('http')) {
      return (
        <img 
          src={image} 
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover"
        />
      );
    } else {
      return (
        <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-2xl">
          {image}
        </div>
      );
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
      whileHover={{ y: -5 }}
    >
      <div className="flex items-center mb-4">
        <div className="relative w-12 h-12 mr-4 flex items-center justify-center text-3xl">
          {renderImage(testimonial.image)}
        </div>
        <div>
          <h3 className="font-['Playfair_Display']  text-lg font-semibold text-gray-900">
            {testimonial.name}
          </h3>
          <p className="text-sm text-emerald-600 font-['Playfair_Display'] font-medium">
            {testimonial.product}
          </p>
        </div>
      </div>
      <div className="mb-4">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`text-xl ${
              i < testimonial.rating ? "text-yellow-400" : "text-gray-300"
            }`}
          >
            ★
          </span>
        ))}
      </div>
      <p className="text-gray-700   leading-relaxed">{testimonial.text}</p>
    </motion.div>
  );
};

const TestimonialsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="testimonials" className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Updated header with matching border style */}
        <div className="flex items-center mb-12">
          <div className="h-[1px] bg-[#00A4AC] flex-grow"></div>
          <span className="px-4 text-[#00A4AC] font-['Playfair_Display'] font-medium tracking-wide">
            CUSTOMER REVIEWS
          </span>
          <div className="h-[1px] bg-[#00A4AC] flex-grow"></div>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-black text-lg font-bold max-w-2xl mx-auto font-['Playfair_Display']">
            See what our customers say about our sustainable products made from
            recycled materials
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

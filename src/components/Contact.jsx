import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import emailjs from "@emailjs/browser";
import { MapPin, Mail, Phone, Instagram, Facebook } from "lucide-react";

function Contact() {
  const formRef = useRef();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const name = formData.get("user_name");
    const email = formData.get("user_email");
    const message = formData.get("message");

    // Format the message for WhatsApp
    const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

    // Open WhatsApp with the pre-filled message
    window.open(`https://wa.me/233244530571?text=${whatsappMessage}`, "_blank");

    // Reset the form
    formRef.current.reset();
  };

  return (
    <>
      <section className="py-16 bg-gray-50" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title with border line */}
          <div className="flex items-center mb-12">
            <div className="h-[1px] bg-[#1A959C] flex-grow"></div>
            <span className="px-4 text-[#1A959C] font-['Playfair_Display']  font-medium tracking-wide">
              CONTACT US
            </span>
            <div className="h-[1px] bg-[#1A959C] flex-grow"></div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Form */}
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-1">
                    <input
                      type="text"
                      name="user_name"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-lg font-['Playfair_Display'] bg-white border border-gray-300 focus:border-[#00A4AC] focus:ring-2 focus:ring-[#00A4AC]/20 font-[playfair display]"
                      required
                    />
                  </div>
                  <div className="flex-1">
                    <input
                      type="email"
                      name="user_email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 rounded-lg font-['Playfair_Display'] bg-white border border-gray-300 focus:border-[#00A4AC] focus:ring-2 focus:ring-[#00A4AC]/20 font-[playfair display]"
                      required
                    />
                  </div>
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="6"
                    className="w-full px-4 py-3 rounded-lg font-['Playfair_Display'] bg-white border border-gray-300 focus:border-[#00A4AC] focus:ring-2 focus:ring-[#00A4AC]/20 font-[playfair display]"
                    required
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-3 px-6 bg-[#1A959C] text-white rounded-lg font-['Playfair_Display']  hover:bg-[#008B92] transition-colors duration-300"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-1/2 space-y-8"
            >
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-[#1A959C] mt-1" />
                <div>
                  <h3 className="text-xl font-['Playfair_Display']  font-semibold text-gray-900">
                    Location
                  </h3>
                  <p className="text-gray-600  ">
                    Barima Osei Hwedie II, Ejura, Ashanti Region,Ghana.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-[#1A959C] mt-1" />
                <div>
                  <h3 className="text-xl font-['Playfair_Display']  font-semibold text-gray-900">
                    Email
                  </h3>
                  <p className="text-gray-600 ">ikedianfash@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-[#1A959C] mt-1" />
                <div>
                  <h3 className="text-xl font-['Playfair_Display']  font-semibold text-gray-900">
                    Phone
                  </h3>
                  <p className="text-gray-600  ">+233 24 453 0571</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-[#1A959C] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Column 1: About & Social Media */}
            <div className="col-span-1">
              <div className="space-y-5">
                {/* <img src="images/ike-dian-logo.png" alt="Ike-Dian Fashion Logo" className="h-12 w-auto"/> */}
                <h3 className="text-lg font-bold">
                  IKE-DIAN FASHION
                </h3>
                <p className="text-white/90">We practicalize innovation by creating stylish, eco-friendly fashion from recycled materials. We turn waste into wearable art.</p>
                <div className="flex space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://wa.me/233244530571"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 h-10 w-10 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://www.instagram.com/ikedi.an?igsh=MTRnYmpjODZtYnFzbg%3D%3D&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 h-10 w-10 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://www.facebook.com/share/1A6yScdXXp/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 h-10 w-10 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://www.tiktok.com/@ike.dian1?_t=ZM-8uCZqDyWfmX&_r=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 h-10 w-10 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                  </motion.a>
                </div>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="col-span-1">
              <div className="space-y-5">
                <h3 className="text-lg font-bold">
                  Quick Links
                </h3>
                <ul className="space-y-3">
                  <li><a href="/" className="text-white/90 hover:text-white transition-colors duration-300">Home</a></li>
                  <li><a href="#about" className="text-white/90 hover:text-white transition-colors duration-300">About Us</a></li>
                  <li><a href="#innovator-profile" className="text-white/90 hover:text-white transition-colors duration-300">Innovator</a></li>
                  <li><a href="#products" className="text-white/90 hover:text-white transition-colors duration-300">Products</a></li>
                  <li><a href="#testimonials" className="text-white/90 hover:text-white transition-colors duration-300">Testimonials</a></li>
                </ul>
              </div>
            </div>

            {/* Column 3: Contact Info */}
            <div className="col-span-1">
              <div className="space-y-5">
                <h3 className="text-lg font-bold">
                  Contact Info
                </h3>
                <div className="space-y-3">
                  <div>
                    <div className="font-bold">Address:</div>
                    <p className="text-white/90">Ejura, Ashanti Region - Ghana</p>
                  </div>
                  <div>
                    <div className="font-bold">Phone:</div>
                    <p className="text-white/90"><a href="tel:+233244530571" className="hover:text-white transition-colors duration-300">+233 24 453 0571</a></p>
                  </div>
                  <div>
                    <div className="font-bold">Email:</div>
                    <p className="text-white/90"><a href="mailto:ikedianfash@gmail.com" className="hover:text-white transition-colors duration-300">ikedianfash@gmail.com</a></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 4: Get In Touch */}
            <div className="col-span-1">
              <div className="space-y-5">
                <h3 className="text-lg font-bold">
                  Transform With Us
                </h3>
                <p className="text-white/90">Ready to support eco-fashion? Let's create sustainable style together.</p>
                <a href="#contact" className="inline-block bg-white text-[#1A959C] px-6 py-3 rounded-md hover:bg-gray-100 transition-colors duration-300 font-medium text-center">
                  Connect Today
                </a>
              </div>
            </div>

          </div>



          {/* Divider Line */}
          <div className="w-full h-[1px] bg-white/30 my-8"></div>

          {/* Copyright Section */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-white/80 text-sm">
                &copy; {new Date().getFullYear()} Ike-Dian Fashion, All rights reserved.
              </p>
            </div>
            {/* <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-white text-sm transition-colors duration-300">Privacy Policy</a>
              <span className="text-white/80">|</span>
              <a href="#" className="text-white/80 hover:text-white text-sm transition-colors duration-300">Terms of Service</a>
            </div> */}
          </div>
        </div>
      </footer>


    </>
  );
}

export default Contact;

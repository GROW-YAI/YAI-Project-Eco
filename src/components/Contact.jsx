import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import emailjs from "@emailjs/browser";
import {
  MapPin,
  Mail,
  Phone,
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
} from "lucide-react";

function Contact() {
  const formRef = useRef();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = new FormData(formRef.current);
    const name = formData.get('user_name');
    const email = formData.get('user_email');
    const message = formData.get('message');
    
    // Format the message for WhatsApp
    const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    
    // Open WhatsApp with the pre-filled message
    window.open(`https://wa.me/233244530571?text=${whatsappMessage}`, '_blank');
    
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
      <footer className="bg-[#1A959C] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center">
            {/* Social Icons */}
            <div className="flex space-x-6 justify-center mb-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://wa.me/233244530571"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-200 transition-colors duration-300"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="hover:text-gray-200 transition-colors duration-300"
              >
                <Instagram className="w-6 h-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="hover:text-gray-200 transition-colors duration-300"
              >
                <Facebook className="w-6 h-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="hover:text-gray-200 transition-colors duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="hover:text-gray-200 transition-colors duration-300"
              >
                <Twitter className="w-6 h-6" />
              </motion.a>
            </div>
            
            {/* Divider Line */}
            <div className="w-full h-[1px] bg-white/30 my-4"></div>
            
            {/* Copyright Text */}
            <div className="text-center">
              <p>
                &copy; {new Date().getFullYear()} Ike-Dian Fashion, All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Contact;
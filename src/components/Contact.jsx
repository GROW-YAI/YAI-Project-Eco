import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';
import { MapPin, Mail, Phone, Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';

function Contact() {
  const formRef = useRef();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      formRef.current,
      'YOUR_PUBLIC_KEY'
    )
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        formRef.current.reset();
      }, (error) => {
        console.log('Error sending email:', error.text);
      });
  };

  return (
    <>
      <section className="py-16 bg-gray-50" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title with border line */}
          <div className="flex items-center mb-12">
            <div className="h-[1px] bg-[#1A959C] flex-grow"></div>
            <span className="px-4 text-[#1A959C] font-[playfair display] font-medium tracking-wide">CONTACT US</span>
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
                      className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-[#00A4AC] focus:ring-2 focus:ring-[#00A4AC]/20 font-[playfair display]"
                      required
                    />
                  </div>
                  <div className="flex-1">
                    <input
                      type="email"
                      name="user_email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-[#00A4AC] focus:ring-2 focus:ring-[#00A4AC]/20 font-[playfair display]"
                      required
                    />
                  </div>
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="6"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-[#00A4AC] focus:ring-2 focus:ring-[#00A4AC]/20 font-[playfair display]"
                    required
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-3 px-6 bg-[#1A959C] text-white rounded-lg font-[playfair display] hover:bg-[#008B92] transition-colors duration-300"
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
                  <h3 className="text-xl font-[playfair display] font-semibold text-gray-900">Location</h3>
                  <p className="text-gray-600 font-[playfair display]">Hrpn Jya Street, Pekanbaru</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-[#1A959C] mt-1" />
                <div>
                  <h3 className="text-xl font-[playfair display] font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600 font-[playfair display]">Rewaste@mail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-[#1A959C] mt-1" />
                <div>
                  <h3 className="text-xl font-[playfair display] font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-600 font-[playfair display]">+622 322 223</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A959C] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="font-[playfair display]">&copy; {new Date().getFullYear()} Ike-Dian Fashion, All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
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
          </div>
        </div>
      </footer>
    </>
  );
}

export default Contact;
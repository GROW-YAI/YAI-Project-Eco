import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Leaf, Award, Recycle, PenTool as Tool, Shield, Star, Heart } from 'lucide-react';

const products = [
  {
    id: 1,
    title: "ReRub",
    price: 299,
    image: 'https://res.cloudinary.com/dmxzxo1fk/image/upload/v1740248507/ik9_hwzy5u.png',
    description: "A durable, water-resistant backpack made from upcycled waste rubbers. Stylish, eco-friendly, and built for everyday use. Carry with purpose, support sustainability.",
    features: {
      materials: "Upcycled Rubber",
      quality: "Premium Grade",
      eco: "100% Sustainable",
      crafting: "Handmade with Care"
    }
  },
  {
    id: 2,
    title: "EcoWeave",
    price: 199,
    image: 'https://res.cloudinary.com/dmxzxo1fk/image/upload/v1740250726/i_want_single_images_of_bedsheets_made_from_worn_out_african_clothes_1_h6ogpo.jpg',
    description: "Breathable, comfortable, and eco-friendly—EcoWeave Sheets are crafted from upcycled second-hand garments. Giving fabrics a second life, they offer sustainability without compromising on quality and comfort.",
    features: {
      materials: "Recycled Fabrics",
      quality: "Superior Comfort",
      eco: "Zero Waste",
      crafting: "Artisan Made"
    }
  },
  {
    id: 3,
    title: "ThreadTrek",
    price: 149,
    image: "https://res.cloudinary.com/dmxzxo1fk/image/upload/v1740250795/i_want_single_images_of_backpacks_made_from_worn_out_african_clothes_akltpn.jpg",
    description: "Lightweight, durable, and sustainably made—ThreadTrek Pack is crafted from upcycled second-hand garments. Designed for everyday use, it combines style, function, and a commitment to reducing textile waste.",
    features: {
      materials: "Upcycled Textiles",
      quality: "Built to Last",
      eco: "Eco-Conscious",
      crafting: "Hand-Stitched"
    }
  },
  {
    id: 4,
    title: "FlexRub",
    price: 249,
    image: 'https://res.cloudinary.com/dmxzxo1fk/image/upload/v1740060092/Untitled_design_3_bf5pmi.png',
    description: "Made from repurposed waste rubber, the FlexRub Pack is built for toughness and longevity. Its rugged, water-resistant design makes it ideal for daily use, while its eco-friendly materials help reduce waste and promote sustainability.",
    features: {
      materials: "Repurposed Rubber",
      quality: "Military Grade",
      eco: "Waste Reducing",
      crafting: "Expert Crafted"
    }
  },
  {
    id: 5,
    title: "EcoLux Tote",
    price: 179,
    image: 'https://res.cloudinary.com/dmxzxo1fk/image/upload/v1740248372/ik3_ngq9i8.png',
    description: "Elegantly designed tote bag made from premium recycled materials. Perfect for the environmentally conscious fashion enthusiast.",
    features: {
      materials: "Recycled Premium",
      quality: "Luxury Grade",
      eco: "Eco-Luxurious",
      crafting: "Artisan Crafted"
    }
  },
  {
    id: 6,
    title: "GreenStride",
    price: 289,
    image: 'https://res.cloudinary.com/dmxzxo1fk/image/upload/v1740250694/i_want_single_images_of_backpacks_made_from_plastic_waste_in_a_ghana_k1vqou.jpg',
    description: "Innovative backpack crafted from recycled plastics and sustainable materials. Style meets environmental responsibility.",
    features: {
      materials: "Recycled Plastic",
      quality: "Premium Comfort",
      eco: "Ocean Friendly",
      crafting: "Hand Finished"
    }
  },
  {
    id: 7,
    title: "EcoPatch",
    price: 199,
    image: 'https://res.cloudinary.com/dmxzxo1fk/image/upload/v1740417043/sheets_elfxvc.webp',
    description: "Elevate your bedroom with the EcoPatch Reclaimed Bedsheet, a sustainable and stylish choice made from upcycled second-hand garments. Each bedsheet features a unique patchwork design combining denim, cotton, and wool textures, ensuring warmth, comfort, and durability. Expertly stitched for a polished finish, this eco-friendly bedding is perfect for those who appreciate craftsmanship and conscious living.",
    features: {
      materials: " Upcycled Fabrics",
      quality: "Expertly Stitched",
      eco: "Sustainable Comfort",
      crafting: "Handcrafted Excellence"
    }
  },
  {
    id: 8,
    title: "LuxeHeritage",
    price: 159,
    image: 'https://res.cloudinary.com/dmxzxo1fk/image/upload/v1740417520/sheet2_vfx09c.webp',
    description: "Experience the perfect blend of sustainability and luxury with the LuxeHeritage Denim Bedsheet. Crafted from upcycled denim and repurposed fabrics, this unique bedding set features a stunning patchwork design that merges rich indigo tones with vibrant African prints. Set in a plush, Ghanaian-inspired bedroom, it embodies eco-conscious living without compromising on style and comfort.",
    features: {
      materials: "Upcycled Denim & African Prints",
      quality: "Premium Stitching & Durable Fabrics",
      eco: "Sustainable & Reclaimed Textiles",
      crafting: "Handcrafted with Cultural Elegance"
    }
  }
];

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handlePaystackPayment = () => {
    window.open('https://paystack.shop/ike-dian-fashion', '_blank');
};


  return (
    <section className="py-20 bg-gray-50" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top border line with PRODUCTS text */}
        <div className="flex items-center mb-12">
          <div className="h-[1px] bg-[#00A4AC] flex-grow"></div>
          <span className="px-4 text-[#00A4AC] font-['Playfair_Display'] font-medium tracking-wide">PRODUCTS</span>
          <div className="h-[1px] bg-[#00A4AC] flex-grow"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-['Playfair_Display'] font-semibold text-gray-900">
                    {product.title}
                  </h3>
                  <span className="text-lg font-semibold font-['Playfair_Display'] text-[#00A4AC]">
                    GH₵{product.price}
                  </span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedProduct(product)}
                  className="w-full bg-gray-100 text-gray-900 px-4 py-2  font-['Playfair_Display'] rounded-lg font-medium hover:bg-gray-200 transition-colors"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedProduct && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedProduct(null)}
            >
              {/* Background with product image and blur effect */}
              <div 
                className="fixed inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${selectedProduct.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: 'blur(8px) brightness(0.7)'
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
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Close modal"
                >
                  <X size={24} />
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <motion.img
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      src={selectedProduct.image}
                      alt={selectedProduct.title}
                      className="w-full h-[300px] object-cover rounded-lg shadow-lg"
                    />
                  </div>

                  <div>
                    <h3 className="text-3xl font-['Playfair_Display'] font-bold text-gray-900 mb-4">
                      {selectedProduct.title}
                    </h3>
                    <p className="text-gray-600 text-lg mb-6 ">
                      {selectedProduct.description}
                    </p>

                    {/* Product Features */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="flex items-center space-x-2">
                        <Recycle className="text-[#00A4AC]" size={20} />
                        <span className="text-sm">{selectedProduct.features.materials}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Star className="text-[#00A4AC]" size={20} />
                        <span className="text-sm">{selectedProduct.features.quality}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Leaf className="text-[#00A4AC]" size={20} />
                        <span className="text-sm">{selectedProduct.features.eco}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Tool className="text-[#00A4AC]" size={20} />
                        <span className="text-sm">{selectedProduct.features.crafting}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Shield className="text-[#00A4AC]" size={20} />
                        <span className="text-sm font-medium">Quality Guaranteed</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Heart className="text-[#00A4AC]" size={20} />
                        <span className="text-sm font-medium">Made with Love</span>
                      </div>
                    </div>

                    <div className="mt-8 flex items-center justify-between">
                      <span className="text-3xl font-['Playfair_Display'] font-bold text-[#00A4AC]">
                        GH₵{selectedProduct.price}
                      </span>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handlePaystackPayment}
                        className="bg-[#00A4AC] text-white  font-['Playfair_Display'] px-8 py-3 rounded-lg font-medium hover:bg-[#00A4AC]/90 transition-colors"
                      >
                        Shop Now
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
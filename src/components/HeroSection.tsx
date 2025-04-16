import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const images = [
  "/lovable-uploads/852b3a80-1f17-4b7c-9a71-9da476de9b2c.png",
  "/lovable-uploads/051409d0-7763-4b90-881b-3decb6109f4f.png", 
  "/lovable-uploads/920f801f-4e98-4033-b327-2bda50f99bc5.png",
  "/lovable-uploads/65ab7436-b413-4162-a346-8cdb835a6d2f.png", // Newly added isometric tech image
];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 10000); // Changed from 5000 to 10000 milliseconds (10 seconds)

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#8B5CF6] to-[#0EA5E9] text-white relative overflow-hidden pt-20">
      {/* Image carousel with fade transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
            style={{ backgroundImage: `url('${images[currentImage]}')` }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/70" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20" />
      
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#F97316] to-[#D946EF]"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Miami Tech Solutions
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-3xl mb-10 text-white max-w-3xl mx-auto font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Powering Miami's Digital Future with Cutting-Edge Internet Solutions
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button
              size="lg"
              className="bg-white text-[#8B5CF6] hover:bg-[#F97316] hover:text-white transition-all duration-300 text-lg px-8 py-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Explore Our Services
            </Button>
          </motion.div>

          {/* Image indicators */}
          <div className="flex justify-center gap-2 mt-12">
            {images.map((_, index) => (
              <motion.button
                key={index}
                className={`w-2 h-2 rounded-full ${
                  currentImage === index ? "bg-white" : "bg-white/30"
                }`}
                onClick={() => setCurrentImage(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

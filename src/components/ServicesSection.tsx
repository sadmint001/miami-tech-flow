
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Wifi, Globe, Shield, Zap, Clock, Headset } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const services = [
  {
    title: "Affordable Internet",
    description: "Budget-friendly connectivity solutions for homes and businesses",
    icon: Wifi,
  },
  {
    title: "Fast & Reliable Speed",
    description: "High-speed connections with consistent performance",
    icon: Zap,
  },
  {
    title: "Customer Service",
    description: "Dedicated support team ready to assist at any time",
    icon: Headset,
  },
  {
    title: "Uninterrupted Internet",
    description: "Reliable connections with minimal downtime",
    icon: Clock,
  },
];

const wifiPackages = [
  {
    speed: "5Mbps",
    price: "KSH 1000/=",
    color: "from-pink-500 to-purple-600",
  },
  {
    speed: "8Mbps",
    price: "KSH 1500/=",
    color: "from-orange-400 to-pink-500",
  },
  {
    speed: "10Mbps",
    price: "KSH 1800/=",
    color: "from-green-400 to-blue-500",
  },
  {
    speed: "15Mbps",
    price: "KSH 2000/=",
    color: "from-purple-500 to-indigo-600",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

const ServicesSection = () => {
  useEffect(() => {
    // Add Raleway font for the 3D cards
    const link = document.createElement('link');
    link.href = "https://fonts.googleapis.com/css?family=Raleway:400,400i,700";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Where Dedicated Speed is Enhanced - Your Affordable Internet Solution
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={childVariants}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <Card className="h-full bg-white/90 dark:bg-gray-800/90 shadow-lg hover:shadow-xl transition-all duration-300 border-none backdrop-blur-sm">
                <CardHeader className="pb-2">
                  <div className="w-14 h-14 rounded-full bg-primary/10 dark:bg-blue-500/20 flex items-center justify-center mb-4">
                    <service.icon className="w-8 h-8 text-primary dark:text-blue-400" />
                  </div>
                  <CardTitle className="text-gray-800 dark:text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white font-raleway">
            WiFi Packages
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 perspective-50">
            {wifiPackages.map((pkg, index) => (
              <motion.div
                key={pkg.speed}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ 
                  opacity: 1, 
                  scale: 1,
                  transition: { 
                    delay: index * 0.2,
                    duration: 0.5
                  }
                }}
                className="card-container perspective-50 mx-auto my-4"
              >
                <motion.div
                  className="card-3d relative w-64 h-72 rounded-xl font-raleway"
                  style={{ 
                    transformStyle: "preserve-3d",
                  }}
                  initial={{ 
                    rotateY: 30, 
                    rotateX: 15 
                  }}
                  whileHover={{ 
                    rotateY: -30, 
                    rotateX: -15,
                    transition: { duration: 1 }
                  }}
                >
                  {/* Layered background for 3D effect */}
                  <div className="layers absolute inset-0 -z-10" style={{ transformStyle: "preserve-3d" }}>
                    {[...Array(5)].map((_, i) => (
                      <div 
                        key={i}
                        className={`layer absolute inset-0 rounded-xl bg-gradient-to-br ${pkg.color} shadow-inner`}
                        style={{ 
                          transform: `translateZ(${i * -4}px)`,
                          boxShadow: i === 4 ? "0 0 10px rgba(0,0,0,0.5), 0 0 5px rgba(0,0,0,0.3) inset" : "0 0 5px rgba(0,0,0,0.3) inset"
                        }}
                      />
                    ))}
                  </div>
                  
                  {/* Card content */}
                  <div className="relative z-10 p-8 flex flex-col items-center h-full justify-center text-white">
                    <Wifi className="w-14 h-14 mb-6" />
                    <h4 className="text-4xl font-bold mb-2">{pkg.speed}</h4>
                    <p className="text-2xl font-semibold mb-6">{pkg.price}</p>
                    
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        variant="outline" 
                        className="bg-white/20 text-white hover:bg-white/30 border-none"
                      >
                        Get Started
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <Button
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 dark:bg-blue-600 dark:hover:bg-blue-700"
          >
            Contact Us For Custom Packages
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;

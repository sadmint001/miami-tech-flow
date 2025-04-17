
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const AboutFounder = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            About the Founder
          </h2>
          <Card className="backdrop-blur-lg bg-white/90 dark:bg-gray-800/90 border-none shadow-xl">
            <CardContent className="p-8">
              <div className="flex flex-col items-center gap-8">
                <Avatar className="w-48 h-48">
                  <AvatarImage 
                    src="/lovable-uploads/e32b9498-f8a2-4c58-aee1-57fd4b4927ee.png" 
                    alt="Munga K. Francis" 
                    className="object-cover object-center scale-110" 
                  />
                </Avatar>
                <div className="flex-1 text-center">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white uppercase">
                    MUNGA K. FRANCIS
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    With over a decade of experience in the tech industry, our founder
                    has been at the forefront of Kenya's digital transformation.
                    Passionate about bringing cutting-edge internet solutions to
                    businesses across East Africa.
                  </p>
                  <div className="flex justify-center gap-8">
                    <div className="text-sm">
                      <span className="font-bold text-primary dark:text-blue-400">10+</span>
                      <p className="text-gray-600 dark:text-gray-300">Years Experience</p>
                    </div>
                    <div className="text-sm">
                      <span className="font-bold text-primary dark:text-blue-400">500+</span>
                      <p className="text-gray-600 dark:text-gray-300">Clients Served</p>
                    </div>
                    <div className="text-sm">
                      <span className="font-bold text-primary dark:text-blue-400">24/7</span>
                      <p className="text-gray-600 dark:text-gray-300">Support</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutFounder;

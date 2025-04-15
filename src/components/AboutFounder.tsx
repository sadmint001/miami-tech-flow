
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const AboutFounder = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            About the Founder
          </h2>
          <Card className="backdrop-blur-lg bg-white/90 border-none shadow-xl">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-48 h-48 rounded-full overflow-hidden bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                  <span className="text-6xl text-white">MT</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">
                    [Founder Name]
                  </h3>
                  <p className="text-gray-600 mb-4">
                    With over a decade of experience in the tech industry, our founder
                    has been at the forefront of Miami's digital transformation.
                    Passionate about bringing cutting-edge internet solutions to
                    businesses across South Florida.
                  </p>
                  <div className="flex gap-4">
                    <div className="text-sm">
                      <span className="font-bold text-primary">10+</span>
                      <p className="text-gray-600">Years Experience</p>
                    </div>
                    <div className="text-sm">
                      <span className="font-bold text-primary">500+</span>
                      <p className="text-gray-600">Clients Served</p>
                    </div>
                    <div className="text-sm">
                      <span className="font-bold text-primary">24/7</span>
                      <p className="text-gray-600">Support</p>
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

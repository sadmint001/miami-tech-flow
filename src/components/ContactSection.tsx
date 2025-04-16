
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Facebook, Instagram, Linkedin, Twitter, Phone } from "lucide-react";
import Map from "./Map";

const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-12 text-center">Get In Touch</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <form className="space-y-6">
                <Input
                  type="text"
                  placeholder="Your Name"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
                <Textarea
                  placeholder="Your Message"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  rows={4}
                />
                <Button
                  size="lg"
                  className="w-full bg-white text-primary hover:bg-gray-100"
                >
                  Send Message
                </Button>
              </form>

              <div className="pt-6 border-t border-white/20">
                <div className="flex items-center gap-2 mb-4">
                  <Phone className="h-5 w-5" />
                  <a href="tel:+254706550440" className="text-white hover:text-white/80">
                    +254 706 550 440
                  </a>
                </div>
                
                <div className="flex gap-4">
                  <a href="#" className="text-white hover:text-white/80">
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-white hover:text-white/80">
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-white hover:text-white/80">
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-white hover:text-white/80">
                    <Linkedin className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Map />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;

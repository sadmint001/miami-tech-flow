
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-12">Get In Touch</h2>
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
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;

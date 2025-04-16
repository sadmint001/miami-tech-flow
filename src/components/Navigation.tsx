import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [activeLink, setActiveLink] = useState("home");

  const navItems = [
    { id: "home", label: "Home", href: "#home" },
    { id: "services", label: "Services", href: "#services" },
    { id: "about", label: "About", href: "#about" },
    { id: "contact", label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveLink(id);
    }
  };

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-lg border-b border-white/10"
    >
      <div className="container mx-auto flex justify-center">
        <NavigationMenu className="py-2">
          <NavigationMenuList className="gap-4 justify-center">
            {navItems.map((item) => (
              <NavigationMenuLink
                key={item.id}
                href={item.href}
                className={cn(
                  "text-base font-medium transition-colors hover:text-white/90 relative px-2 py-1",
                  activeLink === item.id ? "text-white" : "text-white/70"
                )}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
              >
                {item.label}
              </NavigationMenuLink>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </motion.div>
  );
};

export default Navigation;

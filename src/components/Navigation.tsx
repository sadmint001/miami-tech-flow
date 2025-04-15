
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
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
      <div className="container mx-auto">
        <NavigationMenu className="py-2">
          <NavigationMenuList className="gap-2 justify-center w-full">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.id}>
                <NavigationMenuLink
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
                  {activeLink === item.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 bg-white/10 rounded-md -z-10"
                      transition={{ type: "spring", duration: 0.5 }}
                    />
                  )}
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </motion.div>
  );
};

export default Navigation;

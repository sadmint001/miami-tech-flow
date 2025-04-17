
import { useState, useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Moon, Sun, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";

const Navigation = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [darkMode, setDarkMode] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

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

  const NavLinks = () => (
    <>
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
    </>
  );

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-lg border-b border-white/10"
    >
      <div className="container mx-auto flex justify-between items-center py-2">
        {isMobile ? (
          <div className="flex w-full justify-between items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[250px] bg-black/80 backdrop-blur-lg text-white">
                <div className="flex flex-col space-y-4 pt-10">
                  {navItems.map((item) => (
                    <Button
                      key={item.id}
                      variant="ghost"
                      className={cn(
                        "justify-start",
                        activeLink === item.id ? "text-white" : "text-white/70"
                      )}
                      onClick={() => {
                        scrollToSection(item.id);
                      }}
                    >
                      {item.label}
                    </Button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setDarkMode(!darkMode)}
              className="text-white ml-auto"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        ) : (
          <>
            <NavigationMenu>
              <NavigationMenuList className="gap-4">
                <NavLinks />
              </NavigationMenuList>
            </NavigationMenu>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setDarkMode(!darkMode)}
              className="text-white"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default Navigation;

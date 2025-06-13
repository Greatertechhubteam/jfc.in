"use client";

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";

const Header = () => {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "Contact", href: "/contact" },
    { name: "Support", href: "/support" },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white"
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
     <div className="flex justify-between items-center h-40">
  {/* Logo */}
  <Link href="/" className="flex items-center space-x-3 group">
    <img
      src="/logo.svg"
      alt="Jagat Fertilizer Logo"
      className="w-40 h-40 object-contain"
    />
    <div>
      {/* <h1 className="text-2xl font-bold text-gray-900">Jagat Fertilizer</h1>
      <p className="text-sm text-gray-600">& Chemical</p> */}
    </div>
  </Link>


          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <span
                  className={`text-gray-700 hover:text-primary transition-colors duration-200 font-medium relative group cursor-pointer ${location === item.href ? "text-primary" : ""
                    }`}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>
            ))}
            <Link href="/wholeseller">
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Wholeseller
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-4 mt-8">
                {navigation.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <a
                      className={`block px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors duration-200 ${location === item.href ? "text-primary bg-gray-50" : ""
                        }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  </Link>
                ))}
                <Link href="/wholeseller">
                  <Button
                    className="w-full bg-primary hover:bg-primary/90 text-white mt-4"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Wholeseller Program
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;

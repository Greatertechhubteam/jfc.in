import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Leaf, Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "Contact", href: "/contact" },
    { name: "Support", href: "/support" },
  ];

  const services = [
    "Soil Testing",
    "Agro Consultancy",
    "Fast Delivery",
    "Technical Support",
    "Custom Blending",
    "Training Programs",
  ];

  const productCategories = [
    "Organic Fertilizers",
    "Chemical Fertilizers",
    "Pesticides",
    "Seeds",
    "Equipment",
    "Soil Conditioners",
  ];

  const legalLinks = [
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Disclaimer", href: "/disclaimer" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
  <div className="space-y-6">
        <Link href="/" className="flex items-center space-x-3 group">
          <img
            src="/logo.svg"
            alt="Jagat Fertilizer Logo"
            className="w-20 h-20 object-contain" // Adjusted to better fit in footer
          />
          <div>
            {/* <h3 className="text-xl font-bold">Jagat Fertilizer</h3> */}
            {/* <p className="text-sm text-gray-400">& Chemical</p> */}
          </div>
        </Link>
        <p className="text-gray-400 text-sm leading-relaxed">
          Leading provider of premium fertilizers and agricultural solutions.
          Trusted by farmers for over two decades with commitment to sustainable farming practices.
        </p>
        <div className="flex space-x-4">
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-primary hover:bg-gray-800">
            <Facebook className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-primary hover:bg-gray-800">
            <Twitter className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-primary hover:bg-gray-800">
            <Instagram className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-primary hover:bg-gray-800">
            <Linkedin className="h-5 w-5" />
          </Button>
        </div>
      </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>
                    <a className="text-gray-400 hover:text-primary transition-colors duration-200 text-sm">
                      {link.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200 text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-gray-400 text-sm">
                  <p>Gata No\122, Mohamad Karimpur Urf Dhakar, Khurja Bulandshahar, Uttar Pradesh, 203131 India</p>
                  {/* <p>Green Valley, Farming District</p>
                  <p>State 123456</p> */}
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-gray-400 text-sm">+91 7900400900</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-gray-400 text-sm">info.jagatfertilizer@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div>
              <h4 className="text-lg font-semibold mb-2">Stay Updated</h4>
              <p className="text-gray-400 text-sm">Subscribe to our newsletter for agricultural tips and product updates</p>
            </div>
            <div className="flex w-full md:w-auto space-x-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-primary"
              />
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Jagat Fertilizer and Chemical. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              {legalLinks.map((link) => (
                <Link key={link.name} href={link.href}>
                  <a className="text-gray-400 hover:text-primary transition-colors duration-200">
                    {link.name}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

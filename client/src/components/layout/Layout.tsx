import { ReactNode, useEffect } from "react";
import { useLocation } from "wouter";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [location] = useLocation();

  useEffect(() => {
    // Update page title based on location
    const getPageTitle = (path: string) => {
      switch (path) {
        case "/":
          return "Jagat Fertilizer & Chemical - Premium Agricultural Solutions";
        case "/about":
          return "About Us - Jagat Fertilizer & Chemical";
        case "/services":
          return "Our Services - Jagat Fertilizer & Chemical";
        case "/products":
          return "Products - Jagat Fertilizer & Chemical";
        case "/contact":
          return "Contact Us - Jagat Fertilizer & Chemical";
        case "/terms":
          return "Terms & Conditions - Jagat Fertilizer & Chemical";
        case "/privacy":
          return "Privacy Policy - Jagat Fertilizer & Chemical";
        case "/disclaimer":
          return "Disclaimer - Jagat Fertilizer & Chemical";
        case "/support":
          return "Support Center - Jagat Fertilizer & Chemical";
        case "/wholeseller":
          return "Wholeseller Program - Jagat Fertilizer & Chemical";
        default:
          return "Jagat Fertilizer & Chemical";
      }
    };

    document.title = getPageTitle(location);

    // Add meta description based on page
    const getMetaDescription = (path: string) => {
      switch (path) {
        case "/":
          return "Leading provider of fertilizers, chemicals, and agricultural solutions. Expert soil testing, agro consultancy, and premium products for sustainable farming.";
        case "/about":
          return "Learn about Jagat Fertilizer & Chemical's 20+ years of experience in providing quality agricultural solutions to farmers across the region.";
        case "/services":
          return "Comprehensive agricultural services including soil testing, agro consultancy, fast delivery, and 24/7 technical support for modern farming.";
        case "/products":
          return "Discover our range of premium fertilizers, chemicals, seeds, and agricultural equipment for optimal crop yields and sustainable farming.";
        case "/contact":
          return "Get in touch with Jagat Fertilizer & Chemical for all your agricultural needs. Contact us for expert consultation and quality products.";
        default:
          return "Jagat Fertilizer & Chemical - Your trusted partner in agriculture with premium fertilizers, chemicals, and expert consultancy services.";
      }
    };

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', getMetaDescription(location));

    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

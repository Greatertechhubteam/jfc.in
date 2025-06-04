import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import HeroSection from "@/components/ui/hero-section";
import FeatureCard from "@/components/ui/feature-card";
import ProductCard from "@/components/ui/product-card";
import { 
  Award, 
  Truck, 
  Users, 
  DollarSign, 
  Leaf, 
  Phone,
  ArrowRight,
  Star
} from "lucide-react";

const HomePage = () => {
  const features = [
    {
      icon: <Award />,
      title: "Premium Quality",
      description: "ISO certified products ensuring the highest standards for your crops"
    },
    {
      icon: <Truck />,
      title: "Fast Delivery",
      description: "Quick and reliable delivery to your doorstep across all regions"
    },
    {
      icon: <Users />,
      title: "Expert Support",
      description: "Professional agro consultancy and personalized farming guidance"
    },
    {
      icon: <DollarSign />,
      title: "Best Prices",
      description: "Competitive pricing with special bulk discounts for wholesalers"
    }
  ];

  const featuredProducts = [
    {
      name: "NPK Complex Fertilizer",
      description: "Balanced nutrition for optimal crop growth and development",
      price: "₹850/bag",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      category: "Fertilizers",
      tags: ["NPK", "Balanced", "High Quality"]
    },
    {
      name: "Organic Compost",
      description: "Natural organic fertilizer for sustainable farming practices",
      price: "₹650/bag",
      image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      category: "Organic",
      tags: ["Organic", "Eco-friendly", "Natural"]
    },
    {
      name: "Crop Protection Spray",
      description: "Effective pest and disease control solution",
      price: "₹450/L",
      image: "https://images.unsplash.com/photo-1560582861-45078880e48e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      category: "Chemicals",
      tags: ["Pesticide", "Protection", "Effective"]
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <HeroSection
        title="Premium Agricultural Solutions"
        subtitle="Growing Success Together"
        description="Leading provider of high-quality fertilizers, chemicals, and comprehensive agricultural services. Empowering farmers with expert consultancy and innovative solutions for sustainable growth."
        backgroundImage="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&h=1380"
        height="xl"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/products">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold">
              <Leaf className="mr-2 h-5 w-5" />
              Explore Products
            </Button>
          </Link>
          <Link href="/contact">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-white text-black hover:bg-primary/90 hover:text-white px-8 py-4 text-lg font-semibold"
            >
              <Phone className="mr-2 h-5 w-5" />
              Contact Us
            </Button>
          </Link>
        </div>
      </HeroSection>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Jagat Fertilizer?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Trusted by thousands of farmers across the region for quality products and expert agricultural guidance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About Jagat Fertilizer & Chemical
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                With over two decades of experience in the agricultural industry, Jagat Fertilizer & Chemical has been 
                a trusted partner for farmers seeking quality products and expert guidance.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We specialize in providing comprehensive agricultural solutions including premium fertilizers, 
                crop protection chemicals, soil testing services, and professional agro consultancy.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">20+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">5000+</div>
                  <div className="text-gray-600">Happy Farmers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">200+</div>
                  <div className="text-gray-600">Products</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-gray-600">Locations</div>
                </div>
              </div>

              <Link href="/about">
                <Button className="bg-primary hover:bg-primary/90 text-white">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=800" 
                alt="Agricultural facility" 
                className="rounded-xl shadow-lg w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our most popular and effective agricultural solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product, index) => (
              <ProductCard
                key={product.name}
                name={product.name}
                description={product.description}
                price={product.price}
                image={product.image}
                category={product.category}
                tags={product.tags}
                index={index}
              />
            ))}
          </div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link href="/products">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Farmers Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real testimonials from satisfied customers across the region
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full">
                  <CardContent className="p-0">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4 italic">
                      "Jagat Fertilizer has transformed my farm's productivity. Their soil testing service and custom fertilizer recommendations increased my yield by 30%."
                    </p>
                    <div className="flex items-center">
                      {/* <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div> */}
                      <div>
                        <h4 className="font-semibold text-gray-900">Ram {index + 1}</h4>
                        <p className="text-gray-500 text-sm">Agricultural Customer</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Boost Your Crop Yield?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Join thousands of satisfied farmers who trust Jagat Fertilizer for their agricultural needs. 
              Get expert consultation and premium products today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100 px-8 py-4">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: +91 98765 43210
                </Button>
              </Link>
              <a href="https://wa.me/7900400900" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-primary hover:bg-white hover:text-primary px-8 py-4"
                >
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

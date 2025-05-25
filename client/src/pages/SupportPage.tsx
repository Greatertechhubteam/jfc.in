import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import HeroSection from "@/components/ui/hero-section";
import FAQItem from "@/components/ui/faq-item";
import { 
  HelpCircle, 
  MessageSquare, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  Headphones,
  FileText,
  Users
} from "lucide-react";

const SupportPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Support Ticket Submitted!",
      description: "We'll respond to your inquiry within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      category: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const faqs = [
    {
      question: "What types of fertilizers do you offer?",
      answer: "We offer a comprehensive range including organic fertilizers (compost, vermicompost, bio-fertilizers), chemical fertilizers (NPK, urea, DAP), and custom blended fertilizers based on your soil test results."
    },
    {
      question: "How long does soil testing take?",
      answer: "Our standard soil testing process takes 3-5 business days. You'll receive a comprehensive report with detailed nutrient analysis and customized fertilizer recommendations for your specific soil conditions."
    },
    {
      question: "Do you provide delivery services?",
      answer: "Yes, we offer reliable delivery services across the region. Same-day delivery is available for orders placed before 2 PM. We also provide GPS tracking so you can monitor your order status in real-time."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for unused products in original packaging. For defective or damaged products, we provide immediate replacement or full refund. Contact our support team within 24 hours of delivery for assistance."
    },
    {
      question: "Do you offer bulk discounts?",
      answer: "Yes, we offer attractive bulk discounts for large orders. Discounts start from 5% for orders above ₹50,000 and can go up to 15% for orders above ₹2,00,000. Contact our sales team for custom pricing on bulk orders."
    },
    {
      question: "How can I get agro consultancy services?",
      answer: "Our agro consultancy services are available through scheduled appointments. You can book a consultation via phone, WhatsApp, or through our website. Our experts provide on-site visits, crop planning, pest management strategies, and ongoing support throughout the growing season."
    }
  ];

  const supportChannels = [
    {
      icon: <Phone />,
      title: "Phone Support",
      description: "Speak directly with our agricultural experts",
      contact: "+91 98765 43210",
      availability: "Mon-Sat: 8AM-8PM",
      action: "Call Now"
    },
    {
      icon: <MessageSquare />,
      title: "WhatsApp Support",
      description: "Quick responses and instant assistance",
      contact: "+91 98765 43210",
      availability: "24/7 Emergency Support",
      action: "Chat Now"
    },
    {
      icon: <Mail />,
      title: "Email Support",
      description: "Detailed responses to complex queries",
      contact: "support@jagatfertilizer.com",
      availability: "Response within 24 hours",
      action: "Email Us"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <HeroSection
        title="Support Center"
        description="Find answers to common questions or submit a support ticket. Our team is dedicated to providing you with the best agricultural support and guidance."
        backgroundImage="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600"
        height="md"
      />

      {/* Support Channels */}
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
              How Can We Help You?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose your preferred way to get in touch with our support team
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {supportChannels.map((channel, index) => (
              <motion.div
                key={channel.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <div className="text-primary text-2xl">
                        {channel.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{channel.title}</h3>
                    <p className="text-gray-600 mb-4">{channel.description}</p>
                    <p className="text-primary font-semibold mb-2">{channel.contact}</p>
                    <p className="text-gray-500 text-sm mb-6">{channel.availability}</p>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                      {channel.action}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Support Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* FAQ Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                  <HelpCircle className="mr-3 h-8 w-8 text-primary" />
                  Frequently Asked Questions
                </h2>
                
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <FAQItem
                      key={faq.question}
                      question={faq.question}
                      answer={faq.answer}
                      index={index}
                    />
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Support Sidebar */}
            <div className="space-y-8">
              {/* Support Ticket Form */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                      <FileText className="mr-2 h-5 w-5 text-primary" />
                      Submit Support Ticket
                    </h3>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="name">Your Name *</Label>
                        <Input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="Enter your name"
                          required
                          className="mt-1"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="your.email@example.com"
                          required
                          className="mt-1"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="category">Issue Type</Label>
                        <Select onValueChange={(value) => handleInputChange("category", value)}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="product">Product Issue</SelectItem>
                            <SelectItem value="delivery">Delivery Problem</SelectItem>
                            <SelectItem value="technical">Technical Support</SelectItem>
                            <SelectItem value="billing">Billing Question</SelectItem>
                            <SelectItem value="general">General Inquiry</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="message">Description *</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                          placeholder="Describe your issue..."
                          required
                          className="mt-1"
                          rows={4}
                        />
                      </div>
                      
                      <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
                        <Send className="mr-2 h-4 w-4" />
                        Submit Ticket
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Quick Support Options */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-50">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Support</h3>
                    
                    <div className="space-y-3">
                      <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                        <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                          <MessageSquare className="mr-2 h-4 w-4" />
                          WhatsApp Support
                        </Button>
                      </a>
                      
                      <a href="tel:+919876543210">
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                          <Phone className="mr-2 h-4 w-4" />
                          Call Support
                        </Button>
                      </a>
                      
                      <a href="mailto:support@jagatfertilizer.com">
                        <Button variant="outline" className="w-full">
                          <Mail className="mr-2 h-4 w-4" />
                          Email Support
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Support Hours */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Card className="bg-primary text-white">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-4 flex items-center">
                      <Clock className="mr-2 h-5 w-5" />
                      Support Hours
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Monday - Friday:</span>
                        <span>8:00 AM - 8:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday:</span>
                        <span>9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday:</span>
                        <span>10:00 AM - 4:00 PM</span>
                      </div>
                    </div>
                    <p className="text-xs mt-4 text-green-100">Emergency support available 24/7 via WhatsApp</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Knowledge Base */}
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
              Knowledge Base
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse our comprehensive guides and resources
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FileText />,
                title: "Product Guides",
                description: "Detailed instructions for using our fertilizers and chemicals",
                count: "25+ Guides"
              },
              {
                icon: <Users />,
                title: "Best Practices",
                description: "Agricultural best practices and farming techniques",
                count: "40+ Articles"
              },
              {
                icon: <Headphones />,
                title: "Video Tutorials",
                description: "Step-by-step video guides for common procedures",
                count: "15+ Videos"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <div className="text-primary text-2xl">
                        {item.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <p className="text-primary font-semibold">{item.count}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportPage;

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
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare,
  Send
} from "lucide-react";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: <MapPin />,
      title: "Our Address",
      details: ["Gata No-122, Mohamad Karimpur, Urf Dhakar ", "Uttar Pradesh, 203131 India"]
    },
    {
      icon: <Phone />,
      title: "Phone Numbers",
      details: ["Main: +91 7900400900"]
    },
    {
      icon: <Mail />,
      title: "Email Addresses",
      details: ["info.jagatfertilizer@gmail.com", "sales@jagatfertilizer.com"]
    },
    {
      icon: <Clock />,
      title: "Business Hours",
      details: ["Mon - Sat: 8:00 AM - 7:00 PM", "Sunday: 9:00 AM - 5:00 PM"]
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <HeroSection
        title="Contact Us"
        description="Get in touch with our agricultural experts. We're here to help you with all your farming needs and provide personalized solutions for your agricultural challenges."
        backgroundImage="/hero3.png"
        height="md"
      />

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          type="text"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          placeholder="Enter your first name"
                          required
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          type="text"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          placeholder="Enter your last name"
                          required
                          className="mt-2"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your.email@example.com"
                        required
                        className="mt-2"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="+91 123456789"
                        required
                        className="mt-2"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Select onValueChange={(value) => handleInputChange("subject", value)}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="product">Product Information</SelectItem>
                          <SelectItem value="technical">Technical Support</SelectItem>
                          <SelectItem value="bulk">Bulk Orders</SelectItem>
                          <SelectItem value="soil">Soil Testing</SelectItem>
                          <SelectItem value="consultation">Agro Consultancy</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Tell us about your requirements..."
                        required
                        className="mt-2"
                        rows={4}
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-4"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <div className="text-primary">{info.icon}</div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600">{detail}</p>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Quick Contact */}
              <Card className="bg-primary text-white">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-6">Quick Contact</h3>
                  
                  <div className="space-y-4">
                    <a 
                      href="https://wa.me/917900400900" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button className="w-full bg-white text-primary hover:bg-gray-100">
                        <MessageSquare className="mr-2 h-4 w-4" />
                        WhatsApp: +91 7900400900
                      </Button>
                    </a>
                    
                    <a href="tel:+919876543210" className="block">
                      <Button className="w-full bg-green-600 text-white hover:bg-green-700">
                        <Phone className="mr-2 h-4 w-4" />
                        Call Now: +91 7900400900
                      </Button>
                    </a>
                    
                    <a href="mailto:info.jagatfertilizer@gmail.com" className="block">
                      <Button 
                        variant="outline" 
                        className="w-full border-2 border-white text-primary hover:bg-white hover:text-primary"
                      >
                        <Mail className="mr-2 h-4 w-4" />
                        Email Us
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
<section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div 
      className="text-center mb-12"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Visit Our Location
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Find us easily with our convenient location in the heart of the agricultural district
      </p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="rounded-xl overflow-hidden shadow-lg"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3514.2109671186086!2d77.83086117548733!3d28.261619175869253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1i1024!2i768!4f13.1!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDE1JzQxLjgiTiA3N8KwNTAnMDAuNCJF!5e0!3m2!1sen!2sin!4v1749715926613!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-[450px] rounded-xl border-0"
      ></iframe>
    </motion.div>
  </div>
</section>


      {/* Office Hours */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="text-center h-full">
                <CardContent className="p-8">
                  <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Office Hours</h3>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>8:00 AM - 7:00 PM</span>
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
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center h-full">
                <CardContent className="p-8">
                  <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Emergency Support</h3>
                  <p className="text-gray-600 mb-4">
                    24/7 emergency support available for urgent agricultural needs
                  </p>
                  <Button className="bg-red-500 hover:bg-red-600 text-white">
                    Emergency Hotline
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="text-center h-full">
                <CardContent className="p-8">
                  <MessageSquare className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">WhatsApp Support</h3>
                  <p className="text-gray-600 mb-4">
                    Get instant support and quick responses through WhatsApp
                  </p>
                  <a href="https://wa.me/7900400900" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-green-500 hover:bg-green-600 text-white">
                      Chat Now
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

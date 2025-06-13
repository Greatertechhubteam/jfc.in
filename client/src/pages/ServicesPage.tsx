import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/ui/hero-section";
import { 
  TestTube, 
  UserCheck, 
  Truck, 
  SprayCan, 
  Phone, 
  GraduationCap,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const ServicesPage = () => {
  const services = [
 
    {
      icon: <UserCheck />,
      title: "Agro Consultancy",
      description: "Expert agricultural consultation services including crop planning, pest management strategies, and sustainable farming practices tailored to your specific needs.",
      features: [
        "Crop selection guidance",
        "Pest management plans",
        "Fertilization schedules",
        "Yield optimization"
      ]
    },
    {
      icon: <Truck />,
      title: "Fast Delivery Service",
      description: "Reliable and timely delivery of all agricultural products directly to your farm. We ensure your products reach you in perfect condition when you need them.",
      features: [
        "Same-day delivery available",
        "GPS tracking",
        "Secure packaging",
        "Flexible scheduling"
      ]
    },
    {
      icon: <SprayCan />,
      title: "Custom Fertilizer Blending",
      description: "Specialized fertilizer blending services to create custom nutrient mixes based on your soil test results and crop requirements.",
      features: [
        "Soil-specific formulations",
        "Crop-specific nutrients",
        "Organic options available",
        "Quality guaranteed"
      ]
    },
    {
      icon: <Phone />,
      title: "24/7 Technical Support",
      description: "Round-the-clock technical support for all your agricultural queries. Our experts are always available to help you make informed decisions.",
      features: [
        "Emergency support",
        "Phone and WhatsApp",
        "Expert guidance",
        "Problem resolution"
      ]
    },
    {
      icon: <GraduationCap />,
      title: "Farmer Training Programs",
      description: "Educational workshops and training programs to help farmers learn modern agricultural techniques and best practices for sustainable farming.",
      features: [
        "Hands-on workshops",
        "Modern techniques",
        "Certification programs",
        "Group and individual sessions"
      ]
    }
  ];

  const processSteps = [
    { step: 1, title: "Contact Us", description: "Reach out via phone, WhatsApp, or visit our office" },
    { step: 2, title: "Assessment", description: "Our experts evaluate your needs and requirements" },
    { step: 3, title: "Solution", description: "Customized recommendations and service delivery" },
    { step: 4, title: "Support", description: "Ongoing support and follow-up assistance" }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <HeroSection
        title="Our Services"
        description="Comprehensive agricultural solutions designed to support your farming journey from soil preparation to harvest. Our expert team provides personalized services to maximize your agricultural success."
        backgroundImage="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600"
        height="md"
      />

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Agricultural Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From soil testing to harvest optimization, we provide end-to-end agricultural services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                      <div className="text-primary text-2xl">
                        {service.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Button variant="ghost" className="text-primary hover:text-primary/80 p-0">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Service Process</h2>
              <p className="text-xl text-gray-600">Simple steps to get the agricultural support you need</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center relative"
                >
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                  
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full">
                      <div className="border-t-2 border-dashed border-gray-300 w-full"></div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
<section className="min-h-screen bg-white flex items-center justify-center px-4">
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="max-w-2xl text-center"
  >
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
      Service Coverage Areas
    </h2>

    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
      We proudly serve farmers across multiple districts and regions, providing comprehensive 
      agricultural solutions wherever you are. Our extensive network ensures reliable service 
      delivery and support throughout the agricultural belt.
    </p>

    <div className="grid grid-cols-2 gap-6 mb-8">
      {[
        { title: "Coverage", value: "20+ Districts" },
        { title: "Response Time", value: "24 Hours" },
        { title: "Service Centers", value: "15+ Locations" },
        { title: "Delivery Network", value: "500+ Routes" },
      ].map((item) => (
        <div key={item.title}>
          <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
          <p className="text-2xl font-bold text-primary">{item.value}</p>
        </div>
      ))}
    </div>

    <Button className="bg-primary hover:bg-primary/90 text-white">
      Check Service Availability
    </Button>
  </motion.div>
</section>




      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your agricultural needs and discover how our services can help boost your farm's productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-primary hover:bg-primary hover:text-white">
                Call: +91 7900400900
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;

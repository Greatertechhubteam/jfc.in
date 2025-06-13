import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import HeroSection from "@/components/ui/hero-section";
import { AlertTriangle, Info, Shield, FileText, Gavel, Phone } from "lucide-react";

const DisclaimerPage = () => {
  const disclaimerSections = [
    {
      title: "1. General Disclaimer",
      icon: <Info />,
      content: `The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, Jagat Fertilizer and Chemical excludes all representations, warranties, and conditions relating to our website and the use of this website.`
    },
    {
      title: "2. Product Information",
      icon: <FileText />,
      content: `While we strive to provide accurate product information, we cannot guarantee that all product descriptions, specifications, pricing, and other content is accurate, complete, reliable, current, or error-free.`,
      warning: {
        title: "Important:",
        message: "Always read product labels and follow manufacturer instructions before use. Consult with agricultural experts for proper application methods."
      }
    },
    {
      title: "3. Agricultural Advice",
      icon: <Shield />,
      content: `Any agricultural advice, recommendations, or consultancy services provided are for informational purposes only and should not be considered as professional agricultural advice. We recommend consulting with certified agricultural professionals for specific farming decisions.`,
      list: [
        "Soil conditions vary by location and season",
        "Crop requirements differ based on variety and growing conditions",
        "Local regulations may apply to pesticide and fertilizer use",
        "Weather and environmental factors affect product performance"
      ]
    },
    {
      title: "4. Limitation of Liability",
      icon: <Gavel />,
      content: `To the maximum extent permitted by applicable law, we exclude all liability for any loss or damage arising from:`,
      list: [
        "Use of our products or services",
        "Information provided on our website",
        "Interruption of business operations",
        "Crop failure or reduced yields",
        "Environmental damage",
        "Third-party actions or products"
      ]
    },
    {
      title: "5. Product Performance",
      icon: <AlertTriangle />,
      content: `Product performance may vary based on numerous factors including but not limited to:`,
      list: [
        "Soil conditions and composition",
        "Weather and climate conditions",
        "Application methods and timing",
        "Crop varieties and growth stages",
        "Pest and disease pressure",
        "Water availability and quality"
      ]
    }
  ];

  const additionalSections = [
    {
      title: "6. Safety and Environmental Considerations",
      content: `Users are responsible for:`,
      list: [
        "Following all safety instructions and warnings",
        "Proper storage and handling of products",
        "Compliance with local environmental regulations",
        "Appropriate disposal of containers and unused products"
      ],
      safetyWarning: {
        title: "Safety Warning:",
        message: "Always wear appropriate protective equipment when handling chemicals and fertilizers. Keep products away from children and pets."
      }
    },
    {
      title: "7. Third-Party Content",
      content: `Our website may include content from third parties. We are not responsible for the accuracy, completeness, or reliability of third-party content.`
    },
    {
      title: "8. Regulatory Compliance",
      content: `Customers are responsible for ensuring compliance with all applicable local, state, and federal regulations regarding the purchase, storage, and use of agricultural products.`
    },
    {
      title: "9. Updates to Disclaimer",
      content: `We may update this disclaimer from time to time. Any changes will be posted on this page with an updated effective date.`
    },
    {
      title: "10. Contact Information",
      content: `If you have questions about this disclaimer, please contact us at:`,
      contact: {
        company: "Jagat Fertilizer and Chemical",
        email: "legal@jagatfertilizer.com",
        phone: "+91 98765 43210",
        address: "123 Agricultural Plaza, Green Valley, Farming District, State 123456"
      }
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <HeroSection
        title="Disclaimer"
        subtitle="Important legal information about our products and services"
        description="Please read this disclaimer carefully to understand the terms and limitations regarding the use of our products and services."
        backgroundImage="https://images.unsplash.com/photo-1589994965851-a8f479c573a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600"
        height="md"
      />

      {/* Key Disclaimers Overview */}
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
              Important Legal Information
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Understanding your responsibilities and our limitations when using our products and services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {disclaimerSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <div className="text-primary text-xl">
                        {section.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{section.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{section.content}</p>
                    
                    {section.warning && (
                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
                        <div className="flex items-start">
                          <AlertTriangle className="h-4 w-4 text-yellow-600 mt-0.5 mr-2 flex-shrink-0" />
                          <div>
                            <p className="text-yellow-700 text-sm">
                              <strong>{section.warning.title}</strong> {section.warning.message}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {section.list && (
                      <ul className="text-gray-600 text-sm space-y-1">
                        {section.list.slice(0, 3).map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            {item}
                          </li>
                        ))}
                        {section.list.length > 3 && (
                          <li className="text-primary text-sm font-medium">
                            +{section.list.length - 3} more items
                          </li>
                        )}
                      </ul>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Disclaimer Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-lg">
              <CardContent className="p-8 lg:p-12">
                <div className="prose prose-lg max-w-none">
                  {/* Main disclaimer sections */}
                  {disclaimerSections.map((section, index) => (
                    <motion.section
                      key={section.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="mb-8"
                    >
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
                      <p className="text-gray-600 mb-4 leading-relaxed">{section.content}</p>
                      
                      {section.warning && (
                        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                          <div className="flex">
                            <div className="flex-shrink-0">
                              <AlertTriangle className="h-5 w-5 text-yellow-400" />
                            </div>
                            <div className="ml-3">
                              <p className="text-sm text-yellow-700">
                                <strong>{section.warning.title}</strong> {section.warning.message}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {section.list && (
                        <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                          {section.list.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </motion.section>
                  ))}

                  {/* Additional sections */}
                  {additionalSections.map((section, index) => (
                    <motion.section
                      key={section.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: (disclaimerSections.length + index) * 0.1 }}
                      viewport={{ once: true }}
                      className="mb-8"
                    >
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
                      <p className="text-gray-600 mb-4 leading-relaxed">{section.content}</p>
                      
                      {section.safetyWarning && (
                        <div className="bg-red-50 border-l-4 border-red-400 p-4 my-6">
                          <div className="flex">
                            <div className="flex-shrink-0">
                              <AlertTriangle className="h-5 w-5 text-red-400" />
                            </div>
                            <div className="ml-3">
                              <p className="text-sm text-red-700">
                                <strong>{section.safetyWarning.title}</strong> {section.safetyWarning.message}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {section.list && (
                        <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                          {section.list.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      )}
                      
                      {section.contact && (
                        <div className="bg-gray-50 p-6 rounded-lg mt-4">
                          <p className="text-gray-600 mb-2">
                            <strong>{section.contact.company}</strong>
                          </p>
                          <p className="text-gray-600">Email: {section.contact.email}</p>
                          <p className="text-gray-600">Phone: {section.contact.phone}</p>
                          <p className="text-gray-600">Address: {section.contact.address}</p>
                        </div>
                      )}
                    </motion.section>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Legal Notice */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Gavel className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h3 className="text-2xl font-bold mb-4">Legal Disclaimer</h3>
            <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
              This disclaimer is subject to change without notice. The laws of India govern this disclaimer. 
              Any disputes arising from the use of our products or services will be subject to the exclusive 
              jurisdiction of the courts in our registered location. For immediate assistance or clarification 
              on any legal matters, please contact our legal department.
            </p>
            <div className="mt-6">
              <a href="tel:+919876543210" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
                <Phone className="h-4 w-4 mr-2" />
                Legal Helpline: +91 98765 43210
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DisclaimerPage;
